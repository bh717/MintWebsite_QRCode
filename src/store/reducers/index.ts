import {combineReducers} from "redux";
import App from "./App";
import Auth from "./Auth";

const reducers = combineReducers({
    auth: Auth,
    // app: App,
});

export default reducers;
