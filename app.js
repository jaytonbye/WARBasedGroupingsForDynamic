//TODO
// Write a function that takes the 6 parameters
// Make the button click read the 6 inputs and run the function

let wrestlerArray;

fetch("output.json")
  .then((result) => {
    console.log(result);
    return result.json();
  })
  .then((otherResult) => {
    wrestlerArray = otherResult;

    //sets up my autocompletes:
    for (x = 0; x < wrestlerArray.length; x++) {
      $("#specificWrestlerDatalist").append(
        `<option>${wrestlerArray[x].name}</option>`
      );
    }

    $("#submitButton").click(() => {
      let minWeight = $("#minimumWeightInput").val();
      let maxWeight = $("#maximumWeightInput").val();
      let minWAR = $("#minimumWARInput").val();
      let maxWAR = $("#maximumWARInput").val();
      let minAge = $("#minimumAgeInput").val();
      let maxAge = $("#maximumAgeInput").val();
      grabTheWrestlers(minWeight, maxWeight, minWAR, maxWAR, minAge, maxAge);
    });

    $("#submitButtonForSpecificWrestler").click(() => {
      let weightPercentage = $("#percentageOfWeightInput").val();
      let WARDifference = $("#WARRangeInput").val();
      let agePercentage = $("#percentageOfAgeInput").val();
      let name = $("#specificWrestler").val();
      grabWrestlersForSpecificWrestler(
        weightPercentage,
        WARDifference,
        agePercentage,
        name
      );
    });

    let grabWrestlersForSpecificWrestler = (
      weightPercentage,
      WARDifference,
      agePercentage,
      name
    ) => {
      $("#tbody").empty();
      let resultArray = [];
      let theSpecificWrestlersWeight;
      let theSpecificWrestlersWAR;
      let theSpecificWrestlersAge;
      let theSpecificWrestlersName;

      //finds the weight, WAR, and age of the specific wrestler
      for (x = 0; x < wrestlerArray.length; x++) {
        if (wrestlerArray[x].name === name) {
          theSpecificWrestlersName = wrestlerArray[x].name;
          theSpecificWrestlersWeight = wrestlerArray[x].weight;
          theSpecificWrestlersWAR = wrestlerArray[x].weightAdjustedRating;
          theSpecificWrestlersAge = wrestlerArray[x].age;
        }
      }

      let minWeight =
        theSpecificWrestlersWeight -
        (theSpecificWrestlersWeight * weightPercentage) / 100;
      console.log(minWeight);
      let maxWeight =
        theSpecificWrestlersWeight +
        (theSpecificWrestlersWeight * weightPercentage) / 100;
      console.log(maxWeight);
      let minWAR = theSpecificWrestlersWAR - Number(WARDifference);
      let maxWAR = theSpecificWrestlersWAR + Number(WARDifference);
      console.log(maxWAR);
      let minAge =
        theSpecificWrestlersAge -
        (theSpecificWrestlersAge * agePercentage) / 100;
      let maxAge =
        theSpecificWrestlersAge +
        (theSpecificWrestlersAge * agePercentage) / 100;

      grabTheWrestlers(minWeight, maxWeight, minWAR, maxWAR, minAge, maxAge);
    };

    let grabTheWrestlers = (
      minWeight,
      maxWeight,
      minWAR,
      maxWAR,
      minAge,
      maxAge
    ) => {
      let resultArray = [];
      for (x = 0; x < wrestlerArray.length; x++) {
        if (
          wrestlerArray[x].weight >= minWeight &&
          wrestlerArray[x].weight <= maxWeight &&
          wrestlerArray[x].weightAdjustedRating >= minWAR &&
          wrestlerArray[x].weightAdjustedRating <= maxWAR &&
          wrestlerArray[x].age >= minAge &&
          wrestlerArray[x].age <= maxAge
        ) {
          resultArray.push(wrestlerArray[x]);
        }
      }

      $("#tbody").empty();
      for (x = 0; x < resultArray.length; x++) {
        $("#tbody").append(
          `<tr><td>${resultArray[x].name}</td><td>${resultArray[x].weight}</td><td>${resultArray[x].weightAdjustedRating}</td><td>${resultArray[x].age}</td></tr>`
        );
      }
    };
  });
oldWrestlerArray = [
  {
    name: "Lucas Winn",
    weight: 206,
    age: 14.5,
    weightAdjustedRating: 10947.3,
  },
  {
    name: "John Darrell",
    weight: 198.8,
    age: 17,
    weightAdjustedRating: 10442.3,
  },
  {
    name: "Prince Zaire Bell",
    weight: 181,
    age: 14.4,
    weightAdjustedRating: 9795.3,
  },
  {
    name: "Pedro Romero",
    weight: 175,
    age: 21.1,
    weightAdjustedRating: 10144.2,
  },
  {
    name: "Jaden Rodriguez",
    weight: 175,
    age: 15.8,
    weightAdjustedRating: 10029.5,
  },
  {
    name: "Marino Mancuso",
    weight: 173.6,
    age: 17.8,
    weightAdjustedRating: 10659.4,
  },
  {
    name: "Tristin Colon",
    weight: 169,
    age: 16.8,
    weightAdjustedRating: 9475.1,
  },
  {
    name: "Steven Torres",
    weight: 163.5,
    age: 12.6,
    weightAdjustedRating: 8756.5,
  },
  {
    name: "Chris Reddy",
    weight: 163,
    age: 14.8,
    weightAdjustedRating: 9476.9,
  },
  {
    name: "Gabe DeMarco",
    weight: 162,
    age: 17,
    weightAdjustedRating: 10192.6,
  },
  {
    name: "Edwin Claros",
    weight: 160,
    age: 19.8,
    weightAdjustedRating: 10600,
  },
  {
    name: "Gavin Cirolli",
    weight: 157.8,
    age: 16.6,
    weightAdjustedRating: 10067.1,
  },
  {
    name: "WayneCarl Barker",
    weight: 157.6,
    age: 21.6,
    weightAdjustedRating: 10190.9,
  },
  {
    name: "Michael Reynolds",
    weight: 155,
    age: 17,
    weightAdjustedRating: 9254.8,
  },
  {
    name: "Marc Kleyman",
    weight: 154.2,
    age: 18,
    weightAdjustedRating: 9876.8,
  },
  {
    name: "Cosmo Stoia",
    weight: 153,
    age: 18.7,
    weightAdjustedRating: 10190,
  },
  {
    name: "manaen capellan",
    weight: 152,
    age: 13.2,
    weightAdjustedRating: 8347.1,
  },
  {
    name: "Bobby Constantatos",
    weight: 152,
    age: 15.2,
    weightAdjustedRating: 8169.8,
  },
  {
    name: "Colby D’Andria",
    weight: 149.4,
    age: 18,
    weightAdjustedRating: 8860.2,
  },
  {
    name: "John Caccavale",
    weight: 149,
    age: 15.2,
    weightAdjustedRating: 9298.2,
  },
  {
    name: "Diego Martinez",
    weight: 146.2,
    age: 14.5,
    weightAdjustedRating: 8491.5,
  },
  {
    name: "Tommy Corcoran",
    weight: 145,
    age: 17.5,
    weightAdjustedRating: 9422.4,
  },
  {
    name: "Joshua Flores",
    weight: 144,
    age: 14.3,
    weightAdjustedRating: 9237,
  },
  {
    name: "Nick Zins",
    weight: 140,
    age: 13.8,
    weightAdjustedRating: 8636.7,
  },
  {
    name: "Lucas DeMeo",
    weight: 138.8,
    age: 17,
    weightAdjustedRating: 8788.1,
  },
  {
    name: "Ryan Eckerle",
    weight: 138,
    age: 16.3,
    weightAdjustedRating: 9262.4,
  },
  {
    name: "Max Casiano",
    weight: 137,
    age: 15.4,
    weightAdjustedRating: 8744.8,
  },
  {
    name: "Ibrahim Khan",
    weight: 137,
    age: 17,
    weightAdjustedRating: 8569.6,
  },
  {
    name: "ian searing",
    weight: 137,
    age: 14.3,
    weightAdjustedRating: 8583.5,
  },
  {
    name: "Charlie Olaechea",
    weight: 136,
    age: 15.1,
    weightAdjustedRating: 9440.3,
  },
  {
    name: "Nolan Ford",
    weight: 136,
    age: 15.8,
    weightAdjustedRating: 8772.7,
  },
  {
    name: "Jayden Medina",
    weight: 135,
    age: 14.9,
    weightAdjustedRating: 8428.7,
  },
  {
    name: "Hamza Khan",
    weight: 134.8,
    age: 14.9,
    weightAdjustedRating: 8662.3,
  },
  {
    name: "Kwesi Amoa",
    weight: 132,
    age: 19.7,
    weightAdjustedRating: 9558.3,
  },
  {
    name: "Derek Marcucci",
    weight: 131,
    age: 12.6,
    weightAdjustedRating: 7757.3,
  },
  {
    name: "Jacob Coral",
    weight: 129,
    age: 17.5,
    weightAdjustedRating: 9155.6,
  },
  {
    name: "Tommaso Clarke",
    weight: 128,
    age: 14.8,
    weightAdjustedRating: 8109.3,
  },
  {
    name: "Danny Poggi",
    weight: 128,
    age: 16.9,
    weightAdjustedRating: 8927.5,
  },
  {
    name: "Joshua Benitez",
    weight: 128,
    age: 14.8,
    weightAdjustedRating: 7777.5,
  },
  {
    name: "JohnRussell Stokes",
    weight: 127.6,
    age: 14.9,
    weightAdjustedRating: 7172.2,
  },
  {
    name: "Jake Boldi",
    weight: 127.2,
    age: 14.2,
    weightAdjustedRating: 7222.5,
  },
  {
    name: "Sean Searing",
    weight: 127,
    age: 13.3,
    weightAdjustedRating: 8115.3,
  },
  {
    name: "Jacob Kurtz",
    weight: 126.4,
    age: 16.5,
    weightAdjustedRating: 8128.7,
  },
  {
    name: "troy gentzel",
    weight: 124.8,
    age: 16.3,
    weightAdjustedRating: 8702.9,
  },
  {
    name: "Logan Alfalla",
    weight: 124,
    age: 14.1,
    weightAdjustedRating: 8956.1,
  },
  {
    name: "Luke D'Angelo",
    weight: 123.6,
    age: 17.1,
    weightAdjustedRating: 8819.8,
  },
  {
    name: "Connor Henry",
    weight: 123.4,
    age: 16.9,
    weightAdjustedRating: 7887.3,
  },
  {
    name: "ashton sylvia",
    weight: 123,
    age: 15.6,
    weightAdjustedRating: 8828.4,
  },
  {
    name: "Erik Zakiewicz",
    weight: 122,
    age: 13.2,
    weightAdjustedRating: 8030.4,
  },
  {
    name: "Cristian Medina",
    weight: 121,
    age: 15.5,
    weightAdjustedRating: 8070.3,
  },
  {
    name: "Christopher Boettger-Smolich",
    weight: 120.8,
    age: 15.6,
    weightAdjustedRating: 7966.2,
  },
  {
    name: "Jonathan Fox",
    weight: 120,
    age: 13.7,
    weightAdjustedRating: 8686,
  },
  {
    name: "vasilios katranis",
    weight: 119,
    age: 14.5,
    weightAdjustedRating: 7636.9,
  },
  {
    name: "Yerik Guardado",
    weight: 118,
    age: 11.7,
    weightAdjustedRating: 6984.1,
  },
  {
    name: "wyatt gentzel",
    weight: 117.8,
    age: 16.3,
    weightAdjustedRating: 8824.8,
  },
  {
    name: "Sean Campbell",
    weight: 117,
    age: 16,
    weightAdjustedRating: 9168.3,
  },
  {
    name: "Frankie Kessner",
    weight: 117,
    age: 16.5,
    weightAdjustedRating: 8034.5,
  },
  {
    name: "Timothy Pescatore",
    weight: 114.5,
    age: 15.3,
    weightAdjustedRating: 8277.2,
  },
  {
    name: "Jason Kwaak",
    weight: 114,
    age: 14.2,
    weightAdjustedRating: 8969.1,
  },
  {
    name: "Vasili Ragavanis",
    weight: 113.2,
    age: 14.8,
    weightAdjustedRating: 8693.6,
  },
  {
    name: "Amari Murray",
    weight: 113,
    age: 11.9,
    weightAdjustedRating: 7478,
  },
  {
    name: "Logan Williamson",
    weight: 113,
    age: 13.4,
    weightAdjustedRating: 7380.9,
  },
  {
    name: "jason euceda",
    weight: 112,
    age: 15.4,
    weightAdjustedRating: 8567.2,
  },
  {
    name: "Kingston Strouse",
    weight: 112,
    age: 13.8,
    weightAdjustedRating: 7574.2,
  },
  {
    name: "Christian Caccavale",
    weight: 111.4,
    age: 12.4,
    weightAdjustedRating: 7217.8,
  },
  {
    name: "Jake Bohm",
    weight: 111,
    age: 15,
    weightAdjustedRating: 7798.8,
  },
  {
    name: "Justin Marino",
    weight: 110.4,
    age: 17.9,
    weightAdjustedRating: 8272.7,
  },
  {
    name: "Camryn Howard",
    weight: 110,
    age: 12.4,
    weightAdjustedRating: 8624.8,
  },
  {
    name: "Anthony Severino",
    weight: 110,
    age: 12.9,
    weightAdjustedRating: 7493.9,
  },
  {
    name: "Ayushman Choudhury",
    weight: 109.6,
    age: 15.9,
    weightAdjustedRating: 7542.1,
  },
  {
    name: "Lex Luthor Key",
    weight: 109,
    age: 12.3,
    weightAdjustedRating: 6476.5,
  },
  {
    name: "Michael Cea",
    weight: 108.6,
    age: 13.7,
    weightAdjustedRating: 6740.7,
  },
  {
    name: "Gryffin Alfalla",
    weight: 108,
    age: 12.4,
    weightAdjustedRating: 7822.3,
  },
  {
    name: "jack sklar",
    weight: 107,
    age: 16.4,
    weightAdjustedRating: 7784.5,
  },
  {
    name: "Ryan Maiorana",
    weight: 106.2,
    age: 14.4,
    weightAdjustedRating: 7843.2,
  },
  {
    name: "Jared Chuquilin",
    weight: 101.4,
    age: 15.4,
    weightAdjustedRating: 7518.1,
  },
  {
    name: "Michael Kerr",
    weight: 100,
    age: 15,
    weightAdjustedRating: 7897.5,
  },
  {
    name: "Julian Medina",
    weight: 99.8,
    age: 13.7,
    weightAdjustedRating: 6925.5,
  },
  {
    name: "Kyle Francis",
    weight: 99.8,
    age: 11.6,
    weightAdjustedRating: 7158.1,
  },
  {
    name: "Max Granville",
    weight: 99,
    age: 12.3,
    weightAdjustedRating: 6366.1,
  },
  {
    name: "Jack Mcdonnell",
    weight: 99,
    age: 12.6,
    weightAdjustedRating: 5879.8,
  },
  {
    name: "Niason Dacosta",
    weight: 98,
    age: 13.8,
    weightAdjustedRating: 8220.8,
  },
  {
    name: "logan durant",
    weight: 96.2,
    age: 8.7,
    weightAdjustedRating: 5465.1,
  },
  {
    name: "Jackson Ainsley",
    weight: 95,
    age: 11.2,
    weightAdjustedRating: 6975.1,
  },
  {
    name: "Tyler Brown",
    weight: 94.8,
    age: 7.5,
    weightAdjustedRating: 5643.5,
  },
  {
    name: "Joseph Fioravanti",
    weight: 94.4,
    age: 14.7,
    weightAdjustedRating: 7276.4,
  },
  {
    name: "Anthony Chuquilin",
    weight: 93.2,
    age: 13.7,
    weightAdjustedRating: 6360.1,
  },
  {
    name: "Cody Stebbins",
    weight: 91,
    age: 8.7,
    weightAdjustedRating: 5757.2,
  },
  {
    name: "Jeremy Cruz",
    weight: 90.6,
    age: 14.1,
    weightAdjustedRating: 6453.9,
  },
  {
    name: "Darren chandarjit",
    weight: 90,
    age: 10.3,
    weightAdjustedRating: 6021.9,
  },
  {
    name: "ava capogna",
    weight: 88.2,
    age: 13.2,
    weightAdjustedRating: 6832,
  },
  {
    name: "Matt McDermott",
    weight: 87,
    age: 11.5,
    weightAdjustedRating: 7554.6,
  },
  {
    name: "Travis Smith",
    weight: 87,
    age: 11.1,
    weightAdjustedRating: 5430.3,
  },
  {
    name: "Chase Legler",
    weight: 86.2,
    age: 12,
    weightAdjustedRating: 6286.7,
  },
  {
    name: "Vincent Romano",
    weight: 86,
    age: 15.5,
    weightAdjustedRating: 6452.1,
  },
  {
    name: "Joshua Bender",
    weight: 83.6,
    age: 12.5,
    weightAdjustedRating: 6372,
  },
  {
    name: "joseph kokolakis",
    weight: 83.4,
    age: 10.8,
    weightAdjustedRating: 5597,
  },
  {
    name: "Lukas Ryan",
    weight: 83,
    age: 11.1,
    weightAdjustedRating: 6584.6,
  },
  {
    name: "Dylan Tuthill",
    weight: 82.8,
    age: 10.9,
    weightAdjustedRating: 6290,
  },
  {
    name: "Lucas Weidler",
    weight: 82,
    age: 9.8,
    weightAdjustedRating: 4727.5,
  },
  {
    name: "johnathan castro",
    weight: 81.4,
    age: 9,
    weightAdjustedRating: 5435.4,
  },
  {
    name: "Anthony Ciaramitaro",
    weight: 81.2,
    age: 11.6,
    weightAdjustedRating: 5195.5,
  },
  {
    name: "Brady Hennen",
    weight: 81,
    age: 10.3,
    weightAdjustedRating: 4746.4,
  },
  {
    name: "Luke Bartolo",
    weight: 80.8,
    age: 12,
    weightAdjustedRating: 5864.2,
  },
  {
    name: "Seamus Cusack",
    weight: 80.4,
    age: 12.8,
    weightAdjustedRating: 6191,
  },
  {
    name: "Giuseppe Calabrese",
    weight: 79,
    age: 10.6,
    weightAdjustedRating: 5714.2,
  },
  {
    name: "Jimmy Wynne",
    weight: 79,
    age: 8.2,
    weightAdjustedRating: 4937.4,
  },

  {
    name: "Michael Cerullo",
    weight: 78,
    age: 10.4,
    weightAdjustedRating: 5380.7,
  },
  {
    name: "Kenny Gein",
    weight: 76.4,
    age: 13.3,
    weightAdjustedRating: 5496.3,
  },
  {
    name: "Lorenzo Gaudioso",
    weight: 76,
    age: 10.2,
    weightAdjustedRating: 4600.5,
  },
  {
    name: "Paul Testa",
    weight: 76,
    age: 10.7,
    weightAdjustedRating: 5886.2,
  },
  {
    name: "Luca Visalli",
    weight: 75,
    age: 7.2,
    weightAdjustedRating: 4672.5,
  },
  {
    name: "Antonio Faldetta",
    weight: 75,
    age: 12.8,
    weightAdjustedRating: 6398,
  },
  {
    name: "AJ Porelli",
    weight: 75,
    age: 11.4,
    weightAdjustedRating: 5391.4,
  },
  {
    name: 'Nikita "The Guillotine" Grigoryan',
    weight: 74,
    age: 12.3,
    weightAdjustedRating: 6270.1,
  },
  {
    name: "Vincent Orandello",
    weight: 74,
    age: 13.1,
    weightAdjustedRating: 6521.2,
  },
  {
    name: "Enzo Koch",
    weight: 74,
    age: 13.9,
    weightAdjustedRating: 5604,
  },
  {
    name: "Stefan Bacchus",
    weight: 73.8,
    age: 11.2,
    weightAdjustedRating: 5214.5,
  },
  {
    name: "Greg Bellisari",
    weight: 73.8,
    age: 10.2,
    weightAdjustedRating: 5338.7,
  },
  {
    name: "Jon Mohr",
    weight: 73.5,
    age: 8.2,
    weightAdjustedRating: 4088.3,
  },
  {
    name: "Tyler Conzo",
    weight: 73.2,
    age: 11.3,
    weightAdjustedRating: 6845.2,
  },
  {
    name: 'Xavier "XMAN" Seabury',
    weight: 73,
    age: 11,
    weightAdjustedRating: 6613.1,
  },
  {
    name: 'Kevin "The Beast" Rivas',
    weight: 73,
    age: 12.2,
    weightAdjustedRating: 5815,
  },
  {
    name: "Colton Riordan",
    weight: 71.4,
    age: 9.1,
    weightAdjustedRating: 5674.8,
  },
  {
    name: "Joseph Costanza",
    weight: 71,
    age: 8.5,
    weightAdjustedRating: 5237,
  },
  {
    name: 'Ethan "the thin" Hauser',
    weight: 71,
    age: 12.4,
    weightAdjustedRating: 6469.9,
  },
  {
    name: "Tyler Hohlman",
    weight: 70.2,
    age: 10.5,
    weightAdjustedRating: 5473.9,
  },
  {
    name: "Lucas Pellechi",
    weight: 70,
    age: 9.7,
    weightAdjustedRating: 4947.1,
  },
  {
    name: "Matteo Mancuso",
    weight: 70,
    age: 10.1,
    weightAdjustedRating: 5207.2,
  },
  {
    name: "Aris Ragavanis",
    weight: 69.2,
    age: 11.9,
    weightAdjustedRating: 5209.4,
  },
  {
    name: "Riley Hohlman",
    weight: 69,
    age: 8.8,
    weightAdjustedRating: 5066.9,
  },
  {
    name: "Adam Giunta",
    weight: 68.8,
    age: 7.9,
    weightAdjustedRating: 4694.6,
  },
  {
    name: "Anthony Messina",
    weight: 68.2,
    age: 8.9,
    weightAdjustedRating: 4804.1,
  },
  {
    name: 'Gavin "The Spider" Beauchamp',
    weight: 68,
    age: 10,
    weightAdjustedRating: 5538.6,
  },
  {
    name: "Benjamin Marino",
    weight: 68,
    age: 10.6,
    weightAdjustedRating: 5320.5,
  },
  {
    name: "Dominick Visalli",
    weight: 67.6,
    age: 8.5,
    weightAdjustedRating: 4456.7,
  },
  {
    name: "Paul Cozzi",
    weight: 67.6,
    age: 8,
    weightAdjustedRating: 4918.6,
  },
  {
    name: "dominic aparicio",
    weight: 67.2,
    age: 9.2,
    weightAdjustedRating: 5140,
  },
  {
    name: "Santino Pascarella",
    weight: 67,
    age: 10.8,
    weightAdjustedRating: 5578.6,
  },
  {
    name: "Aden Smith",
    weight: 67,
    age: 6.9,
    weightAdjustedRating: 3793.6,
  },
  {
    name: "Riley Goodrich",
    weight: 67,
    age: 8.6,
    weightAdjustedRating: 5097.3,
  },
  {
    name: "Hunter Alfalla",
    weight: 66,
    age: 8.6,
    weightAdjustedRating: 4527.5,
  },
  {
    name: "Michael Mcmahon",
    weight: 65,
    age: 8.6,
    weightAdjustedRating: 4791.5,
  },
  {
    name: 'David "The Bounty Hunter" Grigoryan',
    weight: 63.6,
    age: 10.1,
    weightAdjustedRating: 4845.9,
  },
  {
    name: "Alexander Canosa",
    weight: 63,
    age: 9.3,
    weightAdjustedRating: 4224.2,
  },
  {
    name: "Andrew Caliente",
    weight: 62.6,
    age: 9,
    weightAdjustedRating: 4346.1,
  },
  {
    name: "Anthony Ciaccio",
    weight: 61.6,
    age: 11.7,
    weightAdjustedRating: 4489.1,
  },
  {
    name: "Eric Bocanegra",
    weight: 61.5,
    age: 13,
    weightAdjustedRating: 5460.5,
  },
  {
    name: "Jake Kiernan",
    weight: 61,
    age: 9.2,
    weightAdjustedRating: 4629.2,
  },
  {
    name: "William Hall",
    weight: 60.2,
    age: 8.3,
    weightAdjustedRating: 3463.4,
  },
  {
    name: "Jacob Giorgio",
    weight: 58.4,
    age: 7.1,
    weightAdjustedRating: 3715.5,
  },
  {
    name: "Junior Perez",
    weight: 58,
    age: 8.8,
    weightAdjustedRating: 4940.6,
  },
  {
    name: "Brody Bruno",
    weight: 58,
    age: 7.5,
    weightAdjustedRating: 3382.1,
  },
  {
    name: "Ryker Brown",
    weight: 58,
    age: 6.4,
    weightAdjustedRating: 2861.7,
  },
  {
    name: "Dylan Herbert",
    weight: 57,
    age: 9.8,
    weightAdjustedRating: 4286.2,
  },
  {
    name: "Connor Hanly",
    weight: 56.6,
    age: 9.5,
    weightAdjustedRating: 4337.1,
  },
  {
    name: "Joshua Umanzor",
    weight: 56.2,
    age: 8,
    weightAdjustedRating: 3871.8,
  },
  {
    name: "Chase Galvez",
    weight: 56,
    age: 9.7,
    weightAdjustedRating: 4665.3,
  },
  {
    name: "Tristan Reddy",
    weight: 56,
    age: 6.6,
    weightAdjustedRating: 2574.8,
  },
  {
    name: "Liam Foley",
    weight: 56,
    age: 6.4,
    weightAdjustedRating: 3682.8,
  },
  {
    name: "Brandon Rose",
    weight: 55.8,
    age: 8.3,
    weightAdjustedRating: 3394.9,
  },
  {
    name: "Rhys McNulty",
    weight: 55.4,
    age: 8.7,
    weightAdjustedRating: 4226.8,
  },
  {
    name: "Richie Tietjen",
    weight: 55,
    age: 8.7,
    weightAdjustedRating: 3562.5,
  },
  {
    name: "Peter Palumbo",
    weight: 54.5,
    age: 7.6,
    weightAdjustedRating: 3233.1,
  },
  {
    name: "Frank Vesce",
    weight: 54.4,
    age: 7.1,
    weightAdjustedRating: 1935,
  },
  {
    name: "Robert Udle",
    weight: 53.5,
    age: 7.2,
    weightAdjustedRating: 2929.6,
  },
  {
    name: "George Byrd",
    weight: 53.4,
    age: 5.9,
    weightAdjustedRating: 2205,
  },
  {
    name: "Alex Loglisci",
    weight: 52.6,
    age: 9.6,
    weightAdjustedRating: 3584.3,
  },
  {
    name: "Maxim Auguste",
    weight: 52.6,
    age: 7.7,
    weightAdjustedRating: 3366.7,
  },
  {
    name: "Brandon Costello",
    weight: 52,
    age: 7.8,
    weightAdjustedRating: 2915.5,
  },
  {
    name: "richard didonato",
    weight: 51.6,
    age: 5.8,
    weightAdjustedRating: 1909.4,
  },
  {
    name: "Dylan Baroni",
    weight: 51,
    age: 4.8,
    weightAdjustedRating: 1946.3,
  },
  {
    name: "Andrew Palumbo",
    weight: 50.2,
    age: 7.6,
    weightAdjustedRating: 2528.3,
  },
  {
    name: "Giancarlo Ficalora",
    weight: 50.2,
    age: 5.8,
    weightAdjustedRating: 2338.9,
  },
  {
    name: "Riely Autera",
    weight: 50,
    age: 8,
    weightAdjustedRating: 2647.3,
  },
  {
    name: "Jackson Takseraas",
    weight: 49.6,
    age: 7.6,
    weightAdjustedRating: 2582.5,
  },
  {
    name: "Greyson Larkin",
    weight: 49.4,
    age: 4.7,
    weightAdjustedRating: 2197.6,
  },
  {
    name: "Tristan Batohie",
    weight: 49,
    age: 7,
    weightAdjustedRating: 2747.8,
  },
  {
    name: "Logan Moskowitz",
    weight: 48,
    age: 6.2,
    weightAdjustedRating: 1242.8,
  },
  {
    name: "Anthony DellUniversita",
    weight: 47.6,
    age: 5.8,
    weightAdjustedRating: 1815.8,
  },
  {
    name: "Logan Hull",
    weight: 47.2,
    age: 6,
    weightAdjustedRating: 1976.2,
  },
  {
    name: "Woody Cromarty",
    weight: 47,
    age: 5.9,
    weightAdjustedRating: 1328.1,
  },
  {
    name: "Griffin Caliente",
    weight: 46.6,
    age: 6.7,
    weightAdjustedRating: 2845.9,
  },
  {
    name: "Colton Stebbins",
    weight: 46.6,
    age: 5.6,
    weightAdjustedRating: 2239,
  },
  {
    name: "joshua castro",
    weight: 46.4,
    age: 6.9,
    weightAdjustedRating: 3107.9,
  },
  {
    name: "Jameson Costello",
    weight: 46,
    age: 6.3,
    weightAdjustedRating: 2241.1,
  },
  {
    name: "Dean Carmel",
    weight: 45.2,
    age: 8.7,
    weightAdjustedRating: 3299.4,
  },
  {
    name: "Justin Cerullo",
    weight: 43.6,
    age: 6.5,
    weightAdjustedRating: 2234.2,
  },
  {
    name: "Joseph Canosa",
    weight: 43,
    age: 6.2,
    weightAdjustedRating: 2235.8,
  },
  {
    name: "Anthony Giannuzzi",
    weight: 42,
    age: 5.8,
    weightAdjustedRating: 1103.7,
  },
  {
    name: "Wesley Lasen",
    weight: 41.8,
    age: 5.8,
    weightAdjustedRating: 1921.2,
  },
  {
    name: "Brayden Romano",
    weight: 41.4,
    age: 7.1,
    weightAdjustedRating: 1987.8,
  },
  {
    name: "Alex Webb",
    weight: 40.2,
    age: 5.8,
    weightAdjustedRating: 852.4,
  },
  {
    name: "Enzo Algieri",
    weight: 40,
    age: 5.5,
    weightAdjustedRating: 1254.7,
  },
  {
    name: "Logan Galvez",
    weight: 39.6,
    age: 6.6,
    weightAdjustedRating: 3146.2,
  },
  {
    name: "Colton Takseraas",
    weight: 39.6,
    age: 5.1,
    weightAdjustedRating: 1106.9,
  },
  {
    name: "William Garcia",
    weight: 37,
    age: 3.9,
    weightAdjustedRating: 299.8,
  },
  {
    name: "Stephan Kroski",
    weight: 33,
    age: 3.7,
    weightAdjustedRating: 114.2,
  },
  {
    name: "Gibson Takseraas",
    weight: 32.6,
    age: 3.8,
    weightAdjustedRating: -306.9,
  },
  {
    name: "Dalton Takseraas",
    weight: 32.4,
    age: 3.8,
    weightAdjustedRating: -93,
  },
  {
    name: "Darian Bacchus",
    weight: 32,
    age: 4.7,
    weightAdjustedRating: 1329.1,
  },
];
