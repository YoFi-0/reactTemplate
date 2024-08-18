import {createContext, useContext} from "react";

interface IHomeContext {
    
}

const HomeContextTool = createContext<IHomeContext>({} as any)

export function HomeContext({children}:{children:JSX.Element}) {
    return <HomeContextTool.Provider value={{
        
    }}>
        {children}
    </HomeContextTool.Provider>
}

export const useHomeContext = () => useContext(HomeContextTool)