import {createContext, useContext} from "react";

interface I_Context {
    
}

const _ContextTool = createContext<I_Context>({} as any)

export function _Context({children}:{children:JSX.Element}) {
    return <_ContextTool.Provider value={{
        
    }}>
        {children}
    </_ContextTool.Provider>
}

export const use_Context = () => useContext(_ContextTool)