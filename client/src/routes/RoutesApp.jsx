import React from "react";
import {Route , Routes} from "react-router-dom";

import  Home  from '../components/Home/Home'
import LandingPage from '../components/LandingPage/LandingPage.jsx' 
import LayaoutAdmin from '../components/LayaoutAdmin/LayoutAdmin'
import ProductsCreate from "../components/LayaoutAdmin/pages/ProductsCreate";

export default function RoutesApp(){
    return (
        <>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/home" element={<Home/>}/>

            {/* Configuracion de la ruta del dashboard del admin*/ }
            <Route path="/dashboard" element={<LayaoutAdmin/>}>
                 <Route index element={<ProductsCreate/>}/>      
                <Route path="productsCreate" element={<ProductsCreate/>} />
            </Route>
            
            
        
         </Routes>
        </>
    )
}
