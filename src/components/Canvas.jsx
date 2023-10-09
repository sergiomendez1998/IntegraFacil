import {useEffect, useRef, useState} from "react";
import brushIcon from '/public/icons/brush.svg';
import eraserIcon from '/public/icons/eraser.svg';

export const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [selectedTool, setSelectedTool] = useState('brush');
    const [brushWidth, setBrushWidth] = useState(5);
    const [selectedColor, setSelectedColor] = useState('#000');
    const [snapshot, setSnapshot] = useState(null);

const changeSelectedColor = (color) => {
        setSelectedColor(color);
}

    const startDraw = (e) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.lineWidth = brushWidth;
        ctx.strokeStyle = selectedColor;
        ctx.fillStyle = selectedColor;

        const snapshotData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setSnapshot(snapshotData);

        const offsetX = e.nativeEvent.offsetX;
        const offsetY = e.nativeEvent.offsetY;

        ctx.moveTo(offsetX, offsetY);
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };


    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        setCanvasBackground(); // Call the function here
    }, []);

    const setCanvasBackground = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawing = (e) => {
        if (!isDrawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.putImageData(snapshot, 0, 0);

        if (selectedTool === 'brush' || selectedTool === 'eraser') {
            ctx.strokeStyle = selectedTool === 'eraser' ? '#fff' : selectedColor;
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.stroke();
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setCanvasBackground();
    };


    return (
        <>

        <div className="container">
            <section className="tools-board">
                <label className="title">Herramientas</label>
            <div className="row">
                <div className="options">
                    <ul className="options-list">
                        <li
                            className={`option active tool ${selectedTool === 'brush' ? 'active' : ''}`}
                            id="brush"
                            onClick={() => setSelectedTool('brush')}
                        >
                            <img src={brushIcon} alt="Lapiz" /><span>Lapiz</span>
                        </li>

                        <li
                            className={`option tool ${selectedTool === 'eraser' ? 'active' : ''}`}
                            id="eraser"
                            onClick={() => setSelectedTool('eraser')}
                        >
                            <img src={eraserIcon} alt="Borrar" /><span>Borrar</span>
                        </li>

                        <li className="option">
                            <input
                                type="range"
                                id="size-slider"
                                min="1"
                                max="30"
                                value={brushWidth}
                                onChange={(e) => setBrushWidth(parseInt(e.target.value, 10))}
                            />
                        </li>
                    </ul>
                </div>
            </div>


                <div className="row colors">
                    <label className="title">Color del lapiz</label>
                    <ul className="options">
                        <li
                            className="option"
                            style={{ backgroundColor: "black" }}
                            onClick={() => changeSelectedColor("black")} // Cambia el color a negro
                        ></li>
                        <li
                            className="option"
                            style={{ backgroundColor: "green" }}
                            onClick={() => changeSelectedColor("green")} // Cambia el color a verde
                        ></li>
                        <input
                            type="color"
                            id="color-picker"
                            value={selectedColor}
                            onChange={(e) => changeSelectedColor(e.target.value)}
                        />
                    </ul>
                </div>

                <div className="row buttons">
                    <button className="clear-canvas" onClick={clearCanvas}>
                        Limpiar
                    </button>
                </div>

            </section>

            <section className="drawing-board">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDraw}
                    onMouseMove={drawing}
                    onMouseUp={() => setIsDrawing(false)}
                />
            </section>

        </div>
        </>
    );
};
