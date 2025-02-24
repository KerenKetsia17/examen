// AddPage.js (Page de sélection)
import React from 'react';
import { Link } from "react-router-dom";

function AddPage() {
  return (
    <div>
      <h2>Choisissez ce que vous souhaitez ajouter</h2>
      <ul>
        <li>
          <Link to="/add-student">
            <button>Ajouter un étudiant</button>
          </Link>
        </li>
        <li>
          <Link to="/add-class">
            <button>Ajouter une classe</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AddPage;
