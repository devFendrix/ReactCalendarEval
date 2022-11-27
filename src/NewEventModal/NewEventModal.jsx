import React, { useState } from 'react';

export const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  return(
    <>
      <div id="newEventModal">
        <h2>Nouvelle entrée</h2>

        <input 
          className={error ? 'error' : ''}
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          id="eventTitleInput" 
          placeholder="Nom RDV"
        />

        <button 
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }} 
          id="saveButton">Ajouter</button>


        <button 
          onClick={onClose}
          id="cancelButton">Retour</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
