import { combineReducers } from "redux";
import TestReducer from "../features/testArea/TestReducer";
import EventReducer from "../features/events/EventReducer";

const rootReducer = combineReducers({
    test:TestReducer,
    events:EventReducer
})

export default rootReducer;