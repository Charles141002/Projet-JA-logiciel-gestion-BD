import React from 'react';
import Information from './information';
import root from '../index';
import App from '../App';


function Fiche (props) {
    console.log(props.entite);
    console.log(Object.entries(props.entite));
    return (
        <div>
        <div class="fiche">
            {Object.entries(props.entite).map((array) => <Information name={array[0]} value={array[1]}/>)}
            <button class="rounded-button" onClick={() => root.render(<App/>)}>Retour au menu</button>
            
        </div>
        </div>
    );
}



export default Fiche;