// takes in -- 1. the action; 2. copy of current state

function posts(state = [], action) {

	switch(action.type) {
		case 'INCREMENT_LIKES' :
			console.log("Incrementing Likes!!");
			const i = action.index;
			return [
				...state.slice(0,i), // before we update
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1), // after we update
			]
		default:
		return state;
	}
}

export default posts;