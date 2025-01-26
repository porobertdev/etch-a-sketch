import React, { createContext, useContext, useState } from 'react';

interface ColorContextType {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
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
    const [color, setColor] = useState<string>('#ffe0c3');
    console.log('RENDERING CONTEXT');

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
};

export { ColorContextProvider, ColorContextType, useColor };
