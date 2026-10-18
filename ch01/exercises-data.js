/* ===========================================
   แบบฝึกหัดบทที่ 1 — ไฟล์นี้มีเฉพาะโจทย์ ไม่มีเฉลย
   type: conv (แปลงเลขฐาน), tt (เติมตารางความจริง), pick (เลือกคำตอบจาก options)
   =========================================== */
(function () {
    const GATES = ['AND', 'OR', 'XOR', 'NOT', 'NAND', 'NOR'];
    const MEM = ['ก. โปรแกรมมาจากโรงงาน ลบไม่ได้', 'ข. อ่าน/เขียนได้ ข้อมูลหายเมื่อไม่มีไฟเลี้ยง', 'ค. ลบด้วยไฟฟ้า แก้ไขได้ทีละบล็อก', 'ง. ลบด้วยแสง UV', 'จ. โปรแกรมเองได้ครั้งเดียว ลบไม่ได้', 'ฉ. ลบด้วยไฟฟ้า แก้ไขได้ระดับไบต์'];
    const PART = ['อินพุต', 'เอาต์พุต', 'หน่วยประมวลผลกลาง', 'หน่วยความจำ'];
    const TF = ['ถูก', 'ผิด'];
    const BOARD = ['UNO R3', 'Nano', 'Mega 2560', 'UNO R4 Minima'];
    const LEVEL = ['ลอจิก 1 (HIGH)', 'ลอจิก 0 (LOW)', 'ไม่แน่นอน'];
    const STEP = ['เขียนโค้ด', 'คอมไพล์', 'อัปโหลด'];

    window.EXERCISES = {
        chapter: 'บทที่ 1 ความรู้เบื้องต้นเกี่ยวกับไมโครคอนโทรลเลอร์',
        sets: [
            {
                id: 's1', title: 'ชุดที่ 1 ระบบตัวเลข (หัวข้อ 1.1)', random: true,
                parts: [{
                    title: 'ตอนที่ 1 แปลงเลขฐานต่อไปนี้ (เขียนคำตอบไม่ต้องใส่ตัวห้อย)',
                    items: [
                        { id: 'e1-1', type: 'conv', value: '25', from: 10, to: 2 },
                        { id: 'e1-2', type: 'conv', value: '100', from: 10, to: 2 },
                        { id: 'e1-3', type: 'conv', value: '50', from: 10, to: 3 },
                        { id: 'e1-4', type: 'conv', value: '110110', from: 2, to: 10 },
                        { id: 'e1-5', type: 'conv', value: '10101010', from: 2, to: 10 },
                        { id: 'e1-6', type: 'conv', value: '157', from: 8, to: 10 },
                        { id: 'e1-7', type: 'conv', value: '1234', from: 5, to: 10 },
                        { id: 'e1-8', type: 'conv', value: '200', from: 10, to: 16 },
                        { id: 'e1-9', type: 'conv', value: '3F', from: 16, to: 10 },
                        { id: 'e1-10', type: 'conv', value: '11011110', from: 2, to: 16 },
                        { id: 'e1-11', type: 'conv', value: '7A', from: 16, to: 2 },
                        { id: 'e1-12', type: 'conv', value: '2F5', from: 16, to: 10 }
                    ]
                }]
            },
            {
                id: 's2', title: 'ชุดที่ 2 ดิจิทัลพื้นฐาน (หัวข้อ 1.2)',
                parts: [
                    {
                        title: 'ตอนที่ 1 เติมเอาต์พุต Q ในตารางความจริง',
                        items: [
                            { id: 'tt-nand', type: 'tt', gate: 'NAND' },
                            { id: 'tt-nor', type: 'tt', gate: 'NOR' },
                            { id: 'tt-xor', type: 'tt', gate: 'XOR' },
                            { id: 'tt-not', type: 'tt', gate: 'NOT' }
                        ]
                    },
                    {
                        title: 'ตอนที่ 2 สัญลักษณ์นี้คือเกตอะไร',
                        items: [
                            { id: 'sym-1', type: 'pick', gate: 'OR', options: GATES },
                            { id: 'sym-2', type: 'pick', gate: 'NOT', options: GATES },
                            { id: 'sym-3', type: 'pick', gate: 'XOR', options: GATES },
                            { id: 'sym-4', type: 'pick', gate: 'NAND', options: GATES },
                            { id: 'sym-5', type: 'pick', gate: 'AND', options: GATES },
                            { id: 'sym-6', type: 'pick', gate: 'NOR', options: GATES }
                        ]
                    },
                    {
                        title: 'ตอนที่ 3 หาเอาต์พุต Q ของวงจรที่ต่อ 2 เกต',
                        items: [
                            { id: 'c-1', type: 'pick', q: 'A = 1, B = 0 เข้า <b>AND</b> → ผลลัพธ์เข้า <b>NOT</b> → Q = ?', options: ['0', '1'] },
                            { id: 'c-2', type: 'pick', q: 'A = 1, B = 1 เข้า <b>XOR</b> → ผลลัพธ์กับ C = 0 เข้า <b>OR</b> → Q = ?', options: ['0', '1'] },
                            { id: 'c-3', type: 'pick', q: 'A = 0, B = 0 เข้า <b>NOR</b> → ผลลัพธ์กับ C = 1 เข้า <b>AND</b> → Q = ?', options: ['0', '1'] },
                            { id: 'c-4', type: 'pick', q: 'A = 1, B = 0 เข้า <b>OR</b> → ผลลัพธ์กับ C = 1 เข้า <b>NAND</b> → Q = ?', options: ['0', '1'] }
                        ]
                    },
                    {
                        title: 'ตอนที่ 4 ชิป ATmega328P ใช้ไฟเลี้ยง 5 V จะอ่านแรงดันอินพุตต่อไปนี้เป็นค่าใด',
                        items: [
                            { id: 'l-1', type: 'pick', q: 'แรงดันอินพุต 4.2 V', options: LEVEL },
                            { id: 'l-2', type: 'pick', q: 'แรงดันอินพุต 0.8 V', options: LEVEL },
                            { id: 'l-3', type: 'pick', q: 'แรงดันอินพุต 2.2 V', options: LEVEL },
                            { id: 'l-4', type: 'pick', q: 'แรงดันอินพุต 3.5 V', options: LEVEL }
                        ]
                    }
                ]
            },
            {
                id: 's3', title: 'ชุดที่ 3 โครงสร้างพื้นฐานของระบบคอมพิวเตอร์ (หัวข้อ 1.3)',
                parts: [
                    {
                        title: 'ตอนที่ 1 จับคู่ชนิดหน่วยความจำกับคุณสมบัติ (เลือก ก – ฉ)',
                        items: [
                            { id: 'm-1', type: 'pick', q: 'ROM', options: MEM },
                            { id: 'm-2', type: 'pick', q: 'PROM', options: MEM },
                            { id: 'm-3', type: 'pick', q: 'EPROM', options: MEM },
                            { id: 'm-4', type: 'pick', q: 'E²PROM', options: MEM },
                            { id: 'm-5', type: 'pick', q: 'Flash memory', options: MEM },
                            { id: 'm-6', type: 'pick', q: 'RAM', options: MEM }
                        ]
                    },
                    {
                        title: 'ตอนที่ 2 สิ่งต่อไปนี้จัดอยู่ในส่วนใดของระบบคอมพิวเตอร์',
                        items: [
                            { id: 'd-1', type: 'pick', q: 'แป้นพิมพ์ (Keyboard)', options: PART },
                            { id: 'd-2', type: 'pick', q: 'หลอด LED', options: PART },
                            { id: 'd-3', type: 'pick', q: 'ALU', options: PART },
                            { id: 'd-4', type: 'pick', q: 'Flash memory', options: PART },
                            { id: 'd-5', type: 'pick', q: 'สวิตช์กดติดปล่อยดับ', options: PART },
                            { id: 'd-6', type: 'pick', q: 'ลำโพง', options: PART },
                            { id: 'd-7', type: 'pick', q: 'เซนเซอร์วัดอุณหภูมิ', options: PART },
                            { id: 'd-8', type: 'pick', q: 'RAM', options: PART }
                        ]
                    }
                ]
            },
            {
                id: 's4', title: 'ชุดที่ 4 ไมโครคอนโทรลเลอร์ Arduino (หัวข้อ 1.4)',
                parts: [
                    {
                        title: 'ตอนที่ 1 ข้อความต่อไปนี้ถูกหรือผิด',
                        items: [
                            { id: 'tf-1', type: 'pick', q: 'Arduino เป็นแพลตฟอร์มอิเล็กทรอนิกส์แบบโอเพนซอร์ส', options: TF },
                            { id: 'tf-2', type: 'pick', q: 'โครงการ Arduino เริ่มต้นราวปี ค.ศ. 2005 ที่ประเทศอิตาลี', options: TF },
                            { id: 'tf-3', type: 'pick', q: 'ภาษาที่ใช้เขียนโปรแกรม Arduino มีไวยากรณ์แบบเดียวกับภาษา C/C++', options: TF },
                            { id: 'tf-4', type: 'pick', q: 'Arduino IDE ใช้ได้เฉพาะระบบปฏิบัติการ Windows เท่านั้น', options: TF },
                            { id: 'tf-5', type: 'pick', q: 'บอร์ด Arduino UNO R3 ใช้ไมโครคอนโทรลเลอร์ ATmega328P', options: TF },
                            { id: 'tf-6', type: 'pick', q: 'บอร์ด Arduino Mega 2560 มีขา Digital I/O น้อยกว่าบอร์ด UNO R3', options: TF },
                            { id: 'tf-7', type: 'pick', q: 'การคอมไพล์ คือการแปลงโค้ดโปรแกรมให้เป็นภาษาเครื่อง', options: TF },
                            { id: 'tf-8', type: 'pick', q: 'ชื่อ Arduino ตั้งตามชื่อบาร์ในเมือง Ivrea ซึ่งตั้งชื่อตามกษัตริย์ Arduin', options: TF }
                        ]
                    },
                    {
                        title: 'ตอนที่ 2 คุณสมบัติต่อไปนี้ตรงกับบอร์ดรุ่นใด',
                        items: [
                            { id: 'b-1', type: 'pick', q: 'บอร์ดขนาดเล็ก 45 × 18 mm เสียบบนเบรดบอร์ดได้ ใช้ USB Mini-B', options: BOARD },
                            { id: 'b-2', type: 'pick', q: 'มีขา Digital I/O 54 ขา และ Analog 16 ขา เหมาะกับงานที่ใช้ขาจำนวนมาก', options: BOARD },
                            { id: 'b-3', type: 'pick', q: 'บอร์ดยอดนิยมสำหรับผู้เริ่มต้น ใช้ชิป ATmega328P และพอร์ต USB Type-B', options: BOARD },
                            { id: 'b-4', type: 'pick', q: 'รุ่นใหม่ ใช้ชิป Renesas RA4M1 ความเร็ว 48 MHz และพอร์ต USB-C', options: BOARD }
                        ]
                    },
                    {
                        title: 'ตอนที่ 3 เรียงขั้นตอนการนำโปรแกรมลงบอร์ดด้วย Arduino IDE',
                        items: [
                            { id: 'o-1', type: 'pick', q: 'ขั้นตอนที่ 1', options: STEP },
                            { id: 'o-2', type: 'pick', q: 'ขั้นตอนที่ 2', options: STEP },
                            { id: 'o-3', type: 'pick', q: 'ขั้นตอนที่ 3', options: STEP }
                        ]
                    }
                ]
            }
        ]
    };
})();
