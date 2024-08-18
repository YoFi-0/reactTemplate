import {createContext, useContext, useEffect} from "react";
import { ProjectWindow } from "./Window";

interface IMainContext {
    
}

const MainContextTool = createContext<IMainContext>({} as any)

export function MainConetxt({children}:{children:JSX.Element}) {
    useEffect(() => {
        ProjectWindow.RunOnLoad();
        ProjectWindow.RunOnResize();
    })
    return <MainContextTool.Provider value={{
        
    }}>
        {children}
    </MainContextTool.Provider>
}

export const useMainContext = () => useContext(MainContextTool)