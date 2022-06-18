import { BrowserRouter,Routes,Route } from "react-router-dom";
import DesborAdmin from "../pages/Desbord-admin";
import Home from "../pages/Home";
import LoginAdmin from "../pages/Login-admin";
import SignUp from "../pages/SignUp";

const MyRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="dasbordAdmin" element={<DesborAdmin/>}/>
                <Route path="loginAdmin" element={<LoginAdmin/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes