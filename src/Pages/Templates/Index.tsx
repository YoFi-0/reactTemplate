import "./styles.css";
import {_Context} from "./Context"
import { ApiContext } from "../../Components/ApiContext";
import { MainConetxt } from "../../Components/MainContext";
export default function() {
    return(
        <MainConetxt>
            <ApiContext>
                <_Context>
                    <_></_>
                </_Context>
            </ApiContext>
        </MainConetxt>
    )
}

function _() {
    return (
        <>
            <h1>_</h1>
        </>
    )
}