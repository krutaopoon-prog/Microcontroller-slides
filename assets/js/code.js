/* ===========================================
   CodeHL — ไฮไลต์โค้ดภาษาซี/Arduino ใน <pre class="code"> และหัวลูกศรของผังงาน <svg class="fc">
   - เขียนโค้ดตรง ๆ ใน <pre class="code"> (ต้องเขียน &lt; &gt; &amp; แทน < > &)
   - data-ln            แสดงเลขบรรทัด (data-ln="11" = เริ่มที่บรรทัด 11)
   - data-hl="2,4-6"    ไฮไลต์บรรทัด (สีเหลือง) · data-hl2 (สีฟ้า) · data-err (สีแดง)
   - data-frag="3-4|5"  แสดงบรรทัดทีละกลุ่มเมื่อกด → (กลุ่มคั่นด้วย |)
   หน้าเว็บที่สร้างโจทย์ภายหลังให้เรียก CodeHL.render(element)
   =========================================== */
(function (g) {
    'use strict';
    const KW = new Set('if else for while do switch case default break continue return goto sizeof struct union typedef const static volatile'.split(' '));
    const TY = new Set('void int char byte boolean bool float double long short unsigned signed word String uint8_t int8_t uint16_t int16_t uint32_t int32_t size_t'.split(' '));
    const CO = new Set('HIGH LOW INPUT OUTPUT INPUT_PULLUP true false LED_BUILTIN'.split(' '));
    const RE = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(#\s*(?:define|include|ifdef|ifndef|endif|if|else|pragma)\b)|(\b(?:0[bB][01]+|0[xX][0-9a-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b)|([A-Za-z_]\w*)(?=(\s*\()?)/g;
    const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

    /* แบ่งโค้ดเป็นชิ้น [คลาส, ข้อความ] */
    function tokens(src) {
        const out = [];
        let last = 0, m;
        RE.lastIndex = 0;
        while ((m = RE.exec(src))) {
            if (m.index > last) out.push(['', src.slice(last, m.index)]);
            let cls = '';
            if (m[1]) cls = 'c';
            else if (m[2]) cls = 's';
            else if (m[3]) cls = 'p';
            else if (m[4]) cls = 'n';
            else if (m[5]) cls = KW.has(m[5]) ? 'k' : TY.has(m[5]) ? 't' : CO.has(m[5]) ? 'n' : m[6] ? 'f' : '';
            out.push([cls, m[0]]);
            last = m.index + m[0].length;
        }
        if (last < src.length) out.push(['', src.slice(last)]);
        return out;
    }

    function dedent(src) {
        let lines = src.replace(/\r/g, '').replace(/\t/g, '    ').split('\n');
        while (lines.length && !lines[0].trim()) lines.shift();
        while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
        const ind = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
        return lines.map(l => l.slice(ind)).join('\n');
    }

    /* "2,4-6" -> Set {2,4,5,6} */
    function range(s) {
        const set = new Set();
        String(s || '').split(',').forEach(p => {
            const [a, b] = p.split('-').map(Number);
            if (!a) return;
            for (let i = a; i <= (b || a); i++) set.add(i);
        });
        return set;
    }

    function renderOne(pre) {
        if (pre.dataset.done) return;
        pre.dataset.done = '1';
        const src = dedent(pre.textContent);
        // แปลงชิ้นเป็นบรรทัด (คอมเมนต์หลายบรรทัดต้องปิด/เปิด span ใหม่ทุกบรรทัด)
        const lines = [''];
        tokens(src).forEach(([cls, text]) => {
            text.split('\n').forEach((part, i) => {
                if (i) lines.push('');
                if (part) lines[lines.length - 1] += cls ? `<span class="${cls}">${esc(part)}</span>` : esc(part);
            });
        });
        const start = +pre.dataset.ln || 1;
        if (pre.hasAttribute('data-ln')) pre.classList.add('ln');
        const hl = range(pre.dataset.hl), hl2 = range(pre.dataset.hl2), err = range(pre.dataset.err);
        const groups = (pre.dataset.frag || '').split('|').map(range);
        const html = [];
        let open = -1;
        lines.forEach((l, i) => {
            const n = start + i;
            const gi = groups.findIndex(set => set.has(n));
            if (gi !== open) {
                if (open >= 0) html.push('</span>');
                if (gi >= 0) html.push('<span class="frag" style="display:block">');
                open = gi;
            }
            const c = ['l', hl.has(n) && 'hl', hl2.has(n) && 'hl2', err.has(n) && 'err'].filter(Boolean).join(' ');
            html.push(`<span class="${c}" data-n="${n}">${l || ' '}</span>`);
        });
        if (open >= 0) html.push('</span>');
        pre.innerHTML = html.join('');
    }

    /* หัวลูกศรของผังงาน: ใส่ <marker id="fc-ah"> ครั้งเดียวในหน้า */
    function markers() {
        if (document.getElementById('fc-ah') || !document.querySelector('svg.fc')) return;
        const NS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', '0'); svg.setAttribute('height', '0');
        svg.setAttribute('aria-hidden', 'true');
        svg.style.position = 'absolute';
        svg.innerHTML = '<defs><marker id="fc-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#2a2733"/></marker></defs>';
        document.body.prepend(svg);
    }

    function render(root) {
        (root || document).querySelectorAll('pre.code').forEach(renderOne);
        markers();
    }

    g.CodeHL = { render, tokens };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => render(document));
    else render(document);
})(window);
