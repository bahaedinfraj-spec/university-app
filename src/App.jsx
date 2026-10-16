import React from 'react';

function App() {
  const etudiant = {
    nom: "exemple",
    prenom: "exemple",
    email: "exemple@exemple",
    telephone: "+216 12345678",
    filiere: "Génie Informatique",
    anneeEtude: "2ème année",
    groupe: "Groupe C",
    ville: "exemple"
  };

  return (
    <div style={{ backgroundColor: '#d6c267' }}>
      <h1 style={{ color: 'black' }}>Fiche Étudiant</h1>
      <img src='https://cegepstfe.ca/app/uploads/2024/11/Etudiant-un-jour_.jpg' width={200} height={200} style={{borderRadius: '50%'}} img/>
      <p style={{ color: 'black' }}><strong>Nom :</strong> {etudiant.nom}</p>
      <p style={{ color: 'black' }}><strong>Prénom :</strong> {etudiant.prenom}</p>
      <p style={{ color: 'black' }}><strong>Email :</strong> {etudiant.email}</p>
      <p style={{ color: 'black' }}><strong>Téléphone :</strong> {etudiant.telephone}</p>
      <p style={{ color: 'black' }}><strong>Filière :</strong> {etudiant.filiere}</p>
      <p style={{ color: 'black' }}><strong>Année d'étude :</strong> {etudiant.anneeEtude}</p>
      <p style={{ color: 'black' }}><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p style={{ color: 'black' }}><strong>Ville :</strong> {etudiant.ville}</p>
      <a href={`mailto:${etudiant.email}`} className="btn-contact">
          Contacter
      </a>
    </div>
  );
}

export default App;
