
import React from "react";
import Style from '../Paginado/Paginado.module.css'

export default function Paginado({ pokemonPerPage, pokemons, paginado }){
    const pagenumber = [];

for (let i=0; i<= Math.ceil(pokemons/pokemonPerPage) ; i++ ){
    pagenumber.push(i + 1)
}
return (
    <nav className={Style.nav}>
        <ul className={Style.paginado}>
        {
            pagenumber && pagenumber.map(number => (
                <li className={Style.btn} key={number}>
                    <p onClick={()=> paginado(number)}>{number}</p>
           
                </li>
            ))
        }
        </ul>
    </nav>
)
}

