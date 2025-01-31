import React, { useEffect } from 'react';
import { useColor } from '../contexts/SketchContext';
import useSketchboard from '../hooks/useSketchboard';
import useWebSocket from '../hooks/useWebSocket';
import stringifyEvent from '../utils/stringifyEvent';

const SketchContainer = () => {
    console.log('[SketchContainer] - RENDERING...');
    const { isDrawing, startDrawing, stopDrawing, draw } = useSketchboard();
    const { colorRef, lineWidthRef } = useColor();
    console.log('🚀 ~ SketchContainer ~ colorRef:', colorRef);

    const webSocket = useWebSocket();
    // const { colorRef, lineWidthRef } = useColor();

    useEffect(() => {
        console.log('[useEffect] - [SketchContainer] - RENDERING...');
        /*
        define it as HTMLCanvasElement because the implicit HTMLElement
        doesn't have width/height props.

        TS-Error: Property 'height' does not exist on type 'HTMLElement'.
        */
        const canva = document.getElementById(
            'sketchBoard'
        ) as HTMLCanvasElement;

        /*
        set size with JS because there's misaligned starting position
        when its changed with CSS.
        */
        canva.width = 900;
        canva.height = window.innerHeight - window.screenY;
    });

    return (
        <canvas
            id="sketchBoard"
            className="bg-white shadow-custom border-[3px] border-solid border-black"
            onMouseDown={(e) => startDrawing(e)}
            onMouseUp={stopDrawing}
            onMouseMove={(e) => {
                if (isDrawing.current) {
                    draw(e);
                    const obj = {
                        ...stringifyEvent(e),
                        color: colorRef.current,
                        lineWidth: lineWidthRef.current,
                    };
                    webSocket.send(JSON.stringify(obj, null, 2));
                }
            }}
        ></canvas>
    );
};

export default SketchContainer;
