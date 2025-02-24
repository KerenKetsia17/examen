import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import './App.css';
import StudentList from './composants/StudentList';
import ClasseList from './composants/ClasseList';
import AddPage from './composants/AddPage'; 
import StudentForm from './composants/StudentForm'; 
import ClasseForm from './composants/ClasseForm';   

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>GESTION DES ÉTUDIANTS DE KAOLACK</h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/students">
                  <button className="nav-button">Voir les étudiants</button>
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <button className="nav-button">Voir les classes</button>
                </Link>
              </li>
              <li>
                <Link to="/add">
                  <button className="nav-button">Ajouter</button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <Routes> 
          <Route path="/students" element={<StudentList />} /> 
          <Route path="/classes" element={<ClasseList />} />
          <Route path="/add" element={<AddPage />} /> 
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/add-class" element={<ClasseForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
