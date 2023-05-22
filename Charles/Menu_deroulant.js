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
    const grouped = groupBy(props.datas[1], 'Reseau');
    console.log('Dossier', props)

    const [open, setOpen] = useState(false);
    
    if (props.class == "reseau") {
        return (
            <div class="dossier" onDoubleClick={() => setOpen(!(open))}>
                <div style={{display: 'flex',}}>
                    <h1>{props.nom}</h1>
                    
                </div>
                
                {open && grouped[props.nom].map(elt => <p>{elt.Nom}</p>)}
            </div>
        );
    }
    
}


  

export default Menu;