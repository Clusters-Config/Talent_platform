import { combineReducers } from "redux";
import pageReducer from "../features/pagination/page.reducer";


const rootReducer = combineReducers({
    pages: pageReducer
});

export default rootReducer;