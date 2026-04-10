# What I don't understand

## Q & A
---
### Free API นี่หมายถึงอะไรกันแน่ เหมือนเป็นเดต้าเบสหรอ ? 
    
- _-- เท่าที่ถามเอไอ = เป็นเหมือนลอจิกให้ใช้ฟรี เป็นแค่อินเตอร์เฟซ เส้นทางให้เราใช้ ไม่จำเป็นต้องเป็นเดต้าเบสที่เบื้องหลังที่ไปดึงข้อมูลมา ถึงได้เรียกว่า Free API ไม่ใช่ Free Database_


---
### ทำไม `fetch()` ถึงคืนค่าเป็น `Promise` ได้, ทุก API มันเหมือนกันหรอ ? 

- _-- เท่าที่ถามเอไอ = `fetch()` เหมือนเอาข้อมูลจาก API มาแพ็กเข้า `Promise` ด้วยตนเอง มันเลยส่งค่ากลับเป็น `Promise` ได้เสมอ_

#### แล้วทำไมเราต้องใช้ `fetch()` ทำไมไม่เขียน `Promise` เอง ? 

- _-- เพราะเขียนเองต้องเขียนเยอะ ต้องใช้ทั้ง function, Promise, XHR [see more](https://gemini.google.com/share/aa22e9a36405)_


---
### ตัวแปรที่เป็นพารามิเตอร์ใน `.then()` จะรับค่าอะไรมาจากไหนบ้าง ? 

- _-- มาจาก `resolve()` (ที่ state: Fullfilled) หรือการ `return` ที่ไม่ err ใน Promise Chain ก่อนหน้า [see more](https://gemini.google.com/share/44f5beed5827)_


---
### ใน Promise methods' parameter เราเขียนอย่างอื่นนอกจาก arrow function ได้ไหม แล้วโปรแกรมรู้ได้ไงว่าจะเอาค่าจาก Promise chain ไปใส่ให้พารามิเตอร์ตัวไหนใน arrow function ?

- [Gemini Answer](https://gemini.google.com/share/e2b6bd12209d)
- _--ฟังก์ชันแบบอื่น ๆ เช่น Anonymous f(x), Named f(x), หรือแม้แต่ methods อื่น ๆ ของค่าที่ได้จาก chain (เช่น console.log) ก็สามารถเขียนเป็นพารามิเตอร์ได้ // ตัวอย่าง: `fetchData().then(console.log); // ค่าที่ได้จะถูกส่งเข้า console.log ทันที`_
- _--**ส่งค่าที่ได้จาก chain เข้าไปเป็น Argument ตัวแรก เสมอ**_


---
### `.then()` ครั้งที่สอง มอง `.then()` ครั้งแรก เป็น `resolve()` or `reject()` หรือไม่ หรือแค่ครั้งแรกเท่านั้น (Promise ก่อน `.then()` แรก) ที่ให้ผล เป็น `resolve()` or `reject()` ?

- [Gemini Answer](https://gemini.google.com/share/7c35888b6223)
- _-- `.then()` เช็ค state เชนก่อนหน้า ไม่ใช่แค่ Promise แรกสุด เนื่องจาก ค่าที่ได้จาก promise method เชนก่อนหน้า มีค่าเป็น Promise อยู่แล้ว, `.then()` ต่อมาจึงเช็ค state และแกะข้อมูลได้_


---
### `.json()` มัน `return` ในตัวมันหรอ ทำไมไม่ต้องใส่ `return` แต่เชนต่อมาเอาไปใช้ต่อได้ ?

- [GemAns, please have a look](https://gemini.google.com/share/c8f4ff931ad8) **_-- มีคำถามต่อเนื่องหลายประเด็น_**
- ตอบคำถามหลัก: เพราะเป็นรูปย่อของ arrow function ถ้าเขียนในบรรทัดเดียวกันแบบไม่มีปีกกา จะเท่ากับมีคำสั่ง `return` ให้ _-- เทียบ แบบสั้น: `res => res.json()` = แบบเต็ม: `(res) => { return res.json(); }`_

---
