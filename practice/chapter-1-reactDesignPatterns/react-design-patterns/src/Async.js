import React from 'react';

const Async =  () => {

const loadData= async()=>{
try {
	const url = `http://localhost:3000/`;
	const getData = await fetch(url)
	const data= await getData.json()
	console.log(data);
} catch (error) {
	console.error(error);
}	
}	
loadData()
	return <div></div>; // = React.createElement = JSX
};

export default Async;
