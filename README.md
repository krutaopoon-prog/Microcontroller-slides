# วิชาไมโครคอนโทรลเลอร์ (ปวช.)

สื่อการสอนแบบเว็บ (static site) สำหรับ GitHub Pages: สไลด์ แบบฝึกหัด แบบทดสอบ และหน้าเฉลยสำหรับครู

- `index.html` หน้าแรก
- `ch01/slides.html` สไลด์บทที่ 1 (← → / Space, T = สารบัญ, F = เต็มจอ)
- `ch01/exercises.html` แบบฝึกหัด (ตรวจทันที, พิมพ์ใบงาน A4)
- `ch01/quiz.html` แบบทดสอบ 20 ข้อ ก่อน/หลังเรียน
- `ch01/answers.html` เฉลยสำหรับครู (ต้องใส่รหัสครู)

## แก้เฉลย / เปลี่ยนรหัสครู
1. แก้ `_private/answers-ch01.json`
2. รัน `node _private/encrypt-answers.mjs "รหัสใหม่"` (ต้องมี Node.js 18 ขึ้นไป)
3. อัปโหลดไฟล์ `ch01/answers.enc.js` และ `ch01/check-data.js` ใหม่

โฟลเดอร์ `_private/` อยู่ใน `.gitignore` — ห้ามอัปขึ้น GitHub
