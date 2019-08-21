import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";

const initialState = {
    data:42
}

const TestReducer = (state = initialState,action) =>{
    switch(action.type){
        case INCREMENT_COUNTER:
            return {...state,data:state.data+1};
        case DECREMENT_COUNTER:
            return{...state,data:state.data-1};
        default:
            return state;
    }
}

export default TestReducer;