import axios from 'axios';

export const fetchPosts = () => dispatch => {
  dispatch({ type: 'FETCH_POSTS'})
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      dispatch({ type: 'FETCH_POSTS_FULFILLED', payload: response.data});
    })
    .catch(error => {
      dispatch({ type: 'FETCH_POSTS_REJECTED', payload: error})
    })
}