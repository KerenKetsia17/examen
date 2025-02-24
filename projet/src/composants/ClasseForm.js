// import React, { useState } from 'react';

// const ClasseForm = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [archive, setArchive] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const classe = {
//       name,
//       description,
//       archive
//     };
//     console.log(classe);
//   };

//   return (
//     <div>
//       <h2>Ajouter une Classe</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nom de la classe :
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <label>
//           Description :
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <label>
//           Archiver :
//           <input
//             type="checkbox"
//             checked={archive}
//             onChange={(e) => setArchive(e.target.checked)}
//           />
//         </label>
//         <button type="submit">Ajouter</button>
//       </form>
//     </div>
//   );
// };

// export default ClasseForm;


import React, { useState } from 'react';

const ClasseForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [archive, setArchive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const classe = {
      name,
      description,
      archive,
    };

    try {
      const response = await fetch('http://localhost:8082/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(classe),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Classe ajoutée :', result);
        // Réinitialiser le formulaire
        setName('');
        setDescription('');
        setArchive(false);
      } else {
        console.error('Erreur lors de l\'ajout de la classe');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
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
            required
          />
        </label>
        <label>
          Description :
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
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
