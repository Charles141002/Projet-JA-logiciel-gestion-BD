import React, { useState } from 'react';
import FicheClient from './Charles/Fiche_client';
import FicheEntreprise from './Charles/Fiche_entreprise';
import FicheReseau from './Charles/Fiche_reseau';
import RechercheFicheClient from './Charles/Recherche_fiche_client';
import * as XLSX from 'xlsx';
import RechercheFicheEntreprise from './Charles/Recherche_fiche_entreprise';
import RechercheFicheReseau from './Charles/Recherche_fiche_reseau';
import ExportationExcel from './Charles/Exportation_excel';
import TableauFicheClient from './Charles/Tableau_fiche_client';
import TableauFicheEntreprise from './Charles/Tableau_fiche_entreprise';
import TableauFicheReseau from './Charles/Tableau_fiche_reseau';

import Menu from './Charles/Menu_deroulant';

function App() {
  const file = XLSX.readFile('src/fichier_excel/Classeur1.xlsx');
  const sheets = [0,1,2].map(key => file.Sheets[file.SheetNames[key]]);
  const datas = sheets.map(sheet => XLSX.utils.sheet_to_json(sheet));
  const worksheet = file.Sheets[file.SheetNames[0]];
  const worksheet1 = file.Sheets[file.SheetNames[1]];
  const worksheet2 = file.Sheets[file.SheetNames[2]];


  const data = XLSX.utils.sheet_to_json(worksheet);
  const data1 = XLSX.utils.sheet_to_json(worksheet1);
  const data2 = XLSX.utils.sheet_to_json(worksheet2);


  const [activePage, setActivePage] = useState('');

  const handleClick = (page) => {
    setActivePage(page);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'ficheClient':
        return <FicheClient />;
      case 'ficheEntreprise':
        return <FicheEntreprise />;
      case 'ficheReseau':
        return <FicheReseau />;
      case 'rechercheFicheClient':
        return <RechercheFicheClient donnees={data}/>;
      case 'rechercheFicheEntreprise':
        return <RechercheFicheEntreprise donnees={data1}/>;
      case 'rechercheFicheReseau':
        return <RechercheFicheReseau donnees={data2}/>;
      case 'exporterExcel':
        return <ExportationExcel/>
      case 'tableauFicheClient':
        return <TableauFicheClient donnees={data}/>
      case 'tableauFicheEntreprise':
        return <TableauFicheEntreprise donnees={data1}/>
      case 'tableauFicheReseau':
        return <TableauFicheReseau donnees={data2}/>
      case 'afficherMenu':
        return <Menu />
      default:
        return null;
    }
  };

  return (

      <div className="container">
        <div className="menu">
          <button onClick={() => handleClick('ficheClient')}>Ajout Fiche Client</button>
          <Menu datas={datas} />
          <button onClick={() => handleClick('ficheEntreprise')}>Ajout Fiche Entreprise</button>
          <button onClick={() => handleClick('ficheReseau')}>Ajout Fiche Reseau</button>
          <button onClick={() => handleClick('rechercheFicheClient')}>Rechercher une fiche Client</button>
          <button onClick={() => handleClick('rechercheFicheEntreprise')}>Rechercher une fiche Entreprise</button>
          <button onClick={() => handleClick('rechercheFicheReseau')}>Rechercher une fiche Reseau</button>
          <button onClick={() => handleClick('tableauFicheClient')}>Tableau Fiche Client</button>
          <button onClick={() => handleClick('tableauFicheEntreprise')}>Tableau Fiche Entreprise</button>
          <button onClick={() => handleClick('tableauFicheReseau')}>Tableau Fiche Reseau</button>
          <button onClick={() => handleClick('exporterExcel')}>Exporter Fichier Excel</button>
          <button onClick={() => handleClick('afficherMenu')}>Afficher Menu</button>

        </div>
        <div className="content">{renderActivePage()}</div>
      </div>
    );
  
  

}

export default App;