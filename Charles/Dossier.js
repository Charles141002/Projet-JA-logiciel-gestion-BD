import { useState } from "react";
import {useEffect } from 'react';
import Reseau from "./Fiche_reseau";
import Fiche from "./Fiche";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, library } from '@fortawesome/fontawesome-svg-core';

import { faBuilding, faAngleLeft, faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';


import BarreRecherche from "./Barre_de_recherche";
import workbook from "../fichier_excel/export_excel";
import * as XLSX from 'xlsx';


library.add(faBuilding, faAngleDown, faAngleLeft, faUser);



function Dossier(props){
    console.log(props);
    const isDossier = (props.class == "reseau");
    const [open, setOpen] = useState(false);
    const grouped = groupBy(props.datas[(isDossier ? 1 : 0)], isDossier ? "Reseau" : "Entreprise");
    const { count, setCount } = props.customHook;
    let icone = (!(isDossier) && < FontAwesomeIcon icon="building"/>)

    console.log('groupe ', grouped[props.nom]);
        return (
            <div className={(isDossier ? "" : "sous-") + "dossier"} >

                <div class="bloc-titre-deroulant" onDoubleClick={() => setOpen(!(open))} onClick={() => setCount(Object.entries(props.datas)[0][1][0])}>
                    
                    <h1> {icone} {props.nom}</h1>
                  
                    <h1 onClick={() => setOpen(!(open))}>{(open ? <FontAwesomeIcon icon="angle-down"/>: <FontAwesomeIcon icon="angle-left"/> )}</h1>
                </div>
                {(open && (!isDossier) && grouped[props.nom]) && grouped[props.nom].map(elt => 
                    
                    <div className="bloc-titre-deroulant">
                        <p> <FontAwesomeIcon icon="user"/> {elt.Nom} {elt.Prenom}</p>

                
                    
                    </div>
                )}
                {(open && isDossier && grouped[props.nom]) && grouped[props.nom].map(elt => <Dossier nom={elt.Nom} datas={props.datas} class="entreprise" customHook={props.customHook}/>)}
            </div>
        );
    
    
}


function groupBy(array, key) {
    return array.reduce((result, obj) => {
      const value = obj[key];
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push(obj);
      return result;
    }, {});
  }


  export function useCustomHook() {
    const [count, setCount] = useState(0);
    console.log('HOOOOOOOK')
    useEffect(() => {
        setCount(0);
    }, []);
  
    return { count, setCount };
  }

  export function FenetreGauche(props){

    const { count, setCount } = props.customHook;
    console.log('FENETRE_GAUCHE', Object.entries(count));
    const sheets = [0,1,2].map(key => workbook.Sheets[workbook.SheetNames[key]]);
    const datas = sheets.map(sheet => XLSX.utils.sheet_to_json(sheet));

    return(

        <div>
            {count &&  <Fiche entite={count}/>}
            {!count && <BarreRecherche donnees= {datas}/>}
        </div>
    )

  }

export default Dossier;