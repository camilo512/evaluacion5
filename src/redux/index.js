const INITIAL_STATE = {
// 8. llevar datos del imput a redux. crear estado o nueva propiedad
userName: ""
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
        // 9. llevar datos del imput a redux. crear un action, crear un case, ir a login al submit

        case "GET_USERNAME":
            return  {
                ...state,
                userName: action.payload
            }

    default:
	    return state;
  }
}

export default reducer;