const characters = [
	{
		name: 'Luke Skywalker',
		height: 172,
		mass: 77,
		eye_color: 'blue',
		gender: 'male',
	},
	{
		name: 'Darth Vader',
		height: 202,
		mass: 136,
		eye_color: 'yellow',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: 150,
		mass: 49,
		eye_color: 'brown',
		gender: 'female',
	},
	{
		name: 'Anakin Skywalker',
		height: 188,
		mass: 84,
		eye_color: 'blue',
		gender: 'male',
	},
];

//***MAP***
//1. Get array of all names
// const getAllNames = (arr) => {
//     let allNames = arr.find(obj => obj.name )
//     console.log(allNames);
// }

// console.log(getAllNames(characters));
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc,cur)=>acc + cur.mass,0)
console.log(`Total mass of all characters: ${totalMass}`);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc,cur)=>acc + cur.height,0)
console.log(`Total height of all characters: ${totalHeight}`)
//3. Get total number of characters by eye color
const totalNumberOfCharacters = characters.reduce((acc,cur)=> {
 if(acc[cur.eye_color]){
    acc[cur.eye_color]++
 } else {
    acc[cur.eye_color] = 1
 }
 return acc
},{})

console.log(totalNumberOfCharacters);
//4. Get total number of characters in all the character names
const totalNumberOfNames = characters.reduce((acc,cur)=>{
if(acc[cur.name]){
   acc[cur.name]++
} else{
    acc[cur.name] = 1
}
return acc
},{})
console.log(totalNumberOfNames);
//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
