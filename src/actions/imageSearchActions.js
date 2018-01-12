import axios from 'axios';

export const searchImage = (searchInput, pageNo) => dispatch => {

    const client_id='de784466920c3122aa7aa9ba18f116e9f347517d2637262e6b4730173e49cfe8'

    dispatch({ type: 'FETCH_IMAGE'})
    axios.get('https://api.unsplash.com/search/photos/?client_id='+client_id+'&query='+searchInput+'&page='+pageNo)
      .then(response => {
        dispatch({ type: 'FETCH_IMAGE_FULFILLED', payload: response.data});
      })
      .catch(error => {
        dispatch({ type: 'FETCH_IMAGE_REJECTED', payload: error})
      })
  }