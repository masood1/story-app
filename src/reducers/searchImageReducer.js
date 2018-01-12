const initialState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
  }
  
  export default (state = initialState, action) => {
      // eslint-disable-next-line
    switch(action.type) {
          case 'FETCH_IMAGE' : {
              return {
                  ...state,
                  fetching: true
               }
          }
          case 'FETCH_IMAGE_FULFILLED' : {
              return {
                  ...state,
          fetching: false,
          fetched: true,
                  data: action.payload.results
              }
          }
          case 'FETCH_IMAGE_REJECTED' : {
              return {
                  ...state,
                  fetching: false,
                  error: action.payload
              }
          }
      }
      return state
  }