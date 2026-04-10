const url = "https://jsonplaceholder.typicode.com/posts/1"

fetch(url);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {return response.json();})
    .then((data) => {
        console.log(data);
        return data;
    })
    // handle error gracefully (รับมือแบบมีชั้นเชิง สง่างาม)
    .catch((error) => {console.error("Something went wrong!", error);});

