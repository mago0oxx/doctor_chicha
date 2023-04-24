import React, { useState } from 'react';
import Style from '../pages/ProductsCreate.module.css';
import { AskToChatGpt } from '../../../redux/actions';
const ProductsCreate = () => {
   const [respuesta, setRespuesta] = useState([]);


   const handleInputChange = async (e) => {
    const pregunta = e.target.value;
    try {
       const response = await AskToChatGpt(pregunta);
       setRespuesta(response);
    } catch (error) {
       console.error(error);
       // Aquí podrías agregar lógica para manejar el error de manera adecuada
    }
 };
 
   return (
      <div className={Style.container}>
         <h1>hola, preguntale algo al Chat GPT-4</h1>
         <input type="text" onChange={handleInputChange} />
         {respuesta && respuesta.map((e, index) => (
            <div key={index}>
               <p>{e}</p>
            </div>
         ))}
      </div>
   );
};

export default ProductsCreate;
