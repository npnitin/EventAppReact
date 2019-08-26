import { combineReducers } from "redux";
import TestReducer from "../features/testArea/TestReducer";
import EventReducer from "../features/events/EventReducer";
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    test:TestReducer,
    events:EventReducer,
    form:FormReducer
})

export default rootReducer;