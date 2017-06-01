import React from 'react';
import Photo from './Photo';
import Comments from './Comments';


class Single extends React.Component{
	render() {
		const {postId} = this.props.params;

		// index of the post
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[i];

		const postComments = this.props.comments[postId] || [];

		return (
			<div>
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props} />
			</div>
		)
	}
};

export default Single;