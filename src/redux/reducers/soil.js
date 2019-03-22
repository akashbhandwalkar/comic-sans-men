const initialState = {
   moisture: null,
   text: null
}

const soilReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case 'DUMMY_ACTION':
            return {
                ...state,
                text: action.payload
            }
            break;
            
      default:
        return state
    }
}

export default soilReducer;