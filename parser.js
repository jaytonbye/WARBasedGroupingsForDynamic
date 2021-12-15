const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "input.json");
const outputFile = path.join(__dirname, "output.json");

fs.readFile(inputFile, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const parsedJson = JSON.parse(data);
  console.log(parsedJson);
  const cleanedData = parsedJson.map((wrestler) => {
    return {
      name: wrestler.Name,
      weight: Number(wrestler.Weight.replace(" lbs", "")),
      age: Number(wrestler.Age.replace(" years", "")),
      weightAdjustedRating: wrestler["Weight-Adjusted Rating"],
      phone: 1,
      email: "",
    };
  });
  console.log(cleanedData);
  fs.writeFile(outputFile, JSON.stringify(cleanedData), (error) => {
    if (error) {
      console.log(error);
    }
  });
});
