import React, { useEffect } from 'react';
import useSketchboard from '../hooks/useSketchboard';

const SketchContainer = () => {
    console.log('[SketchContainer] - RENDERING...');
    const { startDrawing, stopDrawing, draw } = useSketchboard();

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
        canva.width = 450;
        canva.height = 450;
    });

    return (
        <canvas
            id="sketchBoard"
            className="bg-white shadow-custom border-[3px] border-solid border-black"
            onMouseDown={(e) => startDrawing(e)}
            onMouseUp={stopDrawing}
            onMouseMove={(e) => draw(e)}
        ></canvas>
    );
};

export default SketchContainer;
