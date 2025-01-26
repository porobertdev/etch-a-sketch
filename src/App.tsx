import React from 'react';
import SketchContainer from './components/SketchContainer';
import Toolbar from './components/Toolbar';
import { ColorContextProvider } from './contexts/SketchContext';

function App() {
    return (
        <main>
            <div id="app" className="flex justify-center gap-10">
                <ColorContextProvider>
                    <Toolbar />
                    <SketchContainer />
                </ColorContextProvider>
            </div>
        </main>
    );
}

export default App;
