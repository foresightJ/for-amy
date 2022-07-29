// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Form from '../../components/Form/Form';
import Post from '../../components/Post/Post';

export default class App extends Component {
	state = {
		posts: [],
	};

	// function to fetch post from database and set them to state
	getPosts = async () => {
		await fetch('/api')
			.then((res) => res.json())
			.then((data) => this.setState({ posts: data }));
	};

	// component lifecycle method to ensure our components are first mounted before api calls are made
	componentDidMount() {
		this.getPosts();
	}
	render() {
		return (
			// <main className='App'>
			// 	<header className='App-header'>
			// 		{/* <img src={logo} className="App-logo" alt="logo" /> */}
			// 		<p>
			// 			{/* Edit <code>src/App.js</code> and save to reload. */}
			// 			Welcome to Friends of Ruby Anonymous Mesaging App
			// 		</p>
			// 		{/* <a
			// 			className='App-link'
			// 			href='https://reactjs.org'
			// 			target='_blank'
			// 			rel='noopener noreferrer'
			// 		>
			// 			Report Messages ananymously
			// 		</a> */}
			// 	</header>
			// </main>
			<div className='App'>
				{/* ternary operator to ensure that our api call returned a data otherwise we render a customised message */}
				{this.state.posts.length ? (
					this.state.posts.map((p) => (
						<Post post={p} getPosts={this.getPosts} />
					))
				) : (
					<h1>NO Posts</h1>
				)}
				<Form getPosts={this.getPosts} />
			</div>
		);
	}
}

// export default App;

