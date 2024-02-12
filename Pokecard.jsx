import React from "react";
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

//Shows a single Pokeman card.

function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="PokeCard-title">{ props.name }</div>
            <div className="PokeCard-img" src={imgSrc} />
            <div className="PokeCard-data">Type: { props.name }</div>
            <div className="PokeCard-data">EXP: { props.exp }</div>
        </div>
    );
}

export default Pokecard;