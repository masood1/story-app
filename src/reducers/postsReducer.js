const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
}

export default (state = initialState, action) => {
	// eslint-disable-next-line
  switch(action.type) {
		case 'FETCH_POSTS' : {
			return {
				...state,
				fetching: true
			 }
		}
		case 'FETCH_POSTS_FULFILLED' : {
			return {
				...state,
        fetching: false,
        fetched: true,
				data: action.payload
			}
		}
		case 'FETCH_POSTS_REJECTED' : {
			return {
				...state,
				fetching: false,
				error: action.payload
			}
		}
	}
	return state
}