import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Welcome from './components/welcome/welcome';
import WorkspaceInfo from './components/workspaceInfo/workspaceInfo';
import Planstep from './components/planstep/planstep';
import Finalstep from './components/final/final'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    <Routes>
        <Route exact path="/workspace" element={<WorkspaceInfo />} />
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/plan" element={<Planstep />} />
        <Route exact path="/final" element={<Finalstep />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

