import React from 'react';
import ColorPicker from './components/ColorPicker';
import SketchContainer from './components/SketchContainer';
import Toolbar from './components/Toolbar';
import { ColorContextProvider } from './contexts/ColorContext';

function App() {
    return (
        <main>
            <div id="app" className="flex justify-center gap-10">
                <ColorContextProvider>
                    <Toolbar>
                        <ColorPicker />
                    </Toolbar>
                    <SketchContainer />
                </ColorContextProvider>
            </div>
        </main>
    );
}

export default App;
