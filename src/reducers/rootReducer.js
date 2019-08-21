import { combineReducers } from "redux";
import TestReducer from "../features/testArea/TestReducer";

const rootReducer = combineReducers({
    test:TestReducer
})

export default rootReducer;