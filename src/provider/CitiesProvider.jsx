import { createContext, useEffect, useState } from "react";

export const CitiesContext = createContext();

const CitiesProvider = ({children}) => {
    const [cities, setCities] = useState([]);

    const [loader, setLoader] = useState(false);
    
    return (
        <CitiesContext.Provider value={{cities, setCities, loader, setLoader}}>
            {children}
        </CitiesContext.Provider>
    )
}

export default CitiesProvider