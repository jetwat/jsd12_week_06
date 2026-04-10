function getAllAnimalsByLetter(letter) {
    let allResults = [];

    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;
    return fetch(url, {
        headers: { "X-Api-Key": "G1c9cCD0yFEZTYw5pNE5X6vCH6tcQHQLn6gI6Lsv" },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.length > 0) {
                allResults.push(...data);
            }

            console.log(
                `Found ${allResults.length} animals containing the letter ${letter}`,
            );
            console.log(allResults);
        });
}

getAllAnimalsByLetter("a");