// ประกาศ function ชื่อ getAllAnimalsByLetter
// รับ parameter ชื่อ letter (เช่น "a", "b", "c")
function getAllAnimalsByLetter(letter) {

    // ประกาศตัวแปรแบบ let
    // ใช้เก็บผลลัพธ์สัตว์ทั้งหมดที่ดึงมา
    // เริ่มต้นเป็น array ว่าง []
    let allResults = [];



    // ประกาศ function ซ้อนอยู่ใน function หลัก (เรียกว่า nested function)
    // ใช้สำหรับ fetch ข้อมูลจาก API
    function fetchNextPage() {

        // สร้าง URL สำหรับเรียก API
        // ใช้ backtick ` ` เพื่อทำ Template Literal
        // ${letter} คือการเอาค่าตัวแปร letter มาแทรกใน string
        const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;



        // fetch() เป็น built-in function ของ JavaScript
        // ใช้ส่ง HTTP request ไปที่ server
        // parameter ตัวแรกคือ URL
        // parameter ตัวที่สองคือ options object
        return fetch(url, {

            // headers คือข้อมูลเพิ่มเติมที่แนบไปกับ request
            headers: {

                // API นี้ต้องใช้ API key เพื่อยืนยันตัวตน
                // key-value pair ใน object
                "X-Api-Key": "G1c9cCD0yFEZTYw5pNE5X6vCH6tcQHQLn6gI6Lsv"
            },
        })

            // fetch() จะ return Promise
            // .then() คือ method ของ Promise
            // ใช้รอให้ request เสร็จ แล้วส่ง response ต่อไป
            .then((response) => response.json())

            // response.json() เป็น method ของ Response object
            // ใช้แปลงข้อมูล JSON ที่ server ส่งมา
            // ให้กลายเป็น JavaScript object / array
            .then((data) => {

                // data คือข้อมูลสัตว์ที่ API ส่งมา
                // มักจะเป็น array

                // เช็คว่า data ไม่มีข้อมูลหรือไม่
                // data.length === 0 แปลว่า array ว่าง
                if (data.length === 0) {

                    // console.log() ใช้แสดงข้อความใน console
                    console.log(
                        `Found ${allResults.length} animals containing the letter ${letter}`,
                    );

                    // แสดงข้อมูลสัตว์ทั้งหมดที่เก็บไว้
                    console.log(allResults);

                    // return ค่า allResults ออกไป
                    // เพื่อให้ Promise ส่งค่าต่อไปยัง .then() ข้างนอก
                    return allResults;
                }



                // ถ้ามีข้อมูลสัตว์
                // push() คือ method ของ array
                // ใช้เพิ่มข้อมูลเข้า array

                // ...data คือ spread operator
                // ใช้กระจายค่าทุก element ใน array data
                // เช่น
                // data = [a,b,c]
                // allResults.push(...data)
                // จะเหมือนกับ
                // push(a,b,c)

                allResults.push(...data);
            });
    }



    // เรียก function fetchNextPage()
    // และ return Promise ที่มันสร้างขึ้น
    return fetchNextPage();
}



// เรียกใช้ function getAllAnimalsByLetter
// ส่ง parameter เป็น "a"
getAllAnimalsByLetter("a")

    // .then() จะทำงานเมื่อ Promise สำเร็จ
    // animals คือค่าที่ return มาจาก function ก่อนหน้า
    .then((animals) => {

        console.log("Finished fetching all pages.");

        // animals เป็น array ของ object
        // map() คือ method ของ array
        // ใช้วน loop ผ่านทุก element

        // (animal) => animal.name
        // คือ arrow function
        // แปลว่าให้เอา property name ของสัตว์แต่ละตัว

        console.log(animals.map((animal) => animal.name));
    })

    // .catch() จะทำงานเมื่อเกิด error ใน Promise chain
    .catch((error) => {

        // console.error() แสดง error ใน console
        console.error("Something went wrong!", error);
    });