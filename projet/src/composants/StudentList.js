import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Liste des étudiants</h1>
            {students.map(student => (
        <li key={student.id}>
            <p><strong>Nom complet :</strong> {student.firstName} {student.lastName}</p>
            <p><strong>Email :</strong> {student.email}</p>
            <p><strong>Téléphone :</strong> {student.phoneNumber}</p>
            <p><strong>Numéro d'inscription :</strong> {student.registrationNumber}</p>
            <p><strong>Statut :</strong> {student.archive ? 'Archivé' : 'Actif'}</p>
        </li>
    ))}
        </div>
    );
};

export default StudentList;
