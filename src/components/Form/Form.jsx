import React, { Component } from 'react';

export default class Form extends Component {
	state = {
		content: '',
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async () => {
		// First we build the body
		let body = { content: this.state.content };
		// we need an options object for our fetch call
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		// Now for the fetch call
		await fetch('/api', options)
			.then((res) => res.json())
			.then((data) => {
				// call our getPosts function to get fresh data
				this.props.getPosts();
				// clear out this.state.content
				this.setState({ content: '' });
			});
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
