import { combineReducers } from 'redux';
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const reducer = combineReducers({
    currentUser: userReducer,
    posts: postReducer
});

export default reducer;