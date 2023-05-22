import { useEffect } from 'react';
import {useState} from 'react';
import PetiteFicheClient from './Petite_fiche_client.js';

function TableauFicheReseau(donnees) {


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

      const RechercheFichePrenom = (e) => {
        e.preventDefault();
  
          const RechercheData = document.getElementById('recherche-prenom').value;
          const fichesTrouvees = [];
        
          for (let i = 0; i < donnees.donnees.length; i++) {
            const ligne = donnees.donnees[i];
            if (RechercheData === Object.entries(ligne)[1][1]) {
              fichesTrouvees.push(ligne);
            }
          }
          setTableauFiches(fichesTrouvees);
        };

      useEffect(() => {
        const fichesTrouvees = donnees.donnees;
        setTableauFiches(fichesTrouvees);
      }, []);

  
      return (
        <div>
            <div>
              <form class="fiche-recherche">
                <div>
                  <input type="text" id="recherche-nom" placeholder="Nom..." />
                  <p class="newline"></p>
                  <button class="rounded-button" onClick={RechercheFicheNom}>N</button>
                </div>
                <div>
                  <input type="text" id="recherche-prenom" placeholder="Nom..." />
                  <p class="newline"></p>
                  <button class="rounded-button" onClick={RechercheFichePrenom}>P</button>
                </div>
                <div>
                  <input type="text" id="recherche-genre" placeholder="Nom..." />
                  <p class="newline"></p>
                  <button class="rounded-button" onClick={RechercheFicheNom}>G</button>
                </div>
                <div>
                  <input type="text" id="recherche-societe" placeholder="Nom..." />
                  <p class="newline"></p>
                  <button class="rounded-button" onClick={RechercheFicheNom}>S</button>
                </div>
                <div>
                  <input type="text" id="recherche-poste" placeholder="Nom..." />
                  <p class="newline"></p>
                  <button class="rounded-button" onClick={RechercheFicheNom}>P</button>
                </div>
                <div>
                  <input type="text" id="recherche-telephone" placeholder="Nom..." />
                  <p class="newline"></p>
                  <button class="rounded-button" onClick={RechercheFicheNom}>T</button>
                </div>
                <div>
                  <input type="text" id="recherche-mail" placeholder="Nom..." />
                  <p class="newline"></p>
                  <button class="rounded-button" onClick={RechercheFicheNom}>M</button>
                </div>
              </form>
            </div>
    
          {tableauFiches.map((fiche, index) => (
            <PetiteFicheClient key={index} entite={fiche} />
          ))}
        </div>
      );
    }
  

export default TableauFicheReseau;