import { Login, Logout } from "../actions/actionsTypes";


const initialState = { isLoggedIn: false };

//cambiar por ternario
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return { ...state, isLoggedIn: true };

    case Logout:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};

export default loginReducer;
