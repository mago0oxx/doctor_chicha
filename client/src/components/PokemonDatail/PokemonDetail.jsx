import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";

import { getPokemonDetail } from "../../redux/actions";
import Style from "../PokemonDatail/PokemonDetail.module.css"
import { useEffect } from "react";

export default function PokemonDetail(props) {

    const pokemonDetails = useSelector((state) => state.detail)
    const dispatch = useDispatch()

    

    useEffect(() => {
        dispatch(getPokemonDetail(props.match.params.id))
    }, []);





    return (
        <div>
            { pokemonDetails.legnth ?
                <div className={Style.container}>
                    <div>
                        <h3>Number : {pokemonDetails[0].id}</h3>
                        <h1>{pokemonDetails[0].name}</h1>

                    </div>
                    <div>
                        <img src={pokemonDetails[0].image} alt="imagen del pokemon" />

                    </div>
                    <div>
                        <h6>HP:{pokemonDetails[0].hp}</h6>
                        <h6>HP:{pokemonDetails[0].defense}</h6>
                        <h6>HP:{pokemonDetails[0].attack}</h6>
                        <h6>HP:{pokemonDetails[0].speed}</h6>
                    </div>
                    <div>
                        <h4>Heigth: {pokemonDetails[0].heigth}</h4>
                        <h4>Weigth: {pokemonDetails[0].wiegth}</h4>
                    </div>
                    <div>
                        <h1>{pokemonDetails[0].types}</h1>
                    </div>
                </div>  : <h1> loading....</h1>
               
            }
            <Link to="/Home"> 
            <button>  Volver  </button>
            </Link>
                  
        </div>


    )
}