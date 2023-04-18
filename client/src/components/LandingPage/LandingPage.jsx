import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Styles from "../LandingPage/LandingPage.module.css"
import NavBar from '../NavBar/NavBar';
import { useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions';
import chocolates from '../assets/chocolates.jpg'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Carrousel from '../carrousel/Carrousel.jsx'

const LandingPage = () => {
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
    
// const categories = [
//     {
//       name: "Categoría 1",
//       image: "https://via.placeholder.com/300x200",
//     },
//     {
//       name: "Categoría 2",
//       image: "https://via.placeholder.com/300x200",
//     },
//     {
//       name: "Categoría 3",
//       image: "https://via.placeholder.com/300x200",
//     },
//   ];
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "60px",
//   };

  return (
    <div className={Styles.background}> 
    
    <NavBar cartItems ={cartItems}/>
      <Container>
      {/* <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider> */}
      <Carrousel/>
        <Row className="my-0">
          <Col md={6}>
            <h1 className="fw-bold">Haz tu pedido de productos venezolanos</h1>
            <p className="lead my-4">Disfruta de los mejores productos alimenticios de Venezuela, hechos con los mejores ingredientes.</p>
            <Button variant="primary" size="lg" className="my-3">Haz tu pedido</Button>
          </Col>
          <Col md={6}>
            <img src={chocolates} height="10vh" alt="Productos venezolanos" className="img-fluid my-4 " />
          </Col>
        </Row>
        <Row className="my-4">
          {products.map((product) => (
            <Col md={4} key={product.id}>
              <Card className={Styles.card}>
                <Card.Img variant="top" src={product.image}  className={Styles.cardimgtop}/>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(product)}>Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;




// import React from "react"
// import { Link } from 'react-router-dom';
// import Style from '../LandingPage/LandingPage.module.css'
// import github from '../assets/github.png'
// import linkind from '../assets/linkin.png'
// export default function Landinpage(){
//     return (
//         <div className={Style.container}>
//              <div className={Style.social}>
//                  <div className={Style.github}>
//                     <a href="https://github.com/mago0oxx">
//                        <img   src={github} alt="img github"   />
//                      </a>
//                  </div>
//                  <div className={Style.linkind}>
//                     <a href="https://www.linkedin.com/in/daniel-augusto-quijada-higgins-92b9a312b/">
//                        <img   src={linkind} alt="img linkind"   />
//                      </a>
//                  </div>
//             </div>
            
//                 <div className={Style.aside}>  
//                 <h1 className={Style.title}>Wellcome!!</h1>
//                 <br />
//                 <p className={Style.presentation}>
//                    Hi, my name is Daniel Quijada, i am a web desingner. and i  builded  this SPA (single web aplication)
//                    using, new the thecnologies like NODE.JS , sequelize and Express in the back-end , React.js , HTML , CSS in front-end,
//                    using the main lenguaje JAVASCRIPT. i hope you enjoy my page as well yo enjoyed to buided <br />
//                     </p>
//                 <Link to="/home">
//                 <button className={Style.btn}> GO! </button>
//                 </Link>
//                 </div>
          
          
//           </div>
//     )
// }