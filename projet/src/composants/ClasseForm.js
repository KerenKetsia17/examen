import React, { useState } from 'react';

const ClasseForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [archive, setArchive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const classe = {
      name,
      description,
      archive
    };
    // Ajouter la classe avec les valeurs du formulaire
    console.log(classe);
  };

  return (
    <div>
      <h2>Ajouter une Classe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom de la classe :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description :
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Archiver :
          <input
            type="checkbox"
            checked={archive}
            onChange={(e) => setArchive(e.target.checked)}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ClasseForm;
