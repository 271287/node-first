//const os = require('os');
const fs = require('fs');

const gender = ['F', 'M'];
const maleNames = ['John', 'Tom', 'Bruce', 'Travis'];
const femaleNames = ['Anna', 'Jane', 'Cathy', 'Trinity'];
const lastNames = ['Smith', 'Johnson', 'Lee', 'Burn'];
const people = [];

const randChoice = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};

for (i = 0; i < 20; i++) {
    let personsName = '';  
    const personsGender = randChoice(gender);

    if (personsGender === 'M') {
        personsName = randChoice(maleNames);
    } else {
        personsName = randChoice(femaleNames);
    }
    const personsLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const personsAge = Math.floor(Math.random() * 60 + 18);

    const newPerson = {
        gender : personsGender,
        name: personsName,
        lastName: personsLastName,
        age: personsAge,
      };
      people.push(newPerson);
    
};

const peopleJSON = JSON.stringify(people);

fs.writeFile('outputfile.txt', peopleJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});



