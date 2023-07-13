import {Routes,Route} from "react-router-dom";
import { Home } from "../page/Home/Home";

export function RouteDetails(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </>
    )
}