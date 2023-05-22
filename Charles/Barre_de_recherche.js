import {useState} from 'react';
import {useEffect} from 'react';
import PetiteFicheClient from './Petite_fiche_client';

function BarreRecherche (donnees) {

    const [tableauFiches, setTableauFiches] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const optionTemp = [];
    
        for (let k = 0; k < donnees.donnees.length; k++) {
          for (let i = 0; i < donnees.donnees[k].length; i++) {
            const ligne = donnees.donnees[k][i];
    
            for (let j = 0; j < Object.entries(ligne).length; j++) {
                if (!optionTemp.includes(Object.entries(ligne)[j][1])){
              optionTemp.push(Object.entries(ligne)[j][1]);
                }
            }
          }
        }
    
        setOptions(optionTemp);
      }, [donnees.donnees]);
        console.log(options);
    
    const FindObject = (e) => {

        e.preventDefault();

        const RechercheData = document.getElementById('recherche-nom').value;
        const fichesTrouvees = [];
        const optionTemp = [];

        for ( let k =0; k < donnees.donnees.length; k++){

            for (let i = 0; i < donnees.donnees[k].length; i++) {
                const ligne = donnees.donnees[k][i];
                console.log(donnees.donnees[k][i]);
                console.log("c");

                console.log(Object.entries(ligne)[0][1]);
                console.log(Object.entries(ligne).length);

                for (let j=0; j<Object.entries(ligne).length; j++) {
                    if (RechercheData === Object.entries(ligne)[j][1]) {
                        fichesTrouvees.push(ligne);

                        console.log("d");

                    }

                }

                }
            }
            

        setTableauFiches(fichesTrouvees);

    };

    return (

        <div>
            <input type="text" list="suggestions" id="recherche-nom"/>
            <datalist id="suggestions">
                {options.map((option, index) => (<option key={index} value={option} />))}
            </datalist>
            <p className="newline"></p>
            <button className="rounded-button" onClick={FindObject}>Recherche</button>
        <div>
            {tableauFiches.map((fiche, index) => (<PetiteFicheClient key={index} entite={fiche} />))}
        </div>
        </div>
    );
}

export default BarreRecherche;