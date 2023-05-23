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
import workbook from './fichier_excel/export_excel';

import Menu from './Charles/Menu_deroulant';
import BarreRecherche from './Charles/Barre_de_recherche';
import Fiche from './Charles/Fiche';

function App() {
  
  const sheets = [0,1,2].map(key => workbook.Sheets[workbook.SheetNames[key]]);
  const datas = sheets.map(sheet => XLSX.utils.sheet_to_json(sheet));
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const worksheet1 = workbook.Sheets[workbook.SheetNames[1]];
  const worksheet2 = workbook.Sheets[workbook.SheetNames[2]];


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
      case 'afficherBarreRecherche':
        return <BarreRecherche donnees={datas}/>
      case 'afficherFiche':
        return <Fiche entite={data[0]}/>
      default:
        return null;
    }
  };

  return (

      <div className="container">
        <div className="menu">
          <button onClick={() => handleClick('afficherBarreRecherche')}>Afficher Barre de Recherche</button>
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
          <button onClick={() => handleClick('afficherFiche')}>Afficher Fiche</button>
        </div>
        <div className="content">
          {renderActivePage()}
        </div>
      </div>
    );
  
  

}

export default App;

