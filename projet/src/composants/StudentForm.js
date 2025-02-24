import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [classe, setClasse] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/classes')  // Charge les classes disponibles
      .then(response => setClasses(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      firstName,
      lastName,
      email,
      phoneNumber,
      registrationNumber,
      classe,
      archive: false
    };
    // Ajouter l'étudiant avec les valeurs du formulaire
    console.log(student);
  };

  return (
    <div>
      <h2>Ajouter un Étudiant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prénom :
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Nom :
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Numéro de téléphone :
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Numéro d'inscription :
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </label>
        <label>
          Classe :
          <select
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          >
            <option value="">Sélectionner une classe</option>
            {classes.map((classeItem) => (
              <option key={classeItem.id} value={classeItem.id}>
                {classeItem.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default StudentForm;
