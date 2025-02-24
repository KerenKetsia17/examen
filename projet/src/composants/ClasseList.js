import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClasseList = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/api/classes') 
            .then(response => setClasses(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Liste des classes</h1>
            <ul>
                {classes.map(classItem => (
                    <li key={classItem.id}>
                        <p><strong>Nom de la classe :</strong> {classItem.name}</p>
                        <p><strong>Description :</strong> {classItem.description}</p>
                        <p><strong>Statut :</strong> {classItem.archive ? 'Archivée' : 'Active'}</p>
                    </li>                ))}
            </ul>
        </div>
    );
};

export default ClasseList;
