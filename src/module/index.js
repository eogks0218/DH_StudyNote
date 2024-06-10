import { combineReducers } from "redux";
import { authentication } from "./authentication";
import { post } from "./post";
import { write } from "./write";
import { sample } from "./sample";

const rootReducer = combineReducers({
    authentication,
    post,
    write,
    sample
});

export default rootReducer;