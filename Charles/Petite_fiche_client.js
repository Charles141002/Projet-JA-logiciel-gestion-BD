import React from 'react';
import Information from './Information';

function PetiteFicheClient (props) {
    console.log(props.entite);
    console.log(Object.entries(props.entite));
    return (
        <div>
        <div class="fiche-petite">
            {Object.entries(props.entite).map((array) => <Information name={array[0]} value={array[1]}/>)}            
        </div>
        </div>
    );
}



export default PetiteFicheClient;