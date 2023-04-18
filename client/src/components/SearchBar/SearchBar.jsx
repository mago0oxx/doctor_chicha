import React from "react";
import { useDispatch } from "react-redux";
import {  searchPokemon } from "../../redux/actions";
import { useState } from "react";
import Style from '../SearchBar/SearchBar.module.css'

export default function SearchBar(){


const [name , setName] = useState('')

let dispatch = useDispatch()

function handleSubmit(e){
    e.preventDefault();
        dispatch(searchPokemon(name))
        setName('')
    }
    

function onInputChange(e){
    e.preventDefault();
    setName(e.target.value)
    console.log(name)
}



    return (
        <div className={Style.container}>
            {/* <form onSubmit={(e) => handleSubmit(e)} className={Style.input}> */}
                <input 
                type="text"
                onChange={(e)=> {onInputChange(e)}} 
                className={Style.barraBusqueda}
                />
                
                <button type="submit" onClick={(e) =>{handleSubmit(e)}}>buscar </button>

            {/* </form> */}
        </div>
    )
}