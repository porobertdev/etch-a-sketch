import React, { createContext, useContext, useRef, useState } from 'react';

interface SketchContextType {
    colorRef: React.MutableRefObject<string>;
    updateColor: React.Dispatch<React.SetStateAction<string>>;
    lineWidthRef: React.MutableRefObject<number>;
    updateLineWidth: React.Dispatch<React.SetStateAction<number>>;
    isReset: boolean,
    setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const SketchContext = createContext<SketchContextType | null>(null);

const useColor = () => {
    const context = useContext(SketchContext);
    if (!context) {
        throw new Error('useColor must be used within a SketchContextProvider');
    }
    return context; // Now guaranteed to be non-null
};

const SketchContextProvider = ({ children }) => {
    console.log('RENDERING CONTEXT');
    const colorRef = useRef<string>('#869ef4');
    const lineWidthRef = useRef<number>(5);
    const [isReset, setIsReset] = useState<boolean>(false);

    const updateColor = (newColor) => {
        colorRef.current = newColor;
    };

    const updateLineWidth = (width) => {
        lineWidthRef.current = width;
    };

    return (
        <SketchContext.Provider
            value={{
                colorRef,
                updateColor,
                lineWidthRef,
                updateLineWidth,
                isReset,
                setIsReset,
            }}
        >
            {children}
        </SketchContext.Provider>
    );
};

export { SketchContextProvider, useColor };
