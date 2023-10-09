import {HashRouter, Route, Routes} from "react-router-dom";
import {NavBarApp} from "../components/NavBarApp.jsx";
import {HomePage} from "../pages/HomePage.jsx";
import {IntegralSustitucionResolver} from "../pages/sustitucion/IntegralSustitucionResolver.jsx";
import {SustitucionTeoriaGeneral} from "../pages/sustitucion/teoria/SustitucionTeoriaGeneral.jsx";

export const AppRoutes = () => {
    return (
        <>
            <HashRouter>
                <NavBarApp/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Integrales/sustitucion/teoria" element={<SustitucionTeoriaGeneral/>} />
                    <Route path="/Integrales/Sustitucion/ejercicios" element={<IntegralSustitucionResolver/>} />
                </Routes>
            </HashRouter>
          </>
    )
}