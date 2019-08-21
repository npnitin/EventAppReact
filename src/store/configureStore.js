import { createStore } from "redux";
import TestReducer from "../features/testArea/TestReducer";
export const configureStore = () => {

    const store = createStore(TestReducer)
    return store;
}

