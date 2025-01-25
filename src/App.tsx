import React from 'react';
import SketchContainer from './components/SketchContainer';
import Toolbar from './components/Toolbar';
import { ColorContextProvider } from './contexts/ColorContext';
function App() {
    return (
        <main className="flex justify-center gap-10">
            <ColorContextProvider>
                <Toolbar />
                <div id="app" className="bg-light-purple w-[450px] h-[450px]">
                    <SketchContainer />
                </div>
            </ColorContextProvider>
        </main>
    );
}

export default App;
