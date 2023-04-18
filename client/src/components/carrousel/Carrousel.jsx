import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getcategory } from '../../redux/actions';
import lacteos1 from '../assets/Lacteos.jpg'
import bebidas from '../assets/bebidas.jpg'
import backgoundFront from '../assets/harinas.jpg'
import Style from '../carrousel/carrousel.module.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
const CategoryCarousel = () => {
    
    const {user} = useAuth0()
    console.log(user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getcategory())

    }, [dispatch]);

    const state = useSelector(state => state.categorys)

    const [categoria, setCategoria] = useState()


    function setear(categoria) {
        setCategoria(categoria)

    }



  
    return (




        <Carousel className='my-4 '>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={lacteos1}
                    alt="Category 1"
                />
                <Carousel.Caption>
                   
                        <h2>Lacteos</h2>
                        <p>Productos derivados de la leche de vaca</p>
                   

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={backgoundFront}
                    alt="Category 2"
                /> <Link to="/productos/harinas">
                <Carousel.Caption>
                   
                    <h2>Harinas </h2>
                    <p>Descubre nuestra seccion de harinas</p>
                   
                    
                </Carousel.Caption> </Link>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bebidas}
                    alt="Category 3"
                />
                <Carousel.Caption>
                    <h2>Bebidas</h2>
                    <p>Descubre nuestra seccion de bebidas</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>



    );
};
export default CategoryCarousel; 