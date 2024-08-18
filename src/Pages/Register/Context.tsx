import {createContext, useContext} from "react";

interface IRegisterContext {
    
}

const RegisterContextTool = createContext<IRegisterContext>({} as any)

export function RegisterContext({children}:{children:JSX.Element}) {
    return <RegisterContextTool.Provider value={{
        
    }}>
        {children}
    </RegisterContextTool.Provider>
}

export const useRegisterContext = () => useContext(RegisterContextTool)