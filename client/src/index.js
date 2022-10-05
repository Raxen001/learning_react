import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './index.css';
import Add from './Add';
import Home from './Home';
//import { BrowserRouter as Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div className="ReactApp">
        <Router>
            <nav className="Navbar">
                <li><Link to={"./Home"}>HOME</Link></li>
                <li><Link to={"./Add"}>Add</Link></li>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/add" element={<Add />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    </div>
);
