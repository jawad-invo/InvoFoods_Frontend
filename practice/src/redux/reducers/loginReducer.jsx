// Reducer
let initValue = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
const loginReducer = (state = initValue, action) => {
    switch (action.type) {
      case "SAVELOGINDATA":
        return state = action.payload;
        case "ADD_SUBSCRIBER":
            console.log("REDUCERDATA ==== " , action );
            return state = {
                ...state,
                Subscriber: action.payload
            };
      default:
        return state;
    }
  };

  export default loginReducer;
  