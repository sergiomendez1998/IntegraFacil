import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const problems = [
    [
        {
            problemImage: 'public/images/img_1.png',
            options: ['public/images/img_2.png', 'public/images/img_3.png', 'public/images/img_4.png'],
            correctOption: 1,
            consejo: 'Paso1: Recuerda revisar cuidadosamente el problema y calcular las opciones posibles en este paso.',
        },
        {
            problemImage: 'public/images/img_1.png',
            options: ['public/images/img_5.png', 'public/images/img_6.png', 'public/images/img_4.png'],
            correctOption: 2,
            consejo: 'Paso2: Para este paso, considera las propiedades matemáticas relevantes.',
        },
    ],
    // Otros ejercicios pueden ir aquí
];

export const IntegralBasicaResolver = () => {
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
            setShuffledOptions(shuffleArray(currentProblem[userProgress.currentStep].options));
        }
    }, [userProgress]);

    const currentProblem = problems[userProgress.currentProblemIndex];
    const currentStepData = currentProblem && currentProblem[userProgress.currentStep];
    const options = shuffledOptions;

    const handleOptionClick = (index) => {
        if (!selectionMade) {
            if (currentStepData && index === currentStepData.correctOption) {
                // Respuesta correcta
                toast.success('¡Respuesta correcta!', {
                    position: 'top-right',
                    autoClose: 2000,
                });
                setCorrectAnswersHistory([...correctAnswersHistory, currentStepData.options[index]]);

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
        setShowResetButton(false); // Ocultar el botón de reinicio

        if (userProgress.currentStep < currentProblem.length - 1) {
            setUserProgress({
                ...userProgress,
                currentStep: userProgress.currentStep + 1,
            });
        } else {
            if (userProgress.currentProblemIndex < problems.length - 1) {
                setUserProgress({
                    currentProblemIndex: userProgress.currentProblemIndex + 1,
                    currentStep: 0,
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Felicitaciones',
                    text: 'Has completado el ejercicio correctamente.',
                }).then(() => {
                    window.location.href = '/';
                });
            }
        }
    };

    const handleResetClick = () => {
        // Reiniciar el progreso del usuario
        setUserProgress({
            currentProblemIndex: 0,
            currentStep: 0,
            completed: false,
        });

        // Limpiar historial de respuestas y consejos
        setCorrectAnswersHistory([]);
        setConsejoVisible(false);
        setCurrentConsejo('');

        // Desbloquear las opciones
        setOptionsDisabled(false);
        setSelectionMade(false);

        // Ocultar el botón de reinicio
        setShowResetButton(false);
    };

    return (
        <div>
            <Container>
                <Row>
                    <h1 style={{ marginBottom: '20px', color: 'white' }}>
                        Ejercicio {userProgress.currentProblemIndex + 1} de {problems.length}
                    </h1>
                    <Col md={6}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
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
                                        width: '100%',
                                        maxWidth: '200px',
                                        border: '2px solid #ccc',
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                        marginBottom: '20px',
                                    }}
                                />
                            )}
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <span
                                    style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}
                                >
                                    Seleccione la respuesta
                                </span>
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleOptionClick(index)}
                                        style={{
                                            cursor: 'pointer',
                                            margin: '10px',
                                            textAlign: 'center',
                                            opacity: optionsDisabled ? 0.5 : 1,
                                            pointerEvents: optionsDisabled ? 'none' : 'auto',
                                        }}
                                    >
                                        <img
                                            src={option}
                                            alt={`Opción ${index}`}
                                            style={{
                                                width: '100px',
                                                height: '100px',
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
                    <br />
                    <Col
                        md={6}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <div>
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
                                            flex: '0 0 calc(33.33% - 10px)',
                                            marginRight: '10px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <img
                                            src={answer}
                                            alt={`Respuesta ${index + 1}`}
                                            style={{ width: '100px', height: '100px' }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <div style={{ margin: '20px 0' }}></div>
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
                                    style={{ marginTop: '10px' }}
                                >
                                    Volver a intentar
                                </Button>
                            )}
                        </div>
                    )}
                </Row>
                <ToastContainer position="top-right" autoClose={2000} />
            </Container>
        </div>
    );
};
