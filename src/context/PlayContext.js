import { createContext, useState } from "react";



const player = createContext()

const PlayContext = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState()
    return(
        <player.Provider value={{currentTrack,setCurrentTrack}}>
            {children}
        </player.Provider>
    )
}

export {PlayContext, player}