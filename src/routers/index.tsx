import { BrowserRouter,Routes,Route } from "react-router-dom";
import DesborAdmin from "../pages/Desbord-admin";
import Home from "../pages/Home";
import LoginAdmin from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const MyRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="dasbordAdmin" element={<DesborAdmin/>}/>
                <Route path="loginAdmin" element={<LoginAdmin/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="signin" element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes