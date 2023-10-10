export const SustitucionTeoria = () => {

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const headerStyle = {
        fontSize: '24px',
        color: '#333',
    };

    const textStyle = {
        fontSize: '16px',
        color: 'black',
        textAlign: 'justify',
        marginTop: '20px',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        marginTop: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Integral por Sustitución - Teoría</h1>

            <p style={textStyle}>
                La sustitución es una técnica de integración que consiste en sustituir una expresión algebraica por otra, de tal forma que la integral se transforme en otra más sencilla de resolver.
            </p>

            <img src="public/images/img.png" alt="Sustitución" style={imageStyle} />
        </div>
    )
}