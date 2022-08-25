//Section 1
//Create array of ages
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
//Programmatically log first element - last element
console.log(ages[0] - ages[ages.length - 1]);
//add ages to variable ages.
ages.push(100, 16, 31);
//to test for add
console.log(ages); 
//add a new age variable, ensure first - last element still works
console.log(ages[0] - ages[ages.length - 1]);
//loop ages array to find and print average
    var sum = 0;
    for (var i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    console.log(sum / ages.length);

//Sect. 2
//Create array of names
var names = ["Sam", "Tommy" , "Tim" , "Sally" , "Buck", "Bob"]
//Notes
//convert array of strings into intergers, e.i. "Sam" = Sam; record that Sam = 3 elements; keep 3 then loop to add range of array to get total; divide total by names.length 
//looking for [3 + 5 + 3 + 5 + 4 + 3 = 23/6 = 3.8333]
//loop to find average length of names and print
//Proofs
//console.log(names.length) = 6
//console.log(names.join("")) = No "", only letter array returns
//console.log(names.join("").length) = 23 total letters
//End Proofs

for (let i = 0; i <= names.length; i++) {
    avg = names.join("").length / names.length;
    console.log(avg);
}
//loop for avg letters in names array

for (let i = 0; i <= names.length; i++) {
    spaced = names.join(" ");
    console.log(spaced);
}
//loop to concatenate names together with a space, print

//Sect. 3
array = [-2,-1,1,2,3,4]
//Test Array
console.log(array.length);
//access last element of any array
//Sect. 4
console.log(array[0]);
//access first element of any array

//Sect. 5
//var names = ["Sam", "Tommy" , "Tim" , "Sally" , "Buck", "Bob"]
//need to select elements of an array after return as a interger

var nameLengths = [];
for (let i = 0; i <= names.length; i++) {
    if (names[i]) {
        nameLengths.push(names.slice(i,i + 1).join('').length);
    }
}
console.log(nameLengths);
//console.log(names.slice(0, names.length));

//Sect. 6
//loop nameLengths to sum all elements; print; goal is 23
var sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

//Sect. 7
//function of two parameters (word, n), concatenated word n times
function replicateWord (word, n) {
    var repWord = "";
    while (n > 0) {
        repWord += word;
        n--;
    }
    return repWord;
}
var wordReplicate = replicateWord("Go",3);

console.log(wordReplicate);

//Sect. 8
// write function for firstName and lastName; returns full name
function fullName (firstName, lastName) {
    return firstName + " " + lastName
}
var client = fullName("Obi","Wan")

console.log(client);

//Sect. 9
//function looks at an array of numbers; returns boolean True if sum of all is greater than 100
function sumGreaterThan100 (array) {
    var sum = array.reduce((partial, a) => partial + a, 0);
    return sum > 100;
}
var greater100True = sumGreaterThan100 ([10, 45, 8])
console.log(greater100True);

// var a = [10,45,40,5]
// console.log(a.reduce((partialSum, a) => partialSum + a, 0));

//Sect. 10
//function that takes an array of numbers and returns the average
//Reference:
// var sum = 0;
// for (var i = 0; i < ages.length; i++) {
//     sum += ages[i];
// }
// console.log(sum / ages.length);

function avgOfArray (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
        avg = sum / array.length;
    }
    return (avg) 
}
var avgPrint = avgOfArray ([1,2,3,4])
console.log(avgPrint);

//Sect. 11
//function for two arrays; true if avg of 1st array is > avg 2nd array
function avgOfTwoArrays (arrayOne, arrayTwo) {
    var sum1 = 0;
    for (var i = 0; i < arrayOne.length; i++) {
        sum1 += arrayOne[i];
        avgArrayOne = sum1 / arrayOne.length;
    }
    var sum2 = 0
    for (var i = 0; i < arrayTwo.length; i++) {
        sum2 += arrayTwo[i];
        avgArrayTwo = sum2 / arrayTwo.length;
    }
    return (avgArrayOne > avgArrayTwo);
}
var avgOfTwoArraysTrue = avgOfTwoArrays ([2,4,6], [1,3,6])
//arrayOne = 4, arrayTwo = 3
console.log(avgOfTwoArraysTrue);

//Sect. 12
// function 'willBuyDrink' that takes boolean 'isHotOutside' and 'moneyInPocket, and returns TRUE if it is hot and if money is >10.50
function willBuyDrink (isHotOutside, moneyInPocket) {
    if(isHotOutside >= 85) {
        hot = true
    } else (hot = false); 
    if(moneyInPocket > 10.50) {
        money = true
    } else (money = false);
    return(hot == money);
}
var buyDrink = willBuyDrink (72, 11.55)
console.log(buyDrink);

//Sect.13
//custom function to solve problem
//will my wife adopt another dog

function willWeAdopt (numDogs, currentDogs, numCats, currentCats, finances) {
    if (numDogs <= currentDogs) {
        fullDogs = true
    } else (fullDogs = false);
    if (numCats <= currentCats) {
        fullCats = true
    } else (fullCats = false);
    if (finances >= 40000) {
        enoughMoney = true
    } else (enoughMoney = false);

    return(fullDogs == fullCats == enoughMoney)
}

var adoptDog = willWeAdopt (1, 1, 0, 3, 44000);
console.log(adoptDog);
/*This function tests several items to see if one should adopt another dog.
The 'willWeAdopt' function enters the number of dogs to adopt, the number of dogs you have, number of cats to be adopted, and the number of cats already here.
It finally compares it to your financial situation - a secure income and home is important to adopting or even fostering a dog.
Returns of true statements are 'yes, you should' while one false will return a 'no, you shouldn't'
*/