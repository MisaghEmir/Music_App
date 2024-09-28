import { combineReducers } from "redux";
import { musicReducer } from "./music/musicReducer";
import { playReducer } from "./music/playReducer";
import { trackReducer } from "./music/trackReducer";
import { listReducer } from "./music/listReducer";
import { playlistReducer } from "./music/playlistReducer";
import { showPlayer } from "./music/showPlayer";




const rootReducer = combineReducers({
    musicReducer,
    playReducer,
    trackReducer,
    listReducer,
    playlistReducer,
    showPlayer
})

export default rootReducer