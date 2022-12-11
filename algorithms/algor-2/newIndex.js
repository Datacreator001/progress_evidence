
// ================ reduce functions ===================\\
/* 1. */

// function total(arr) {
//    const arr1 = arr.reduce((prev, cur) =>prev + cur)
//    console.log(arr1);
// }
// =====================================================\\
// console.log(total([1,2,3])); // 6
 /* 2. */

//  function stringConcat(arr) {
//    const concat = arr.reduce((prev, cur) =>  prev + cur,'')
  
   
//    console.log(concat);
// }

// console.log(stringConcat([1,2,3])); // "123"

// =====================================================\\
/* 3. */


// var voters = [
// 	{ name: 'Bob', age: 30, voted: true },
// 	{ name: 'Jake', age: 32, voted: true },
// 	{ name: 'Kate', age: 25, voted: false },
// 	{ name: 'Sam', age: 20, voted: false },
// 	{ name: 'Phil', age: 21, voted: true },
// 	{ name: 'Ed', age: 55, voted: true },
// 	{ name: 'Tami', age: 54, voted: true },
// 	{ name: 'Mary', age: 31, voted: false },
// 	{ name: 'Becky', age: 43, voted: false },
// 	{ name: 'Joey', age: 41, voted: true },
// 	{ name: 'Jeff', age: 30, voted: true },
// 	{ name: 'Zack', age: 19, voted: false },
// ];
// function totalVotes(arr) {
// 	const voteCount = arr.reduce((count,voter)=>{
//         return count + !voter.voted
//     },0)
//     return voteCount
// }

// console.log(totalVotes(voters));

// =====================================================\\

/* 4. */

// function shoppingSpree(arr) {
//  return  arr.reduce((totalPrice, cost)=> cost.price + totalPrice,0)
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005

// =====================================================\\

/* 5. */

// function flatten(arr) {
//  return arr.reduce((acc,cur)=>acc.concat(cur))
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// =====================================================\\

/* 6. */

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
const getAge =(age)=>{
    if (age <= 25) return ['youth', 'youngVotes'];
	if (age <= 35) return ['mids', 'midVotes'];
	return ['olds', 'oldVotes'];
   };

   const counts =voters.reduce((acc,{age,voted})=>{
    const [prop,voteProp] = getAge(age)
    acc[prop] = (acc[prop] || 0) + 1;
    if(voted){
        acc[voteProp] = (acc[voteProp] || 0) + 1;
    }
    return acc
   },{})


console.log(counts); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/