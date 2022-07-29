import React, { Component } from 'react';

export default class Form extends Component {
	state = {
		content: '',
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div>
				Form
				<textarea
					name='content'
					value={this.state.content}
					onChange={this.handleChange}
					id=''
					cols='30'
					rows='10'
				></textarea>
				<button onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}
