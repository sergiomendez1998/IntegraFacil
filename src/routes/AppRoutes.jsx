import {HashRouter, Route, Routes} from "react-router-dom";
import {NavBarApp} from "../components/NavBarApp";
import {HomePage} from "../pages/HomePage";
import {IntegralSustitucionResolver} from "../pages/sustitucion/IntegralSustitucionResolver";
import {SustitucionTeoriaGeneral} from "../pages/sustitucion/teoria/SustitucionTeoriaGeneral";
import {IntegralBasicaTeoria} from "../pages/basica/IntegralBasicaTeoria";
import {IntegralBasicaResolver} from "../pages/basica/IntegralBasicaResolver";

export const AppRoutes = () => {
    return (
        <>
            <HashRouter>
                <NavBarApp/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Integrales/Basica/teoria" element={<IntegralBasicaTeoria/>} />
                    <Route path="/Integrales/Basica/inicio" element={<IntegralBasicaResolver/>} />


                    <Route path="/Integrales/sustitucion/teoria" element={<SustitucionTeoriaGeneral/>} />
                    <Route path="/Integrales/Sustitucion/ejercicios" element={<IntegralSustitucionResolver/>} />
                </Routes>
            </HashRouter>
          </>
    )
}