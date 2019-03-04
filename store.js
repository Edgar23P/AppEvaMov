import { createStore, combineReducers } from "redux";
import storage from "redux-persist/es/storage";
import NavigationReducer from "./src/reducers/navigationReducer";
import loginReducer from "./src/reducers/loginReducer";
import {persistReducer
} from "redux-persist";

// config to not persist the *counterString* of the CounterReducer's slice of the global state.

const config1 = {
  key: "primary",
  storage
};

// Object of all the reducers for redux-persist
const reducer = {
  NavigationReducer,
  loginReducer
};

// This will persist all the reducers, but I don't want to persist navigation state, so instead will use persistReducer.
// const rootReducer = persistCombineReducers(config, reducer)

// We are only persisting the counterReducer and loginRducer
const LoginReducer = persistReducer(config1, loginReducer);

// combineReducer applied on persisted(counterReducer) and NavigationReducer
const rootReducer = combineReducers({
  NavigationReducer,
  LoginReducer
});

//
function configureStore() {
  let store = createStore(rootReducer);
  return { store };
}

export default configureStore;
