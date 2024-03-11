import { combineReducers } from "redux";
import { musicReducer } from "./music/musicReducer";
import { playReducer } from "./music/playReducer";



const rootReducer = combineReducers({
    musicReducer,
    playReducer
})

export default rootReducer