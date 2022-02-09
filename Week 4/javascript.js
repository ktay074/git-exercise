// const fruits = ['banana', 'orange', 'lychee', 'apple']

// fruits.push ('grapes', 'peaches')





// const numbers = [1,2,3,4,5]

// const numbersTimesThree = numbers.map(num => num * 3); 

// console.log(numbersTimesThree)

// numbers.forEach(num => {
//     console.log("The number " + num + " is: ", num % 2 === 0 ? 'Even' : 'Odd')

//     }    )

// fruits.pop (); 
// // console.log(fruits)

// fruits.forEach(fruit => console.log(fruit)); 
  
// const colours = ['purple', 'orange', 'blue', 'green', 'black']

// colours.forEach((colour) => console.log('purple')); 

// const food = ['gelato', 'pie', 'fish', 'bbq']

// const favFood = (favouriteFood, foods) => foods.includes(favouriteFood);
  

// favFood ('gelato', food)

// nums = [4,5,6,19,8,20,55,78]

// nums.sort((a, b) => a-b); 
// console.log (nums)


// const arrayofObjs = [
//     { name: 'John', age: 25}, 
//     { name: 'Frank', age: 53}, 
//     { name: 'Dave', age: 32},
//     { name: 'Lisa', age: 19},
// ]


// const sortedArray = (someArrayOfObjects) => {
//     someArrayOfObjects.sort((a, b) => b.age - a.age );
//  };

//  sortedArray (arrayofObjs)

//  console.log(arrayofObjs)

// const unfilteredArray = ['filter', 'jujutsu', 'flex', 'humid', 'confusion']

// console.log('unfiltered array = ' + unfilteredArray)

// const filteredArray = unfilteredArray.filter(str => str.length > 6)

// console.log('filtered array = ' + filteredArray)


// const characters = [
//     {name: 'Tom Sawyer', birthdate: 1876, death: 1945},
//     {name: 'Bart Simpson', birthdate: 1989, death: 2017}, 
//     {name: 'Peter Griffin', birthdate: 1999, death: 2014}

// ];

// const deathYear = (charsArray) => {

//     return charsArray.sort((a,b) => (a.death - b.death)
//     )
// }
// console.log(deathYear(characters));





// const sortByDeathYear = (charsArray) => {
//     return charsArray.sort((a, b) => a.death - b.death);
//   };


// Sebin's answer
// const sortByDoB = (charsArray) => {
//     return charsArray.sort((a, b) => a.birthdate - b.birthdate);
//   };


// const nameSort = (nameArray) => {
//     return nameArray.sort((a,b) => a.name.localeCompare(b.name)) //pass the second string that you want to compare as a parameter
// }


// console.log(nameSort(characters)); 

// const userList =
// [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 5,
//       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//       "completed": false
//     }
//   ]

// const userSort = userList.filter((item) => item.completed === true) 


// console.log(userSort);


const numbers = [0,1,2,3,4,5,6,7,8,9]
g
const removeNums = (numsArray) => {
    numsArray.splice(3, 5); 
    return numbers
}

console.log(removeNums(numbers))