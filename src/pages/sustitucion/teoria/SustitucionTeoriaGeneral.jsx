import {Link} from "react-router-dom";
import {SustitucionTeoria} from "../../../components/SustitucionTeoria.jsx";

export const  SustitucionTeoriaGeneral = () => {
    return (
        <>
            <SustitucionTeoria/>
            <Link to="/Integrales/Sustitucion/ejercicios">
                <button className="btn btn-primary">Comenzar</button>
            </Link>
        </>
    )
}