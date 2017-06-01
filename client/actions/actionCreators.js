// increment

export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment

export function addComment(postId, author, comment) {
	console.log("Dispatching add comment");
	return {
		type: 'ADD_COMMENT',
		postId, 
		author, 
		comment
	}
}

// remove comment

export function removeComment(postId, i) { // у какого поста какой по счету коммент
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}