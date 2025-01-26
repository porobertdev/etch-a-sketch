import React, { createContext, useContext, useRef } from 'react';

interface ColorContextType {
    colorRef: React.MutableRefObject<string>;
    updateColor: React.Dispatch<React.SetStateAction<string>>;
    lineWidthRef: React.MutableRefObject<number>;
    updateLineWidth: React.Dispatch<React.SetStateAction<number>>;
}

const ColorContext = createContext<ColorContextType | null>(null);

const useColor = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useColor must be used within a ColorContextProvider');
    }
    return context; // Now guaranteed to be non-null
};

const ColorContextProvider = ({ children }) => {
    console.log('RENDERING CONTEXT');
    const colorRef = useRef<string>('#ffe0c3');
    const lineWidthRef = useRef<number>(5);

    const updateColor = (newColor) => {
        colorRef.current = newColor;
    };

    const updateLineWidth = (width) => {
        lineWidthRef.current = width;
    };

    return (
        <ColorContext.Provider
            value={{ colorRef, updateColor, lineWidthRef, updateLineWidth }}
        >
            {children}
        </ColorContext.Provider>
    );
};

export { ColorContextProvider, ColorContextType, useColor };
