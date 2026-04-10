# JavaScript Built-in & Syntax Summary (03_js-promises)

สรุป Syntax และจุดประสงค์ของคำสั่ง JavaScript ที่ใช้ในบทเรียนเรื่อง Promises และ Fetch API

| Built-in / Syntax | ตัวอย่างการใช้งาน (Syntax Example) | จุดประสงค์ (Purpose) |
| :--- | :--- | :--- |
| `fetch()` | `fetch(url, options)` | ใช้สำหรับรับ-ส่งข้อมูลผ่านเครือข่าย (HTTP Request) โดยจะส่งค่ากลับมาเป็น Promise |
| `new Promise()` | `new Promise((resolve, reject) => { ... })` | สร้าง Object ของ Promise เพื่อจัดการกับการทำงานแบบ Asynchronous (ไม่รอผลลัพธ์ทันที) |
| `.then()` | `.then((data) => { ... })` | ใช้จัดการเมื่อ Promise ทำงานสำเร็จ (Fulfilled) เพื่อรับผลลัพธ์ไปประมวลผลต่อ |
| `.catch()` | `.catch((error) => { ... })` | ใช้จัดการเมื่อ Promise ทำงานล้มเหลว (Rejected) หรือเกิด Error ใน Chain |
| `.finally()` | `.finally(() => { ... })` | ทำงานเสมอไม่ว่า Promise จะสำเร็จหรือล้มเหลว (ใช้สำหรับ Cleanup เช่น ปิด Loading) |
| `response.json()` | `response.json()` | Method ของ Response Object (จาก fetch) ใช้แปลงข้อมูล JSON String ให้เป็น JavaScript Object |
| `setTimeout()` | `setTimeout(callback, ms)` | ใช้หน่วงเวลาการทำงานของฟังก์ชันตามจำนวนมิลลิวินาทีที่กำหนด |
| `console.log()` | `console.log(data)` | แสดงข้อมูลออกมาที่หน้า Console ของ Web Browser หรือ Terminal |
| `console.error()` | `console.error(error)` | แสดงข้อความแจ้งเตือนความผิดพลาด (Error) ที่หน้า Console |
| **Template Literals** | `` `Hello ${name}` `` | การสร้าง String โดยใช้ backtick ทำให้สามารถแทรกตัวแปรได้ง่ายด้วย `${}` |
| **Spread Operator** | `array1.push(...array2)` | ใช้กระจายค่า (Expand) จาก Array หรือ Object ออกมาเป็นสมาชิกทีละตัว |
| **Arrow Functions** | `(param) => { ... }` | รูปแบบการเขียนฟังก์ชันแบบย่อที่กระชับและมีการจัดการ `this` ที่แตกต่างจากปกติ |
| `Array.push()` | `results.push(item)` | เพิ่มสมาชิกใหม่เข้าไปที่ท้ายของ Array |
| `Array.map()` | `array.map((item) => ...)` | สร้าง Array ใหม่จากการวนลูปสมาชิกเดิมแล้วเปลี่ยนค่าตามเงื่อนไขที่กำหนด |
