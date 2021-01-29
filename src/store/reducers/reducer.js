import { combineReducers } from 'redux';
import dataAPI from "./dataAPI";

const reducer = combineReducers({
    dataUser: dataAPI
});

export default reducer;