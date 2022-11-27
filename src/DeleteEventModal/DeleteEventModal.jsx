import React from 'react';

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return(
    <>
      <div id="deleteEventModal">
        <h2>RDV prévu</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="deleteButton">Supprimer</button>
        <button onClick={onClose} id="closeButton">Fermer</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
