import "./styles.css";
import {HomeContext} from "./Context"
import { ApiContext } from "../../Components/ApiContext";
import { MainConetxt } from "../../Components/MainContext";
import { Link } from "react-router-dom";
export default function() {
    return(
        <MainConetxt>
            <ApiContext>
                <HomeContext>
                    <Home></Home>
                </HomeContext>
            </ApiContext>
        </MainConetxt>
    )
}

function Home() {
    return (
        <>
            <div>
                <Link to={"/login"}>Login</Link>
            </div>
            <div>
                <Link to={"/register"}>register</Link>
            </div>
            
        </>
    )
}