import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState['people']>([
		{
			name: 'Lebron James',
			url: 'https://sportshub.cbsistatic.com/i/r/2021/10/15/4744c60f-62e7-4c18-968e-0d21934f0681/thumbnail/1200x675/21ce949aa64f20666919da58bb15986e/lebron-james.jpg',
			age: 36,
			note: 'Allergic to staying on the same team',
		},
	]);

  
	return (
		<div className='App'>
			<h1>People invited to my Party</h1>
      <List people={people}/>
	  <AddToList people={people} setPeople={setPeople}/>
		</div>
	);
}

export default App;
