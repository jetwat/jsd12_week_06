const url = "https://api.api-ninjas.com/v1/animals?name=cheetah";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "G1c9cCD0yFEZTYw5pNE5X6vCH6tcQHQLn6gI6Lsv",
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  // handle error gracefully (รับมือแบบมีชั้นเชิง สง่างาม)
  .catch((error) => {
    console.error("Something went wrong!", error);
  });
