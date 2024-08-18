import "./styles.css";
import {RegisterContext} from "./Context"
import { ApiContext } from "../../Components/ApiContext";
import { MainConetxt } from "../../Components/MainContext";
export default function() {
    return(
        <MainConetxt>
            <ApiContext>
                <RegisterContext>
                    <Register></Register>
                </RegisterContext>
            </ApiContext>
        </MainConetxt>
    )
}

function Register() {
    return (
        <>
            <h1>Register</h1>
        </>
    )
}