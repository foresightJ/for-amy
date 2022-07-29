import React from 'react';

export default function Post(props) {
	return (
		<div className='post'>
			Post
			<p className='title'>{props.post._id}</p>
			<p className='title'>{props.post.content}</p>
		</div>
	);
}
