import { useRef } from 'react';
import { useColor } from '../contexts/SketchContext';

type CanvaType = HTMLCanvasElement;
type CanvaContextType = CanvasRenderingContext2D;

const useSketchboard = () => {
    console.log('[useSketchBoard] - RENDERING...');
    const { colorRef, lineWidthRef } = useColor();
    const isDrawing = useRef(false);

    let canva: CanvaType;
    let ctx: CanvaContextType | null; // ref: https://stackoverflow.com/a/68212560

    const coords = { x: 0, y: 0 };

    const toggleIsDrawing = (drawing) => (isDrawing.current = !drawing);

    // TS type REF: https://stackoverflow.com/a/44764395
    const updateMouseCoords = (event: React.MouseEvent) => {
        if (canva) {
            coords.x = event.clientX - canva.offsetLeft;
            coords.y = event.clientY - canva.offsetTop;

            console.log('NEW COORDS:', { ...coords });
        }
    };

    const startDrawing = (
        event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
    ) => {
        console.log('🚀 ~ useSketchboard ~ event:', event);
        console.log('START DRAWING');

        isDrawing.current = true;

        if (!canva) {
            canva =
                typeof event.target === 'string'
                    ? (document.getElementById('sketchBoard') as CanvaType)
                    : (event.target as CanvaType);
            console.log('🚀 ~ useSketchboard ~ canva:', canva);
            ctx = canva.getContext('2d');
        }

        updateMouseCoords(
            event.clientX
                ? { clientX: event.clientX, clientY: event.clientY }
                : event
        );
    };

    const stopDrawing = () => {
        console.log('STOP DRAWING');
        // setIsDrawing(false);
        // toggleIsDrawing(isDrawing.current);
        isDrawing.current = false;
    };

    const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        console.log('🚀 ~ draw ~ isDrawing:', isDrawing);
        if (!isDrawing.current) return;

        // updateMouseCoords(event);

        console.log('[DRAWING] - [COORDINATES]', coords.x, coords.y);

        console.log('🚀 ~ draw ~ ctx:', ctx);
        if (ctx) {
            console.log(
                '🚀 ~ draw ~ lineWidthRef:',
                lineWidthRef.current,
                colorRef.current
            );
            // draw
            ctx.beginPath();
            console.log('🚀 ~ draw ~ lineWidthRef:', lineWidthRef);
            ctx.lineWidth = lineWidthRef.current;
            ctx.lineCap = 'round';
            ctx.strokeStyle = colorRef.current; // #ACD3ED
            ctx.moveTo(coords.x, coords.y);
            updateMouseCoords(event);
            ctx.lineTo(coords.x, coords.y);
            ctx.stroke();
            // ctx.closePath();
        }
    };

    return {
        isDrawing,
        startDrawing,
        stopDrawing,
        draw,
    };
};

export default useSketchboard;
