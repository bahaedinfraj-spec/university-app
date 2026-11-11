import { useState } from "react";

function StudentCard(props) {
  const [visibilite, setVisibilite] = useState(false);

  
  function Toggle() {
    setVisibilite(!visibilite);
  }

  return (
    <div className="student-card">
      
      <img src={props.photo} alt={`Photo de ${props.prenom}`} className="student-photo" />
      <button onClick={Toggle}>afficher/Masquer</button>
      
      <h3>{props.prenom} {props.nom}</h3>
      {visibilite && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
          <p><strong>Filière :</strong> {props.filiere}</p>
        </>
      )}
      
      <button className="btn">contact</button>
      <button onClick={() => props.onDelete(props.id)}>supprimer</button>
    </div>
  );
}

export default StudentCard;