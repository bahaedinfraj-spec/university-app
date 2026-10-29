function StudentCard(props) {
  return (
    <div className="student-card">
      {/* Affichage de la photo */}
      <img src={props.photo} alt={`Photo de ${props.prenom}`} className="student-photo" />
      
      <h3>{props.prenom} {props.nom}</h3>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <button className="btn">contact</button>
    </div>
  );
}

export default StudentCard;