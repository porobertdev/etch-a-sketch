import { useColor } from '../contexts/ColorContext';

type CanvaType = HTMLCanvasElement;
type CanvaContextType = CanvasRenderingContext2D;

const useSketchboard = () => {
    console.log('[useSketchBoard] - RENDERING...');
    const { color } = useColor();

    let canva: CanvaType;
    let ctx: CanvaContextType | null; // ref: https://stackoverflow.com/a/68212560

    const coords = { x: 0, y: 0 };
    let isDrawing = false;

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
        console.log('START DRAWING');

        isDrawing = true;
        if (!canva) {
            canva = event.target as CanvaType;
            ctx = canva.getContext('2d');
        }

        updateMouseCoords(event);
    };

    const stopDrawing = () => {
        console.log('STOP DRAWING');
        // setIsDrawing(false);
        isDrawing = false;
    };

    const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!isDrawing) return;

        console.log('[DRAWING] - [COORDINATES]', coords.x, coords.y);

        if (ctx) {
            // draw
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = color; // #ACD3ED
            ctx.moveTo(coords.x, coords.y);
            updateMouseCoords(event);
            ctx.lineTo(coords.x, coords.y);
            ctx.stroke();
            // ctx.closePath();
        }
    };

    return { startDrawing, stopDrawing, draw };
};

export default useSketchboard;
