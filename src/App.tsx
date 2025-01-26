import React from 'react';
import SketchContainer from './components/SketchContainer';
import Toolbar from './components/Toolbar';
import { SketchContextProvider } from './contexts/SketchContext';

function App() {
    return (
        <main>
            <div id="app" className="flex gap-10">
                <SketchContextProvider>
                    <Toolbar />
                    <SketchContainer />
                </SketchContextProvider>
            </div>
        </main>
    );
}

export default App;
