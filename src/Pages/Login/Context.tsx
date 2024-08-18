import {createContext, useContext} from "react";

interface ILoginContext {
    
}

const LoginContextTool = createContext<ILoginContext>({} as any)

export function LoginContext({children}:{children:JSX.Element}) {
    return <LoginContextTool.Provider value={{
        
    }}>
        {children}
    </LoginContextTool.Provider>
}

export const useLoginContext = () => useContext(LoginContextTool)