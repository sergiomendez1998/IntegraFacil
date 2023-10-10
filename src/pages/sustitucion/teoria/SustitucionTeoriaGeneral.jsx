import {Link} from "react-router-dom";
import {SustitucionTeoria} from "../../../components/SustitucionTeoria";
import {useState} from "react";

export const  SustitucionTeoriaGeneral = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
    };

    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovered ? '#0069d9' : '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        marginTop: '20px',
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <div style={containerStyle}>

            <SustitucionTeoria />
            <Link to="/Integrales/Sustitucion/ejercicios">
                <button
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Comenzar
                </button>
            </Link>
        </div>
    );
}