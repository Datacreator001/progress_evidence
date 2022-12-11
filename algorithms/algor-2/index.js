// const map = {
// 	I: 1,
// 	V: 5,
// 	X: 10,
// 	L: 50,
// 	C: 100,
// 	D: 500,
// 	M: 1000,
// };
// var romanToInt = function (s) {
// 	let sum = 0;

// 	for (let i = 0; i < s.length; i++) {
// 		let sign = 1;
// 		if (
// 			i < s.length - 1 &&
// 			(map[s[i + 1]] === map[s[i]] * 5 || map[s[i + 1]] === map[s[i]] * 10)
// 		) {
// 			sign *= -1;
// 		}
// 		sum += sign * map[s[i]];
// 	}
// 	return sum;
// };

// var romanToInt = function (s) {
// 	let sum = 0;

// 	for (let i = 0; i < s.length; i++) {
// 		let sign = 1;
// 		if (
// 			i < s.length - 1 &&
// 			(map[s[i + 1]] === map[s[i]] * 5 || map[s[i + 1]] === map[s[i]] * 10)
// 		) {
// 			sign *= -1;
// 		}

// 		sum += sign * map[s[i]];
// 	}

// 	return sum;
// };

// const arr = [2,1,4,6,1,7]

// const findDivByEight = (arr) => {
// 	for(let i = 0 ; i < arr.length; i++) {
// 		let current = i
// 		while (current > 0 && arr[current] < arr[current - 1]){
// 			const temp = arr[current]
// 			arr[current] = arr[current - 1]
// 			arr[current - 1] = temp
// 			current--
// 		}
// 	}
// 	return arr
// }

// console.log(findDivByEight(arr))
// const arr = ['x','b','c'];
// const arr2 = ['x', 7, 8, 9];

// function containsCommonItems(arr1, arr2) {
// 	let map = {};
// 	for (i = 0; i < arr1.length; i++) {
// 		if (!map[i]) {
// 			const item = arr1[i];
// 			map[item] = true;
// 		}
// 	}
// 	for(j =0 ; j < arr2.length ; j++ ){
// 		if(map[arr2[j]]){
// 			return true
// 		}
// 	}
// 	return false
// }

//space complexity: O(n)
//time  complexity: O(a+b)

// console.log(containsCommonItems(arr, arr2));
// const arr = [1, 3, 5, 7, 8];

// var search = function (nums, target) {
// 	// 1. interating over the array
// 	for (let index = 0; index < nums.length; index++) {
// 		//checking if target exist in the array
// 		if (target === nums[index] ) {
// 			// if it exist return the index of where it exist in the array
// 			return index;
// 		}
// 	}
// 	// if target doesnt exist in array return -1
// 	return -1
// };

// console.log(search(arr, 3));

//s = s.replace(/[^A-Z0-9]/ig,"").toLowerCase()
// var isPalindrome = function(s) {
//     //1. convert the string
//     s = s.replace(/[^A-Z0-9]/ig,'').toLowerCase()

//     let foward = 0
//     let backward = s.length - 1
//     //2. iterate through the string foward and iterate through the string backwards, and if character matches return true
//     while(foward < backward){
//        if(s[foward] !== s[backward]) {
// 		return false
// 	   }
//         foward ++
//         backward --
//     }
// 	return true
// };
// console.log(isPalindrome('A man, a plan, a canal: Panama'));

//  const parens = '{}'
// var isValid = function (s) {
// 	let stack = []
// 	const string = '[]{}()';
// 	let i = 0

// 	while(i < s.length) {
// 		stack.push(s[i])
// 		i++
// 		let open = stack[stack.length -2];
// 		let closed = stack[stack.length -1]
// 		console.log(open + closed);
// 		let potParens = open + closed

// 		if(string.includes(potParens)) {
// 			stack.pop();
// 			stack.pop();
// 		}
// 	}
// 	console.log(stack);
// 	return stack.length === 0
// };

// console.log(isValid(parens));

// const arr = [
// 	{id : 1},
// 	{id : 2},
// 	{id : 3},
// 	{id : 4},
// 	{id : 5},
// ];

// //get rid of letters

// const deleteObject = (arr) => {
//     // const index = arr.findIndex(obj => obj.id === 3)
// 	// console.log(index);
// 	// arr = arr.splice(index, 1)

// 	arr= arr.filter(obj => obj.id !==5)
// 	return arr
// };

// console.log(deleteObject(arr));
// 1. what is the beginning of the string and the last of the string
// 2. swap the beginning and the last of the string

// const hello = 'Hey There Buddy'

// const reverse = (str) => {
// 	let start = 0
// 	let last = str.length - 1
// 	const newArr = []
// 	while (last >= start) {
// 		newArr.push(str[last])
// 		last--
// 	}
// 	return newArr.join('')
// }

// console.log(reverse(hello));

//1. Identify the indexes of the first array
//2. Compare the indexes of the first array to the indexes of the second array
//3. merge the indexes of the first and the second array in a sorted maintainers

// const arr1= [1,3,5,7,8]
// const arr2 = [5,8,9,10,11]

// const mergedSortedArrays = (arr1, arr2) => {
// 	const mergedArr = []

// 	let array1Item = arr1[0]
// 	let array2Item = arr2[0]
// 	let i = 1
// 	let j = 1

//check input
// 	if(arr1.length ===0){
// 		return arr2
// 	}
// 	if(arr2.length ===0){
// 		return arr1
// 	}
// 	while(array1Item || array2Item){
// 		if (!array2Item || array1Item < array2Item){
// 			mergedArr.push(array1Item)
// 			array1Item = arr1[i]
// 			i++
// 		}else {
// 			mergedArr.push(array2Item)
// 			array2Item = arr2[j]
// 			j++
// 		}
// 	}
// 	return mergedArr
// }

// console.log(mergedSortedArrays(arr1, arr2));

// var twoSum = function (nums, target) {
// 	for (i = 0; i < nums.length; i++) {
// 		if(nums[0]+nums[1] === target){
// 			return
// 		}
// };
// }

// console.log(twoSum([1, 3, 4, 1], 4));
// const arr = [1, 2, 3];

// /\/\/\/\/\/\/\/(--------CONTAINS DUPS PROBLEMS---------)/\/\/\/\//\/\/\/\/\/\/\/\/\/\

// var containsDuplicate = function (nums) {
// 	let counter = 0;
// 	let nextNumber = 1;
// 	const sortArr = nums.sort((a,b) => a - b);
// 	let lastNumber = sortArr[sortArr.length - 1];
// 	let nextToLast = sortArr[sortArr.length - 2]
// 	if (sortArr.length === 1) {
// 		return false;
// 	}
// 	if (sortArr[counter] !== sortArr[nextNumber]) {
// 		counter++;
// 		nextNumber++;
// 	}
// 	if (sortArr[counter] === sortArr[nextNumber] || nextToLast === lastNumber) {
// 		return true;
// 	}

// 	return false;
// };

// var containsDuplicate = function (nums) {
// 	let noDups = new Set(nums);
// 	return [...noDups].length !== nums.length;
// };

// console.log(containsDuplicate(arr));

// let obj = {
//     Blue: [1,3,5,6,6],
//     Red: 2,
//     Red: 2,
// }

// let unique = new Set(obj.Blue)

// console.log([...unique]);
// const arr = [12, 5, 1, 9, 18, 20];
// let sort = (arr) => {
//     let i = 0
//     while(i < arr.length){
//         if(arr[i] < arr[i+1]){
//             temp =

//         }
//         i++
//     }
//     return arr
// }

// var moveZeroes = function (nums) {
// 	let nonZerosInx = 0;

// 	for (i = 0; i < nums.length; i++) {
// 		if (nums[i] !== 0) {
// 			nums[nonZerosInx] = nums[i];
// 			nonZerosInx++;
// 		}
// 	}
// 	for (i = nonZerosInx; i < nums.length; i++) {
// 		nums[i] = 0;
// 	}
// };
// var moveZeroes = function (nums) {
// 	let zerosIdx = console.log(zerosIdx);
// 	let noZeros = nums.filter((indx) => indx !== 0);
// 	nums = noZeros;
// 	return nums;
// };

// function countPositivesSumNegatives(input) {
// 	let count = [];
// 	let total = 0;
// 	if (input === null || input.length === 0) {
// 		return [];
// 	}

// 	for (i = 0; i < input.length; i++) {
// 		if (input[i] > 0) {
// 			count.push(input[i]);
// 		} else if (input[i] < 0) {
// 			total += input[i];
// 		}
// 	}
// 	return [count.length, total];
// }

// function countPositivesSumNegatives(input) {
// 	return input && input.length
// 		? [
// 				input.filter((p) => p > 0).length,
// 				input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
// 		  ]
// 		: [];
// }
// console.log(countPositivesSumNegatives([1,2,4,6,-1,-5,-10]));

// var list1 = [
// 	{
// 		firstName: 'Noah',
// 		lastName: 'M.',
// 		country: 'Switzerland',
// 		continent: 'Europe',
// 		age: 19,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Maia',
// 		lastName: 'S.',
// 		country: 'Tahiti',
// 		continent: 'Oceania',
// 		age: 28,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Shufen',
// 		lastName: 'L.',
// 		country: 'Taiwan',
// 		continent: 'Asia',
// 		age: 35,
// 		language: 'HTML',
// 	},
// 	{
// 		firstName: 'Sumayah',
// 		lastName: 'M.',
// 		country: 'Tajikistan',
// 		continent: 'Europe',
// 		age: 30,
// 		language: 'CSS',
// 	},
// ];

// function countDevelopers(list) {
// 	return list.reduce((a, b) => {
// 		if(b.continent === 'Europe'){
//             a++
//         }
//         return a

// 	}, 0);
// }

// console.log(countDevelopers(list1));

// function arrayDiff(a, b) {
// 	return a.filter((input)=> !b.includes(input))
// }

// console.log(arrayDiff([1,1,2],[1,2]));

// function moveZeros(arr) {
// 	let zerosToTheEnd = [];

// 	const removeZeros = arr.filter((arr) => arr !== 0);

// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i] === 0) {
//             let zeros = arr[i]
// 			zerosToTheEnd.push(zeros);
// 		}
// 	}
// 	return removeZeros.concat(zerosToTheEnd);
// }
// function findEven(arr){
//     const isEven = arr.filter((index) => {
// 	return index % 2 === 0;
// })
// return isEven
// }

// console.log(findEven([0,1, 2, 0, 4, 6, 0, 'false']));

// const isSortedAndHow = (array) => {
// 	let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
// 	let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

// 	return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no';
// };
// console.log(isSortedAndHow([1,2,3,4,5,1]));

var list1 = [
	{
		firstName: 'Sofia',
		lastName: 'I.',
		country: 'Argentina',
		continent: 'Americas',
		age: 35,
		language: 'Java',
	},
	{
		firstName: 'Lukas',
		lastName: 'X.',
		country: 'Croatia',
		continent: 'Europe',
		age: 35,
		language: 'Python',
	},
	{
		firstName: 'Madison',
		lastName: 'U.',
		country: 'United States',
		continent: 'Americas',
		age: 32,
		language: 'Ruby',
	},
];

// function greetDevelopers(list) {
// 	const map = list.map((list) => {
// 		return (list.greeting = `Hi ${list.firstName}, what do you like the most about ${list.language}?`);
// 	});
//     return list
// }

// console.log(greetDevelopers(list1));

// function getFirstPython(list) {
// 	const dev = list.find((x) => x.language === 'Python');
// 	return dev
// 		? `${dev.firstName}, ${dev.country}`
// 		: 'There will be no Python developers';
// }

// function getFirstPython(list) {
// 	for (var i = 0; i < list.length; ++i)
// 		if (list[i].language == 'Python')
// 			return list[i].firstName + ', ' + list[i].country;
// 	return 'There will be no Python developers';
// }
const people = new Object();

const addPerson = (obj, firstName, age) => {
	obj.firstName = firstName;
	obj.age = age;

	return obj;
};
addPerson(people, 'nick', 16);
addPerson(people, 'ian', 17);

console.log(people);
