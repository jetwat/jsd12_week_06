function getAllAnimalsByLetter(letter) {
    // สร้าง array เปล่าไว้เก็บผลลัพธ์สัตว์ทั้งหมด
    let allResults = [];

    // สร้าง URL สำหรับเรียก API
    // โดยใช้ template string เอา letter ที่รับมาไปใส่ใน query parameter
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;

    // ใช้ fetch() เพื่อเรียก API
    return fetch(url, {
        // ส่ง API key ไปใน header เพื่อยืนยันสิทธิ์การใช้งาน API
        headers: { "X-Api-Key": "G1c9cCD0yFEZTYw5pNE5X6vCH6tcQHQLn6gI6Lsv" },
    })

        // เมื่อ server ตอบกลับมา response จะยังเป็น raw data
        // ต้องแปลงเป็น JSON ก่อน
        .then((response) => response.json())

        // เมื่อแปลงเป็น JSON แล้ว data จะเป็น array ของสัตว์
        .then((data) => {
            // แสดงข้อมูลดิบที่ได้จาก API ใน console
            console.log(data);

            // ตรวจสอบว่ามีข้อมูลสัตว์กลับมาหรือไม่
            if (data.length > 0) {

                // ใช้ spread operator (...) เพื่อเอาข้อมูลทั้งหมดใน data
                // ไปใส่รวมใน array allResults
                allResults.push(...data);
            }

            // แสดงจำนวนสัตว์ที่พบ
            console.log(
                `Found ${allResults.length} animals containing the letter ${letter}`,
            );

            // แสดงรายการสัตว์ทั้งหมดที่เก็บไว้
            console.log(allResults);
        });
}

// เรียกใช้ function โดยส่งตัวอักษร "a"
// API จะหาสัตว์ที่ชื่อมีตัวอักษร a
getAllAnimalsByLetter("a");