import {createContext, useContext} from "react";

interface IApiContext {
    
}

const ApiContextTool = createContext<IApiContext>({} as any)

export function ApiContext({children}:{children:JSX.Element}) {
    return <ApiContextTool.Provider value={{
        
    }}>
        {children}
    </ApiContextTool.Provider>
}

export const useApiContext = () => useContext(ApiContextTool)