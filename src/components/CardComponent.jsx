import PropTypes from 'prop-types';
export const CardComponent = ({ imageUrl, cardTitle }) => {
    const rowStyle = {
        height: '100%',
        width: '100%',
        margin: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px #ccc',
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        flexFlow: 'row wrap',
        gap: '1rem',
    }

    const imageStyle = {
        objectPosition: 'center',
        objectFit: 'cover',

    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card" style={rowStyle}>
                <h5 className="card-title">{cardTitle}</h5>
                <img src={imageUrl} className="card-img-top" alt="..." style={imageStyle}/>
            </div>
        </div>
    );
}
CardComponent.propTypes = {
    imageUrl: PropTypes.string.isRequired, // Assuming imageUrl is a string and is required
    cardTitle: PropTypes.string.isRequired, // Assuming cardTitle is a string and is required
};