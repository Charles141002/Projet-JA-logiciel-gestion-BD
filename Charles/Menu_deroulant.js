import { useState } from "react";
import Dossier from "./Dossier";





function Menu(props){
    console.log('Menu :', props)
    return (

        <div id="menu-deroulant">
            {props.datas[2].map(elt => <Dossier nom={elt.Nom} datas={props.datas} class="reseau"/>)}
        </div>
        
    );
}




  

export default Menu;