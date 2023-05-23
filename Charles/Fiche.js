import React, { useState } from 'react';
import Information from './Information';
import workbook from '../fichier_excel/export_excel';
import root from '../index';
import App from '../App';
import * as XLSX from 'xlsx';


function Fiche (props) {
    console.log(props);
    console.log(props.entite);
    console.log(Object.entries(props.entite));
    const worksheet = workbook.Sheets['Clients'];

    const handleSubmit = (event) => {
        event.preventDefault();

        const newData = [Object.entries(props.entite).map((array) => document.getElementById(array[0]).value)];
        console.log('newData', newData)
        XLSX.utils.sheet_add_aoa(worksheet, newData, { origin: props.entite.__rowNum__});
        XLSX.writeFile(workbook, 'src/fichier_excel/Classeur1.xlsx');
        
    }
    return (
        
        <div class="fiche">
            <form class="fiche-modifiable" onSubmit={handleSubmit}>
                {Object.entries(props.entite).map((array) => <Information name={array[0]} value={array[1]} line={props.entite.__rowNum__}/>)}
                <input type='submit' value='Sauvegarder' />
            </form>
            <button class="rounded-button" onClick={() => root.render(<App/>)}>Retour au menu</button>
        </div>
        
    );
}




export default Fiche; 