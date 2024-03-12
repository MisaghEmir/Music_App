import { combineReducers } from "redux";
import { musicReducer } from "./music/musicReducer";
import { playReducer } from "./music/playReducer";
import { trackReducer } from "./music/trackReducer";



const rootReducer = combineReducers({
    musicReducer,
    playReducer,
    trackReducer
})

export default rootReducer