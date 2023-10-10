export const BasicaTeoria = () => {

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


    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Integral Basica - Teoría</h1>

            <p style={textStyle}>
                Las integrales son la herramienta para calcular «El área bajo la curva» como lo describen en ingeniería, se trata pues del espacio comprendido entre el tramo de recta real delimitado por dos puntos y los dos puntos perfectamente paralelos de la curva que está siendo estudiada. Al unir estos cuatro puntos se forma un área cerrada, gráficamente es esa una integral de una función.
                Las derivadas básicas son llamadas así porque generalmente se obtienen directamente de la tabla de derivadas o haciendo algunos arreglos algebraicos básicos sin necesitar de usar técnicas de integración.
            </p>

        </div>
    )
}