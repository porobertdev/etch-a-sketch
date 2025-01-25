import { useState } from 'react';
import SketchContainer from './components/SketchContainer';
import Toolbar from './components/Toolbar';
import React from 'react';

/**
 * Root component that manages the global color state
 * Re-renders occur when:
 * 1. selectedColor state changes (via ColorPicker)
 * 
 * State flow:
 * - selectedColor flows down to both Toolbar and SketchContainer
 * - setSelectedColor is passed to Toolbar -> ColorPicker for color updates
 */
function App() {
    // Global state for the currently selected color
    // This is the single source of truth for the drawing color
    const [selectedColor, setSelectedColor] = useState('#ffe0c3');
    console.log("ROOT APP COMPONENT RENDERED")

    return (
        <main className="flex justify-center gap-10 pt-10">
            <Toolbar
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <div id="app" className="bg-light-purple w-[450px] h-[450px]">
                <SketchContainer selectedColor={selectedColor} />
            </div>
        </main>
    );
}

export default App;