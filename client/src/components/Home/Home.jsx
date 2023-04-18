import NavBar from "../NavBar/NavBar";
import React from "react";
import Style from '../Home/Home.module.css';
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import Pokemon from "../PokemonCard/Pokemon";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Paginado from "../Paginado/Paginado.jsx";
import { useState } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { filterPokemonByType } from "../../redux/actions";
import { Link } from "react-router-dom";
// import Loader from "../Loaders/Loader";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch]);
    const products = useSelector((state) => state.allProducts)

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    }
    console.log(cartItems)




    const [order, setOrder] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(12)
    const indexOfLastProduct = currentPage * productsPerPage // 6
    const lastOfFirstProduct = indexOfLastProduct - productsPerPage // 0
    const currentProduct = products.slice(lastOfFirstProduct, indexOfLastProduct)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    // function handlefilteredType(e) {
    //     e.preventDefault();
    //     dispatch(filterPokemonByType(e.target.value))
    // }
    // function handleFiltercreated(e) {
    //     e.preventDefault();
    //     dispatch(filterCreated(e.target.value))
    //     setCurrentPage(1);
    //     setOrder(`òrdenado ${e.target.value}`);
    // }
    // function handleOrdered(e) {
    //     e.preventDefault();
    //     dispatch(orderByName(e.target.value))
    //     setCurrentPage(1);
    //     setOrder(`òrdenado ${e.target.value}`);
    // }
    // function handleOrderByAttack (e){
    //     e.preventDefault();
    //     dispatch(orderByAttack(e.target.value))
    //     setCurrentPage(1);
    //     setOrder(`òrdenado ${e.target.value}`);

    // }

    return (
        <div className={Style.container}>
            <NavBar cartItems={cartItems} />
            <div className={Style.paginado}>
                <Paginado
                    productsPerPage={productsPerPage}
                    products={products.length}
                    paginado={paginado}
                />
            </div>


            <div className={Style.aside}>
                <div className={Style.select}>
                    <h2> Ordenar </h2>
                    <select >
                        <option value="ASC">From A-Z</option>
                        <option value="DESC">From Z-A</option>
                    </select>
                    <h2> Filtrar  por categoria </h2>
                    <select >
                        <option value="all">all</option>
                        <option value="normal">Bebidas</option>
                        <option value="fighting">Harinas</option>
                        <option value="flying">Lacteos</option>
                        <option value="poison">Postres</option>
                        <option value="ground">Golosinas</option>
                        <option value="bug">Granos</option>
                        <option value="rock">Preparados</option>
                    </select>
                    <h2> Ordernar por tipo </h2>
                    <select >
                        <option value="bigger"> mayor </option>
                        <option value="smaller"> menor </option>
                    </select>

                </div>
                <div className={Style.info}>


                    

                        {products.map((product) => (
                            <Col md={4} key={product.id}>
                                <Card className={Style.card}>
                                    <Card.Img variant="top" src={product.image} className={Style.cardimgtop} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Button variant="primary" onClick={() => addToCart(product)}>Agregar al carrito</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                </div>


            </div>



        </div>
    )
}