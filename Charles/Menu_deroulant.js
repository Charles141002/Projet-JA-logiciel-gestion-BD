import { useState } from "react";
import Reseau from "./Fiche_reseau";


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



function Menu(props){
    console.log('Menu :', props)
    return (
        
        <div id="menu-deroulant">
            {props.datas[2].map(elt => <Dossier nom={elt.Nom} datas={props.datas} class="reseau" />)}
        </div>

    );
}


function Dossier(props){
    const isDossier = (props.class == "reseau");
    const [open, setOpen] = useState(false);
    const grouped = groupBy(props.datas[(isDossier ? 1 : 0)], isDossier ? "Reseau" : "Entreprise");

    console.log('groupe ', grouped[props.nom]);
        return (
            <div class={(isDossier ? "" : "sous-") + "dossier"} >
                <div class="bloc-titre-deroulant" onDoubleClick={() => setOpen(!(open))}>
                    <h1>{props.nom}</h1>
                    <h1 onClick={() => setOpen(!(open))}>{(open ? "^": "<" )}</h1>
                </div>
                {(open && (!isDossier) && grouped[props.nom]) && grouped[props.nom].map(elt => <div class="bloc-titre-deroulant"><p>{elt.Nom} {elt.Prenom}</p></div>)}
                {(open && isDossier && grouped[props.nom]) && grouped[props.nom].map(elt => <Dossier nom={elt.Nom} datas={props.datas} class="entreprise" />)}
            </div>
        );
    
    
}


  

export default Menu;