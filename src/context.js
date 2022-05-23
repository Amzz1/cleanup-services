import React, {useContext,useState} from "react";
import { createContext } from "react";

const AppContext = createContext()
const AppProvider = ({children}) =>{
    const [location,setLocation] = useState({})
    const [hover, setHover] = useState(true)
    const [isPanelLocationOpen,setIsPanelLocationOpen] = useState(false)
    const [isPanelServicesOpen,setIsPanelServicesOpen] = useState(false)
    const [isPanelResourcesOpen,setIsPanelResourcesOpen] = useState(false)
   return (
        <AppContext.Provider
        value={{
            location,
            setLocation,
            isPanelLocationOpen,
            setIsPanelLocationOpen,
            isPanelServicesOpen,
            setIsPanelServicesOpen,
            isPanelResourcesOpen,
            setIsPanelResourcesOpen

        }}
        >
            {children}
        </AppContext.Provider>)
}

const useGlobalContext = () =>{
   return  useContext(AppContext)
}
export{useGlobalContext, AppContext,AppProvider}