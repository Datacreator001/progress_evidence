import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions" //using courseActions from "../../redux/actions/courseActions"
import PropTypes from "prop-types"
class CoursesPage extends Component {
	state = {
		course: {
			title: '',
		},
	};
//Arrow functions auto binds and recognizes the class instance
	handleChange = (event) => {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course });
	};
// You have to dispatch an action. Action creators just return an object
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(courseActions.createCourse(this.state.course)) // since im using courseActions I can use the createCourse action creator
		
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
				{this.props.courses.map(course =>(
					<div key={course.title}>{course.title}</div> // Keys help React track each array element
				))}
			</form>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	dispatch : PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {
		courses: state.courses, // be specific about the data your component uses
	};
}

export default connect(mapStateToProps)(CoursesPage);  //connect auto passes dispatch in if we omit mapDispatchToProps here
