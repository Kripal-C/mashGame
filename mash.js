let housesArray = ['Mansion', 'Castle', 'Shack', 'House'];
let randomPets = ['Dinosaur', 'Eagle', 'Alligator', 'Blobfish'];
let collegeArray = ['Harvard', 'Cornell', 'Baruch', 'UCLA'];
let occupationArray = ['a Data Scientist', 'a Youtuber', 'an Engineer', 'Umemployed'];

function randNumGenerator(integer) {
    return Math.floor(Math.random() * integer);
}

let inputHome = process.argv[2];
let inputPet = process.argv[3];

if (inputHome) {
    housesArray.push(inputHome);
}

function getHome() {
    return housesArray[randNumGenerator(housesArray.length)];
}

function getTravelCount() {
    return randNumGenerator(101);
}

function getPet() {
    if (inputPet && Math.random() < .5) {
        return inputPet;
    } else {
        return randomPets[randNumGenerator(randomPets.length)];
    } 
}

function getCollege() {
    return collegeArray[randNumGenerator(collegeArray.length)];
}

function getJob() {
    return occupationArray[randNumGenerator(occupationArray.length)];
}

function mash() {
    return "You will live in a " + getHome() + " and travel to " + getTravelCount() + " countries, and have a pet " + getPet() + "! You will also go to " + getCollege() + " for college and become " + getJob() + "!";
}



let result = mash();
console.log(result);


