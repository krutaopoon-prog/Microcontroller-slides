/* แบบฝึกหัดบทที่ 2 — ไฟล์สาธารณะ ไม่มีเฉลย (เฉลยเข้ารหัสอยู่ใน answers.enc.js)
   ชนิดโจทย์: pick = เลือกคำตอบ · num = เติมคำตอบเป็นตัวเลข */
(function () {
  const STEPS = ['1 วิเคราะห์ปัญหา', '2 ออกแบบวิธีแก้ปัญหา', '3 เขียนโปรแกรม', '4 ทดสอบและแก้ไขโปรแกรม', '5 จัดทำเอกสารประกอบ'];
  const SYMS = ['จุดเริ่มต้น / จุดสิ้นสุด', 'กระบวนการประมวลผล', 'การตัดสินใจ', 'ชุดกระบวนการที่เตรียมไว้แล้ว', 'จุดเชื่อมในหน้าเดียวกัน', 'จุดเชื่อมไปหน้าอื่น'];
  const OKNG = ['ใช้ได้', 'ใช้ไม่ได้'];
  const TYPES = ['boolean', 'byte', 'int', 'long', 'float'];
  const TF = ['จริง', 'เท็จ'];
  const STMT = ['if', 'if-else', 'switch', 'for', 'while', 'do-while'];
  const FN = ['ไม่รับค่า ไม่ส่งคืนค่า', 'รับค่า ไม่ส่งคืนค่า', 'ไม่รับค่า ส่งคืนค่า', 'รับค่า ส่งคืนค่า'];
  const RW = ['ถูก', 'ผิด'];
  const c = s => `<code class="c">${s}</code>`;
  const pre = s => `<pre class="code">${s}</pre>`;

  window.EXERCISES = { chapter: 'บทที่ 2 การเขียนโปรแกรมภาษาซีสำหรับไมโครคอนโทรลเลอร์', sets: [
    { id: 's1', title: 'ชุดที่ 1 ขั้นตอนการพัฒนาโปรแกรมและผังงาน (หัวข้อ 2.1)', parts: [
      { title: 'ตอนที่ 1 งานต่อไปนี้อยู่ในขั้นตอนใดของการพัฒนาโปรแกรม', items: [
        { id: 's1-1', type: 'pick', q: 'วาดผังงานการทำงานของเครื่องรดน้ำต้นไม้อัตโนมัติ', options: STEPS },
        { id: 's1-2', type: 'pick', q: 'พิมพ์โค้ดภาษาซีลงใน Arduino IDE', options: STEPS },
        { id: 's1-3', type: 'pick', q: 'ถามผู้ใช้ว่าต้องการให้ระบบแสดงผลอะไร และรับข้อมูลอะไรเข้ามา', options: STEPS },
        { id: 's1-4', type: 'pick', q: 'เขียนคู่มือวิธีติดตั้งและวิธีใช้งานโปรแกรม', options: STEPS },
        { id: 's1-5', type: 'pick', q: 'ลองรันโปรแกรมแล้วพบว่า LED ไม่ติด จึงหาจุดผิดและแก้โค้ด', options: STEPS },
        { id: 's1-6', type: 'pick', q: 'เขียนรหัสจำลอง (Pseudo code) ก่อนลงมือเขียนโค้ด', options: STEPS }
      ]},
      { title: 'ตอนที่ 2 สัญลักษณ์ผังงานนี้ใช้แทนอะไร', items: [
        { id: 's1-7', type: 'pick', q: '<svg class="fc" viewBox="0 0 260 120" role="img" aria-label="dec" style="width:260px;height:120px;flex:0 0 auto"><polygon class="s dec " points="130.0,12.0 240.0,60.0 130.0,108.0 20.0,60.0"/><text x="130.0" y="60.0"></text></svg>', options: SYMS },
        { id: 's1-8', type: 'pick', q: '<svg class="fc" viewBox="0 0 260 120" role="img" aria-label="term" style="width:260px;height:120px;flex:0 0 auto"><rect class="s term " x="30.0" y="28.0" width="200" height="64" rx="32.0"/><text x="130.0" y="60.0"></text></svg>', options: SYMS },
        { id: 's1-9', type: 'pick', q: '<svg class="fc" viewBox="0 0 260 120" role="img" aria-label="off" style="width:260px;height:120px;flex:0 0 auto"><polygon class="s" points="90.0,18.0 170.0,18.0 170.0,74.0 130.0,102.0 90.0,74.0"/><text x="130.0" y="54.0"></text></svg>', options: SYMS },
        { id: 's1-10', type: 'pick', q: '<svg class="fc" viewBox="0 0 260 120" role="img" aria-label="proc" style="width:260px;height:120px;flex:0 0 auto"><rect class="s " x="30.0" y="25.0" width="200" height="70" rx="6"/><text x="130.0" y="60.0"></text></svg>', options: SYMS },
        { id: 's1-11', type: 'pick', q: '<svg class="fc" viewBox="0 0 260 120" role="img" aria-label="con" style="width:260px;height:120px;flex:0 0 auto"><circle class="s" cx="130.0" cy="60.0" r="34"/><text x="130.0" y="60.0"></text></svg>', options: SYMS },
        { id: 's1-12', type: 'pick', q: '<svg class="fc" viewBox="0 0 260 120" role="img" aria-label="sub" style="width:260px;height:120px;flex:0 0 auto"><rect class="s sub " x="30.0" y="25.0" width="200" height="70" rx="4"/><path class="ln" d="M48.0 25.0 V95.0 M212.0 25.0 V95.0"/><text x="130.0" y="60.0"></text></svg>', options: SYMS }
      ]},
      { title: 'ตอนที่ 3 ตอบเป็นตัวเลข', items: [
        { id: 's1-13', type: 'num', q: 'ขั้นตอนการพัฒนาโปรแกรมมีทั้งหมดกี่ขั้นตอน', unit: 'ขั้นตอน' },
        { id: 's1-14', type: 'num', q: 'สัญลักษณ์การตัดสินใจ (ข้าวหลามตัด) มีทางออกได้กี่ทาง', unit: 'ทาง' },
        { id: 's1-15', type: 'num', q: 'ผังงานทำไข่เจียวในสไลด์ มีสัญลักษณ์การตัดสินใจทั้งหมดกี่จุด', unit: 'จุด' },
        { id: 's1-16', type: 'num', q: 'โปรแกรมไฟกะพริบ ติด 1 วินาที ดับ 1 วินาที ถ้าเปิดเครื่อง 1 นาที LED ติด-ดับครบกี่รอบ', unit: 'รอบ' }
      ]}
    ]},
    { id: 's2', title: 'ชุดที่ 2 ตัวแปรและชนิดข้อมูล (หัวข้อ 2.2)', parts: [
      { title: 'ตอนที่ 1 ชื่อตัวแปรนี้ใช้ได้หรือไม่', items: [
        { id: 's2-1', type: 'pick', q: c('speed2'), options: OKNG },
        { id: 's2-2', type: 'pick', q: c('2speed'), options: OKNG },
        { id: 's2-3', type: 'pick', q: c('my led'), options: OKNG },
        { id: 's2-4', type: 'pick', q: c('_temp'), options: OKNG },
        { id: 's2-5', type: 'pick', q: c('for'), options: OKNG },
        { id: 's2-6', type: 'pick', q: c('led-1'), options: OKNG }
      ]},
      { title: 'ตอนที่ 2 เลือกชนิดตัวแปรที่เหมาะสมที่สุด (บอร์ด Arduino Uno)', items: [
        { id: 's2-7', type: 'pick', q: 'สถานะประตู เปิด หรือ ปิด', options: TYPES },
        { id: 's2-8', type: 'pick', q: 'เลขขาของบอร์ด 0–13', options: TYPES },
        { id: 's2-9', type: 'pick', q: 'ค่าที่อ่านจาก analogRead() 0–1023', options: TYPES },
        { id: 's2-10', type: 'pick', q: 'อุณหภูมิร่างกาย 36.5 °C', options: TYPES },
        { id: 's2-11', type: 'pick', q: 'จำนวนชิ้นงานที่นับได้ ซึ่งอาจมากถึง 100,000 ชิ้น', options: TYPES }
      ]},
      { title: 'ตอนที่ 3 ตอบเป็นตัวเลข (บอร์ด Arduino Uno)', items: [
        { id: 's2-12', type: 'num', q: 'ตัวแปรชนิด ' + c('double') + ' มีขนาดกี่ไบต์', unit: 'ไบต์' },
        { id: 's2-13', type: 'num', q: c('int x[6];') + ' มีสมาชิกทั้งหมดกี่ตัว', unit: 'ตัว' },
        { id: 's2-14', type: 'num', q: c('int y[3][4];') + ' มีสมาชิกทั้งหมดกี่ช่อง', unit: 'ช่อง' },
        { id: 's2-15', type: 'num', q: 'หลังทำงาน x มีค่าเท่าใด' + pre('byte x = 250;\nx = x + 10;') }
      ]}
    ]},
    { id: 's3', title: 'ชุดที่ 3 ตัวดำเนินการ (หัวข้อ 2.2)', parts: [
      { title: 'ตอนที่ 1 ตัวแปรทุกตัวเป็นชนิด int หาค่าของ x', items: [
        { id: 's3-1', type: 'num', q: c('x = 29 % 6;') },
        { id: 's3-2', type: 'num', q: c('x = 29 / 6;') },
        { id: 's3-3', type: 'num', q: c('x = 9 &amp; 5;') },
        { id: 's3-4', type: 'num', q: c('x = 9 | 5;') },
        { id: 's3-5', type: 'num', q: c('x = 9 ^ 5;') },
        { id: 's3-6', type: 'num', q: c('x = 7 &lt;&lt; 2;') },
        { id: 's3-7', type: 'num', q: c('x = 160 &gt;&gt; 4;') },
        { id: 's3-8', type: 'num', q: 'ค่า x สุดท้าย' + pre('int x = 10;\nx -= 4;\nx *= 3;') },
        { id: 's3-9', type: 'num', q: 'ค่า x สุดท้าย' + pre('int x = 17;\nx %= 5;\nx++;') }
      ]},
      { title: 'ตอนที่ 2 กำหนด x = 10 เงื่อนไขต่อไปนี้เป็นจริงหรือเท็จ', items: [
        { id: 's3-10', type: 'pick', q: c('x == 10'), options: TF },
        { id: 's3-11', type: 'pick', q: c('x != 10'), options: TF },
        { id: 's3-12', type: 'pick', q: c('x &gt; 3 &amp;&amp; x &lt; 8'), options: TF },
        { id: 's3-13', type: 'pick', q: c('x &lt; 3 || x &gt; 8'), options: TF },
        { id: 's3-14', type: 'pick', q: c('!(x == 10)'), options: TF }
      ]}
    ]},
    { id: 's4', title: 'ชุดที่ 4 คำสั่งเลือกทำและคำสั่งวนซ้ำ (หัวข้อ 2.2)', parts: [
      { title: 'ตอนที่ 1 ไล่โค้ดแล้วตอบเป็นตัวเลข (blink() = LED กะพริบ 1 ครั้ง)', items: [
        { id: 's4-1', type: 'num', q: 'LED กะพริบกี่ครั้ง' + pre('for (int i = 0; i &lt; 5; i++)\n  blink();'), unit: 'ครั้ง' },
        { id: 's4-2', type: 'num', q: 'LED กะพริบกี่ครั้ง' + pre('for (int i = 2; i &lt;= 10; i += 2)\n  blink();'), unit: 'ครั้ง' },
        { id: 's4-3', type: 'num', q: 'LED กะพริบกี่ครั้ง' + pre('for (int i = 10; i &gt; 0; i--)\n  blink();'), unit: 'ครั้ง' },
        { id: 's4-4', type: 'num', q: 'LED กะพริบกี่ครั้ง' + pre('int i = 5;\nwhile (i &lt; 5) {\n  blink();\n  i++;\n}'), unit: 'ครั้ง' },
        { id: 's4-5', type: 'num', q: 'LED กะพริบกี่ครั้ง' + pre('int i = 5;\ndo {\n  blink();\n  i++;\n} while (i &lt; 5);'), unit: 'ครั้ง' },
        { id: 's4-6', type: 'num', q: 'จบแล้ว n มีค่าเท่าใด' + pre('int n = 0;\nfor (int i = 1; i &lt;= 4; i++)\n  n = n + i;') },
        { id: 's4-7', type: 'num', q: 'x มีค่าเท่าใด' + pre('int t = 28, x;\nif (t &gt; 35)      x = 3;\nelse if (t &gt; 25) x = 2;\nelse             x = 1;') },
        { id: 's4-8', type: 'num', q: 'x มีค่าเท่าใด (สังเกต break)' + pre('int x = 0, mode = 1;\nswitch (mode) {\n  case 1: x = x + 1;\n  case 2: x = x + 10; break;\n  default: x = 100; break;\n}') }
      ]},
      { title: 'ตอนที่ 2 งานต่อไปนี้ควรใช้คำสั่งใด', items: [
        { id: 's4-9', type: 'pick', q: 'ให้ LED กะพริบ 20 ครั้งพอดี', options: STMT },
        { id: 's4-10', type: 'pick', q: 'ถ้ากดสวิตช์ให้ LED ติด ถ้าไม่กดให้ LED ดับ', options: STMT },
        { id: 's4-11', type: 'pick', q: 'ถ้าอุณหภูมิเกิน 40 °C ให้ส่งเสียงเตือน (ถ้าไม่เกินไม่ต้องทำอะไร)', options: STMT },
        { id: 's4-12', type: 'pick', q: 'เลือกการทำงานตามค่าตัวแปร mode ที่เป็น 1, 2, 3 หรือ 4', options: STMT },
        { id: 's4-13', type: 'pick', q: 'อ่านค่าเซนเซอร์ซ้ำ ๆ จนกว่าจะได้ค่าที่ต้องการ โดยต้องอ่านอย่างน้อย 1 ครั้งก่อนตรวจ', options: STMT }
      ]}
    ]},
    { id: 's5', title: 'ชุดที่ 5 ฟังก์ชันรอง ขอบเขตตัวแปร struct และ union (หัวข้อ 2.3–2.5)', parts: [
      { title: 'ตอนที่ 1 ฟังก์ชันจากบรรทัดประกาศรูปแบบนี้เป็นชนิดใด', items: [
        { id: 's5-1', type: 'pick', q: c('void ledOn(void);'), options: FN },
        { id: 's5-2', type: 'pick', q: c('int readLight(void);'), options: FN },
        { id: 's5-3', type: 'pick', q: c('void setLed(byte n);'), options: FN },
        { id: 's5-4', type: 'pick', q: c('float average(int a, int b);'), options: FN },
        { id: 's5-5', type: 'pick', q: c('void moveServo(int angle);'), options: FN },
        { id: 's5-6', type: 'pick', q: c('boolean isPressed(void);'), options: FN }
      ]},
      { title: 'ตอนที่ 2 ข้อความต่อไปนี้ถูกหรือผิด', items: [
        { id: 's5-7', type: 'pick', q: 'บรรทัดประกาศรูปแบบฟังก์ชัน (prototype) ไม่ต้องมี ; ปิดท้าย', options: RW },
        { id: 's5-8', type: 'pick', q: 'ใช้คำสั่ง return ส่งค่ากลับจากฟังก์ชันรอง', options: RW },
        { id: 's5-9', type: 'pick', q: 'ตัวแปรที่ประกาศภายใน loop() ฟังก์ชัน setup() ใช้ได้ด้วย', options: RW },
        { id: 's5-10', type: 'pick', q: 'ตัวแปรที่ประกาศนอกฟังก์ชัน (หัวโปรแกรม) ทุกฟังก์ชันใช้ได้', options: RW },
        { id: 's5-11', type: 'pick', q: 'ตัวแปรย่อยของ struct มีที่เก็บแยกกัน จึงใช้พร้อมกันได้', options: RW },
        { id: 's5-12', type: 'pick', q: 'union กำหนดค่าเริ่มต้นให้สมาชิกทุกตัวพร้อมกันได้ เช่น {123, 12345, 123.45}', options: RW }
      ]},
      { title: 'ตอนที่ 3 ตอบเป็นตัวเลข', items: [
        { id: 's5-13', type: 'num', q: 'z มีค่าเท่าใด' + pre('int add(int a, int b)\n{\n  return a + b;\n}\n// ใน loop()\nint z = add(7, 5);') },
        { id: 's5-14', type: 'num', q: 'บน Uno ตัวแปร ' + c('union { byte a; int b; float c; }') + ' ใช้หน่วยความจำกี่ไบต์', unit: 'ไบต์' },
        { id: 's5-15', type: 'num', q: 'ใช้ send2port จากสไลด์ (LED_pin = {2, 3, 4, 5}) ถ้าเรียก ' + c('send2port(0B0100);') + ' LED ที่ขาใดติด', unit: '(เลขขา)' }
      ]}
    ]}
  ]};
})();
