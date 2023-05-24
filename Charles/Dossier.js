import { useState } from "react";
import {useEffect } from 'react';
import Reseau from "./Fiche_reseau";
import Fiche from "./Fiche";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

library.add(faBuilding);


function Dossier(props){
    console.log(props);
    const isDossier = (props.class == "reseau");
    const [open, setOpen] = useState(false);
    const grouped = groupBy(props.datas[(isDossier ? 1 : 0)], isDossier ? "Reseau" : "Entreprise");
    const { count, setCount } = props.customHook;


    console.log('groupe ', grouped[props.nom]);
        return (
            <div className={(isDossier ? "" : "sous-") + "dossier"} >
                <div class="bloc-titre-deroulant" onDoubleClick={() => setOpen(!(open))} onClick={() => setCount(3)}>
                    <h1>{props.nom}</h1>
                    <h1 onClick={() => setOpen(!(open))}>{(open ? "^": "<" )}</h1>
                </div>
                {(open && (!isDossier) && grouped[props.nom]) && grouped[props.nom].map(elt => 
                    <div className="bloc-titre-deroulant">
                        <p>{elt.Nom} {elt.Prenom}</p>
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
        setCount(2);
    }, []);
  
    return { count, setCount };
  }

  export function FenetreGauche(props){

    const { count, setCount } = props.customHook;
    console.log('FENETRE_GAUCHE', count);

    return(

        <div>
            {count}
        </div>
    )

  }

export default Dossier;