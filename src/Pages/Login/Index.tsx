import "./styles.css";
import {LoginContext} from "./Context"
import { ApiContext } from "../../Components/ApiContext";
import { MainConetxt } from "../../Components/MainContext";
export default function() {
    return(
        <MainConetxt>
            <ApiContext>
                <LoginContext>
                    <Login></Login>
                </LoginContext>
            </ApiContext>
        </MainConetxt>
    )
}

function Login() {
    return (
        <>
            <h1>Login</h1>
        </>
    )
}