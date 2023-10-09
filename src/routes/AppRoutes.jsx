import {HashRouter, Route, Routes} from "react-router-dom";
import {NavBarApp} from "../components/NavBarApp.jsx";
import {HomePage} from "../pages/HomePage.jsx";
import {IntegralBasicaTeoria} from "../pages/IntegralBasicaTeoria.jsx";
import {IntegralBasicaResolver} from "../pages/IntegralBasicaResolver.jsx";
import {IntegralSustitucionTeoria} from "../pages/IntegralSustitucionTeoria.jsx";
import {IntegralSustitucionResolverFacil} from "../pages/IntegralSustitucionResolverFacil.jsx";

export const AppRoutes = () => {
    return (
        <>
            <HashRouter>
                <NavBarApp/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Integrales/Basica/teoria" element={<IntegralBasicaTeoria/>} />
                    <Route path="/Integrales/Basica/inicio" element={<IntegralBasicaResolver/>} />

                    <Route path="/Integrales/sustitucion/teoria" element={<IntegralSustitucionTeoria/>} />
                    <Route path="/Integrales/sustitucion/facil" element={<IntegralSustitucionResolverFacil/>} />
                </Routes>
            </HashRouter>
          </>
    )
}