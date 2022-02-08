import React, { Component } from 'react';

class CoursesPage extends Component {
	state = {
		course: {
			title: '',
		},
	};

	handleChange = (event) => {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course });
	};
	render() {
		return (
			<form action=''>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input
					type='text'
					// .bind binds "this" keyword to the handlechange function to the class instance
					// onChange={this.handleChange.bind(this)}
					onChange={this.handleChange}
					value={this.state.course.title}
				/>
				<input type='submit' value='Save' />
			</form>
		);
	}
}

export default CoursesPage;
