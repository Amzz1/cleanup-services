import React, {useContext,useState} from "react";
import { createContext } from "react";

const AppContext = createContext()
const AppProvider = ({children}) =>{
    const [location,setLocation] = useState({})
    const [hover, setHover] = useState(true)
    const [isPanelLocationOpen,setIsPanelLocationOpen] = useState(false)
    const [isPanelServicesOpen,setIsPanelServicesOpen] = useState(false)
    const [isPanelResourcesOpen,setIsPanelResourcesOpen] = useState(false)
    const [bedroom,setBedroom] = useState(1)
    const [other,setOther] = useState(1)
    const [bathroom,setBathroom] = useState(1)
    const [laundry,setLaundry] = useState(1)
    const [balcony,setBalcony] = useState(1)
    const [garage,setGarage] = useState(1)
    const [sideMenu,setSideMenu] = useState(false)
    const subtotal = (bedroom*80)+(other*75)+(bathroom*70)+ (laundry*55)+(balcony*65)+(garage*150)
    const discount = subtotal/100*10
    const total = subtotal-discount
    
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
            setIsPanelResourcesOpen,
            bedroom,
            setBedroom,
            other,
            setOther,
            bathroom,
            setBathroom,
            laundry,
            setLaundry,
            balcony,
            setBalcony,
            garage,
            setGarage
            ,subtotal,
            discount,
            total,
            sideMenu,
            setSideMenu

        }}
        >
            {children}
        </AppContext.Provider>)
}

const useGlobalContext = () =>{
   return  useContext(AppContext)
}
export{useGlobalContext, AppContext,AppProvider}