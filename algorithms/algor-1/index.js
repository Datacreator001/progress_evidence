// const { performance, PerformanceObserver } = require('perf_hooks');

// const nemo = ['nemo', 'kemo'];

// function findNemo(array) {
// 	let t0 = performance.now();
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[0] === 'nemo') {
// 			const index1 = array[0];
// 			array[0] = array[1];
// 			array[1] = index1;
// 			return array;
// 		}
// 	}
// 	let t1 = performance.now();
// 	console.log(
// 		'Time to run findNemo Function took' + (t1 - t0) + 'milliseconds'
// 	);
// }

// console.log(findNemo(nemo));

// function funChallenge(input) {
// 	let a = 10; //0(1)
// 	a= 50 + 3; //0(1)

// 	for (let i = 0; i < input.length; i++) { // O(n)
// 		anotherFunction(); //O(n)
// 		let stranger = true; //O(n)
// 		a++ ; // 0(n)

// 	}
// 	return a; // O(n)
// }

// BIG O(3 + 4n) = O(n)

// Log all pairs of array

// const boxes =[1,2,3,4,5];

// function logAllpairsOfArray(arr){
// 	for (let i = 0; i < arr.length; i++){
// 		for(let j = 0; j < arr.length; j++){
// 			console.log(arr[i],arr[j]);
// 		}
// 	}
// }

// console.log(logAllpairsOfArray(boxes));
//

// const twoDi = [[1],[2],[3]]

// const flatten = twoDi.reduce((a,b)=>a.concat(b),[])

// console.log(flatten);

let arr = [1, 3, 5, 6, 1, 6];

function isSortedAndHow(array) {
	for (i = 0; i < array.length; i++) {
		if (array[i] > array[i + 1]) {
			return 'yes, descending';
		} else if (array[i] < array[i + 1]) {
			console.log(array[i+1]);
			return 'yes, ascending';
		} else return 'no';
	}
}

console.log(isSortedAndHow(arr));
