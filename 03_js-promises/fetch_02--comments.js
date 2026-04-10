// กำหนด URL ของ API ที่เราจะเรียกใช้
// ในที่นี้เป็น API ของ api-ninjas สำหรับดึงข้อมูลสัตว์
// query parameter ?name=cheetah คือการบอก API ว่า
// "ขอข้อมูลสัตว์ที่ชื่อ cheetah"
const url = "https://api.api-ninjas.com/v1/animals?name=cheetah";


// สร้าง object ชื่อ options เพื่อกำหนดรายละเอียดของ HTTP request
// เช่น method, headers ฯลฯ
const options = {

    // method คือชนิดของ HTTP request
    // GET = ขอข้อมูลจาก server
    method: "GET",

    // headers คือ metadata ของ request
    // ใช้บอก server ว่า request นี้มีข้อมูลอะไรแนบมา
    headers: {

        // API นี้ต้องใช้ API Key เพื่อยืนยันตัวตน
        // server จะใช้ key นี้ตรวจสอบสิทธิ์
        "X-Api-Key": "G1c9cCD0yFEZTYw5pNE5X6vCH6tcQHQLn6gI6Lsv",

        // Content-Type บอกว่า payload ที่ส่งไปเป็นชนิดไหน
        // application/json = JSON format
        // (ในกรณี GET จริง ๆ ไม่จำเป็นเสมอไป เพราะเราไม่ได้ส่ง body)
        "Content-Type": "application/json",
    },
};


// เรียก API ด้วย fetch()
// fetch เป็น built-in function ของ JavaScript ที่ใช้ทำ HTTP request
// fetch() จะ return "Promise"
fetch(url, options)

    // .then() ตัวแรกจะทำงานเมื่อ request สำเร็จและ server ตอบกลับมา
    .then((response) => {

        // response คือ object ที่แทน HTTP response
        // แต่ข้อมูลจริงยังไม่ได้ถูกแปลง

        // response.json() คือการอ่าน body ของ response
        // แล้วแปลง JSON string → JavaScript object

        // ฟังก์ชันนี้ return Promise อีกตัว
        // เพราะการ parse JSON อาจใช้เวลา
        return response.json();
    })


    // .then() ตัวที่สองจะทำงานหลังจาก json() แปลงเสร็จแล้ว
    .then((data) => {

        // data คือ JavaScript object ที่ได้จาก API
        // เช่น array ของข้อมูลสัตว์

        // console.log เพื่อดูข้อมูลใน console
        console.log(data);

        // return data ต่อไปใน promise chain
        // (เผื่อ .then() ตัวถัดไปต้องใช้)
        return data;
    })


    // handle error gracefully
    // ถ้ามี error เกิดขึ้นที่ไหนใน promise chain ด้านบน
    // เช่น network error, JSON parse error
    // .catch() จะถูกเรียก
    .catch((error) => {

        // แสดง error ใน console
        console.error("Something went wrong!", error);
    });