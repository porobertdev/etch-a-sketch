import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext(null);

const useColor = () => useContext(ColorContext);

const ColorContextProvider = ({ children }) => {
    const [color, setColor] = useState('#ffe0c3');

    // const changeColor = (color) => setColor(color);

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
};

export { ColorContextProvider, useColor };
