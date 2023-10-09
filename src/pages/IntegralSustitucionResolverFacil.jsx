import {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import problemas from "../services/IntegralSustitucionFacilProblemas.js";
import {shuffleArray} from "../services/Services.js";

const problems = problemas;

export const IntegralSustitucionResolverFacil = () => {
    const [userProgress, setUserProgress] = useState({
        currentProblemIndex: 0,
        currentStep: 0,
        completed: false,
    });
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [correctAnswersHistory, setCorrectAnswersHistory] = useState([]);
    const [showNextStepButton, setShowNextStepButton] = useState(false);
    const [optionsDisabled, setOptionsDisabled] = useState(false);
    const [consejoVisible, setConsejoVisible] = useState(false);
    const [currentConsejo, setCurrentConsejo] = useState('');
    const [selectionMade, setSelectionMade] = useState(false);
    const [showResetButton, setShowResetButton] = useState(false);

    useEffect(() => {
        const currentProblem = problems[userProgress.currentProblemIndex];
        if (currentProblem && currentProblem[userProgress.currentStep]) {
            const shuffled = shuffleArray([
                currentProblem[userProgress.currentStep].correctOption,
                ...currentProblem[userProgress.currentStep].incorrectOptions
            ]);
            setShuffledOptions(shuffled);
        }
    }, [userProgress]);

    const currentProblem = problems[userProgress.currentProblemIndex];
    const currentStepData = currentProblem && currentProblem[userProgress.currentStep];
    const options = shuffledOptions;

    const handleOptionClick = (selectedOption) => {
        if (!selectionMade) {
            if (currentStepData && selectedOption === currentStepData.correctOption) {
                // Respuesta correcta
                toast.success('¡Respuesta correcta!', {
                    position: 'top-right',
                    autoClose: 2000,
                });

                // Almacenar tanto la imagen de la respuesta correcta como la imagen del problema
                setCorrectAnswersHistory([...correctAnswersHistory, currentStepData.problemImage, selectedOption]);

                // Mostrar el botón "Siguiente Paso" solo después de una respuesta correcta
                setShowNextStepButton(true);
            } else {
                // Respuesta incorrecta
                toast.error('Respuesta incorrecta', {
                    position: 'top-right',
                    autoClose: 2000,
                });

                // Mostrar el consejo correspondiente al paso actual
                setCurrentConsejo(currentStepData.consejo);
                setConsejoVisible(true);
                setShowResetButton(true);
            }

            // Bloquear las opciones después de la selección
            setOptionsDisabled(true);
            setSelectionMade(true);
        }
    };

    const handleNextStepClick = () => {
        setShowNextStepButton(false);
        setOptionsDisabled(false);
        setConsejoVisible(false);
        setCurrentConsejo('');
        setSelectionMade(false);
        setShowResetButton(false);


        if (userProgress.currentStep < currentProblem.length - 1) {
            setUserProgress({
                ...userProgress,
                currentStep: userProgress.currentStep + 1,
            });
        } else {
            if (userProgress.currentProblemIndex < problems.length - 1) {
                // Si hay más ejercicios en la lista, muestra "Siguiente Ejercicio"
                Swal.fire({
                    icon: 'success',
                    title: 'Felicitaciones',
                    text: 'Has completado el ejercicio correctamente.',
                    showCancelButton: true,
                    confirmButtonText: 'Siguiente Ejercicio',
                    cancelButtonText: 'Menu Principal',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setCorrectAnswersHistory([]);
                        setUserProgress({

                            currentProblemIndex: userProgress.currentProblemIndex + 1,
                            currentStep: 0,
                        });
                    } else {
                        // Redirigir a la página de inicio
                        window.location.href = '/';
                    }
                });
            } else {
                // Si es el último ejercicio en la lista, muestra "Regresar a Home"
                Swal.fire({
                    icon: 'success',
                    title: 'Felicitaciones',
                    text: 'Has completado todos los ejercicios correctamente.',
                    confirmButtonText: 'Ok',
                }).then(() => {
                    // Redirigir a la página de inicio
                    window.location.href = '/';
                });
            }
        }
    };

    const handleResetClick = () => {
        setUserProgress({
            currentProblemIndex: userProgress.currentProblemIndex,
            currentStep: 0,
            completed: false,
        });

        setCorrectAnswersHistory([]);
        setConsejoVisible(false);
        setCurrentConsejo('');

        setOptionsDisabled(false);
        setSelectionMade(false);
        setShowResetButton(false);
    };

    return (
        <div>
            <Container>
                <Row>
                    <h1 style={{marginBottom: '20px', color: 'white'}}>
                        Ejercicio {userProgress.currentProblemIndex + 1} de {problems.length}
                    </h1>
                    <Col md={6}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column', // Cambiar la dirección de la disposición a vertical
                                alignItems: 'center',
                                backgroundColor: '#132043',
                                borderRadius: '15px',
                                padding: '20px',
                                boxShadow: '0 0 10px #ccc',
                            }}
                        >
                            {currentStepData && currentStepData.problemImage && (
                                <img
                                    src={currentStepData.problemImage}
                                    alt="Problema"
                                    style={{
                                        width: '70%',
                                        height: 'auto', // Cambiar la altura a automático para que se ajuste proporcionalmente
                                        border: '2px solid #ccc',
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                        marginBottom: '20px',
                                    }}
                                />
                            )}
                            <span
                                style={{color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}
                            >
            Seleccione la respuesta
        </span>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleOptionClick(option)}
                                        style={{
                                            cursor: 'pointer',
                                            margin: '10px',
                                            textAlign: 'center',
                                            flexDirection: 'column',
                                            opacity: optionsDisabled ? 0.5 : 1,
                                            pointerEvents: optionsDisabled ? 'none' : 'auto',
                                        }}
                                    >
                                        <img
                                            src={option}
                                            alt={`Opción ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%', // Cambiar la altura a automático para que se ajuste proporcionalmente
                                                border: '2px solid #ccc',
                                                borderRadius: '8px',
                                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                                transition: 'transform 0.2s',
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>

                    <br/>
                    <Col
                        md={6}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'revert-layer-position',
                        }}
                    >
                        <div style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '15px',
                            boxShadow: '0 0 10px #ccc',
                            width: '100%', // Establece un ancho fijo
                            height: '500px', // Establece una altura fija
                            overflowY: 'auto', // Agrega desplazamiento vertical si es necesario
                        }}>
                            <h3>Procedimiento:</h3>
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {correctAnswersHistory.map((answer, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            flex: '0 0 calc(50% - 5px)',
                                            marginRight: '5px',
                                            marginBottom: '5px',
                                        }}
                                    >
                                        <img
                                            src={answer}
                                            alt={`Respuesta ${index + 1}`}
                                            style={{
                                                maxWidth: '60%',
                                                maxHeight: '70px',
                                                borderRadius: '8px',
                                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',

                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </Col>
                    <div style={{margin: '20px 0'}}></div>
                    {showNextStepButton && (
                        <Button variant="primary" onClick={handleNextStepClick}>
                            Siguiente Paso
                        </Button>
                    )}
                    {consejoVisible && (
                        <div
                            style={{
                                marginTop: '20px',
                                color: '#fff',
                            }}
                        >
                            <h3>Consejo:</h3>
                            <p>{currentConsejo}</p>
                            {showResetButton && (
                                <Button
                                    variant="danger"
                                    onClick={handleResetClick}
                                    style={{marginTop: '10px'}}
                                >
                                    Volver a intentar
                                </Button>
                            )}
                        </div>
                    )}
                </Row>
                <ToastContainer position="top-right" autoClose={2000}/>
            </Container>
        </div>
    );
};