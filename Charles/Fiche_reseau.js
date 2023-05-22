import '../App.css'
import App from '../App'
import * as XLSX from 'xlsx'
import React from 'react'
import { createRoot } from 'react-dom/client';

function Reseau () {
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);

  const addDataToExcelFile = (e) => {
    // Lire le fichier Excel existant
    e.preventDefault();
    const workbook = XLSX.readFile('src/fichier_excel/Classeur1.xlsx');
    
    
    // Sélectionner la feuille de calcul sur laquelle vous souhaitez ajouter des données
    const worksheet = workbook.Sheets['Reseaux'];

    // Ajouter les nouvelles données à la feuille de calcul
    const newData = [
      [
      document.getElementById('nom').value,
      document.getElementById('prenom').value,
      document.getElementById('genre').value,
      document.getElementById('societe').value,
      document.getElementById('poste').value,
      document.getElementById('telephone').value,
      document.getElementById('mail').value
    ]
    ];
    const range = XLSX.utils.sheet_add_aoa(worksheet, newData, { origin: -1 });

    // Enregistrer les modifications sur le même fichier Excel
    XLSX.writeFile(workbook, 'src/fichier_excel/Classeur1.xlsx');
    root.render(<App />)
  };

    return (
    <div>
      <h1>Ajouter un nouveau Reseau</h1>
      <form name="nouveau_client" onSubmit={addDataToExcelFile}>
        <div class="form-group">
          <label for="genre">Genre:</label>
          <select id="genre" name="genre">
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div class="form-group">
          <label for="nom">Nom :</label>
          <input type="text" id="nom" name="nom"/>
        </div>
        <div class="form-group">
          <label for="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom"/>
        </div>
        <div class="form-group">
          <label for="societe">Société :</label>
          <input type="text" id="societe" name="societe"/>
        </div>
        <div class="form-group">
          <label for="poste">Poste :</label>
          <input type="text" id="poste" name="poste"/>
        </div>
        <div class="form-group">
          <label for="telephone">Telephone :</label>
          <input type="tel" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"required id="telephone" name="telephone"/>
        </div>
        <div class="form-group">
          <label for="mail">Mail :</label>
          <input type="email" id="mail" name="mail"/>
        </div>
        <button class="rounded-button" type="submit" >Enregistrer</button>
        <p class="new-line"></p>
        <button class="rounded-button" onClick={() => root.render(<App/>)}>Retour au menu</button>
      </form>
    </div>
    );

}

export default Reseau;