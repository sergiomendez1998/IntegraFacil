import {Link} from "react-router-dom";

export const  IntegralSustitucionTeoria = () => {
    return (
        <>
            <div className="container">
                <h1 className="header">Integral Sustitucion - Teoría</h1>
            </div>
            <Link to="/Integrales/sustitucion/facil">
                <button className="btn btn-primary">Comenzar</button>
            </Link>

        </>
    )
}