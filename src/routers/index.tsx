import { BrowserRouter,Routes,Route } from "react-router-dom";
import DesborAdmin from "../pages/Desbord-admin";
import Home from "../pages/Home";
import LoginAdmin from "../pages/Login-admin";

const MyRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="dasbordAdmin" element={<DesborAdmin/>}/>
                <Route path="loginAdmin" element={<LoginAdmin/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes