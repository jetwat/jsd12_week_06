const url = "https://api.api-ninjas.com/v1/animals?name=cheetah";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "IEqXpXTslvHjWUNTobrxMFOU3hwGuKzqSVfQMdXT",
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
