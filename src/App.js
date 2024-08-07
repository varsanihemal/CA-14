import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import TechList from './pages/TechList';
import DeveloperSetup from './pages/DeveloperSetup';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <Navbar />
                    <h1>Portfolio</h1>
                </header>
                <main className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/tech-list" element={<TechList />} />
                        <Route path="/developer-setup" element={<DeveloperSetup />} />
                    </Routes>
                </main>
                <footer>
                    <p>© Hemal Varsani</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
