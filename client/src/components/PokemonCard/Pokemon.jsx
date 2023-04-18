import React from "react";

import Style from '../PokemonCard/Pokemon.module.css'

export default function pokemon({ id , name, image , price}) {
    return (
        <div className={Style.container}>
            <div className={Style.top}>
               
                    <img  src={image} alt="pokemon imagen"  />
                
               
            </div>


            <div className={Style.info}>
                
                <h2>{name}</h2>
                <p>${price}</p>
                <button className={Style.btnCarrito}> agregar al carrito</button>
            </div>

        </div>
    )
}