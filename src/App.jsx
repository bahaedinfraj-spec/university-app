import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';
import StudentImg from './assets/OIP.webp'; // N'oubliez pas de préciser l'extension (.jpg ou .png)
import './App.css';

function App() {
  // Liste des étudiants avec l'image ajoutée à chacun
  const etudiants = [
    {
      id: 1,
      prenom: "exemmple1",
      nom: "exemmple1",
      email: "exemmple1@exemmple1",
      telephone: "+216 12345678",
      filiere: "GLSI 2",
      photo: StudentImg
    },
    {
      id: 2,
      prenom: "exemmple2",
      nom: "exemmple2",
      email: "exemmple2@exemmple2",
      telephone: "+216 12345678",
      filiere: "GLSI 2",
      photo: StudentImg
    },
    {
      id: 3,
      prenom: "exemmple3",
      nom: "exemmple3",
      email: "exemmple3@exemmple3",
      telephone: "+216 12345678",
      filiere: "GLSI 2",
      photo: StudentImg
    }
  ];

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main className="content">
        <h2>Liste des étudiants</h2>
        <div className="cards-grid">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              photo={etudiant.photo}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;