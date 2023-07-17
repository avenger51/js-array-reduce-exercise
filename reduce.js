/*
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the 
value of each object at the key.
*/
//I HAVE NO IDEA WHY JASMINE HAS AN ERROR FOR UNDEFINED.  NOT A CLUE
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
   // extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']


function extractValue(arr, key) {
    //cummulativeValue, currentValue
    return arr.reduce(function(accumulator, currentValue) {
       const value = currentValue[key];
       accumulator.push(value);
return accumulator;
}, []);
}

/*
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
!!!!!!!!!!!!!!I TRIED TO GET THIS TO WORK FOR HOURS.....!!!!!!!!!!!!!!!!!!!!!
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
//const str = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
//
//function vowelCount(str) {
//    const vowels = ['a', 'e', 'i', 'o', 'u'];
//  
//    return [...str.toLowerCase()].reduce(function(accumulator, currentVal) {
//      if (vowels.includes(currentVal)) {
//        accumulator[currentVal] = (accumulator[currentVal]
//      }
//      return accumulator;
//      //console.log(accumulator);
//    }, {});
//    
//  }
//  
//function vowelCount(str) {
//  const vowels = ['a', 'e', 'i', 'o', 'u'];
//  const vowelCount = {};
//  return str.reduce(function(accumulator, currentVal) {
//     str.name into something to then check
//      if (vowels.includes(toLowerCase()(currentVal)) {
//
//return accumulator;
//  }, {});
//
//console.log(accumulator);
// accumulator.push //into some empty POS maybe an empty {}
//  
//  
//      if currentvalue.name of str = vowels
//       if currentVal.includes(vowels) {
//cumulator.push
//       }
//       return 

/*
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to 
it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

    function addKeyAndValue(arr, key, value) {
        return arr.reduce(function(result, obj) {
          obj[key] = value;
          result.push(obj);
          return result;
        }, []);
      }



/*
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Write a function called partition which accepts an array and a callback and returns an array with two arrays inside 
of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {}

//PRACTICE FROM OUTSIDE HELP NOT THE COURSE...ugh
//Calculate the sum of numbers in an array and then provide if even or not

//WORKS
// const arrayPractice = [13, 44, 54, 90];
// 
// const sum = arrayPractice.reduce(function(accumulator, value) {
//     console.log(value + accumulator); 
//     return accumulator + value;
// }, 0);
// //Calculate the sum of numbers in an array and then provide if even or not
// const arrayPractice2 = [10, 3];
// 
// const sum2 = arrayPractice2.reduce(function(accumulator, value) {
//     if((accumulator + value ) % 2 === 0) {
//         return accumulator;
//     }
//     else{
//        console.log('nope');
//     }
//     }, 0);
//     //console.log(value + accumulator); 
//     //return accumulator + value;
// //Calculate the total number of characters in the names of the objects
// 
// const characters = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
// //const emptyValue = {};
// function lettersValues(characters, key){
//      characters.reduce(function(total, obj) {
//         return total + obj[key].length; 
//     
//         //so iterate over each object, pull out the name, and count the letters in each name
// //console.log(characters[obj].name);
// //console.log(lettersValues(total));
// }, );
// }