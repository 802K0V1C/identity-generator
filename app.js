const fs = require('fs');

//osoby
const genders = [ 'M', 'F' ]
const maleNames = [ 'Artur', 'Hubert', 'Dariusz']
const femaleNames = [ 'Paulina', 'Beata', 'Aleksandra']
const lastNames = [ 'Bozek', 'Olszyna', 'Rosiek']

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Pusta tablica do przechowywania osób 
const people = []

//Pętla która wygeneruje 20 losowych osób)
for (let i = 0; i < 20; i++ ) {
const person = {}

const personGender = randChoice(genders);

person.gender = personGender;

//wybor plci
if ( personGender === 'M') {
    person.firstName = randChoice(maleNames)
} else {
    person.firstName = randChoice(femaleNames);
}

//Losowanie nazwiska
person.lastName = randChoice(lastNames)

//Losowanie wieku
person.age = Math.floor(Math.random() * 60) + 18;

people.push(person)
}

const json = JSON.stringify(people);

fs.writeFile('people.json', json, (err) => {
    if (err) {
    console.error(err);
    return;
    }
    console.log('Dane zostały zapisane do pliku people.json');
});