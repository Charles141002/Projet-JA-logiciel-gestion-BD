import App from '../App';
import { useState } from 'react';
import root from '../index';
import Fiche from './Fiche';

function RechercheFicheEntreprise(donnees) {
    console.log(Object.entries(donnees));
    const [tableauFiches, setTableauFiches] = useState([]);
  
    const RechercheFicheNom = (e) => {
      e.preventDefault();
      const RechercheData = document.getElementById('recherche-nom').value;
      const fichesTrouvees = [];
  
      for (let i = 0; i < donnees.donnees.length; i++) {
        const ligne = donnees.donnees[i];
        if (RechercheData === Object.entries(ligne)[0][1]) {
          fichesTrouvees.push(ligne);
        }
      }
  
      setTableauFiches(fichesTrouvees);
    };
  
    return (
      <div>
        <form class="fiche">
          <input type="text" id="recherche-nom" placeholder="Nom..." />
          <p class="newline"></p>
          <button class="rounded-button" onClick={RechercheFicheNom}>
            Rechercher
          </button>
          <p class="newline">
            <button
              class="rounded-button"
              onClick={() => root.render(<App/>)}
            >
              Retourner au menu
            </button>
          </p>
        </form>
  
        {tableauFiches.map((fiche, index) => (
          <Fiche key={index} entite={fiche} />
        ))}
      </div>
    );
  }
  
  export default RechercheFicheEntreprise;
  
