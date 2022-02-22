import React, { Component } from 'react';
import Message from './Message';
import People from './People';


class App extends Component {
	
	render() {
		return (
			<div>
				<People />
				<Message />
			</div>
		);
	}
}

export default App;