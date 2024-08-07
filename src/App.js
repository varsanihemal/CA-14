import React from 'react';
import Info from './components/HemalInfo';
import Work from './components/Work';
import TechList from './components/TechList';
import DeveloperSetup from './components/DeveloperSetup';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Portfolio</h1>
            </header>
            <main className="container">
                <Info />
                <Work />
                <TechList />
                <DeveloperSetup />
            </main>
            <footer>
                <p>©Hemal Varsani</p>
            </footer>
        </div>
    );
}

export default App;
