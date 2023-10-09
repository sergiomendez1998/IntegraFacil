import {Link} from "react-router-dom";

export const  IntegralBasicaTeoria = () => {
    return (
        <>
            <div className="container">
                <h1 className="header">Integral Básica - Teoría</h1>
            </div>
            <Link to="/Integrales/Basica/inicio">
                <button className="btn btn-primary">Comenzar</button>
            </Link>

        </>
    )
}