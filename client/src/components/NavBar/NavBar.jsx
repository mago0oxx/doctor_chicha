import React , {useState}from "react";
import Style from "../NavBar/NavBar.module.css"
import logo from '../assets/logodoctor.png'
import { Link , Outlet} from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
// import {FaShoppingCart} from 'react-icons/fa'
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
    RiArrowDownSLine,
    RiLogoutCircleRLine,
    RiProfileLine,
  } from "react-icons/ri";
import LoginButton from "../Auth0/loginButton";




export default function NavBar(props){

 const {loginWithRedirect , user } = useAuth0();

console.log(loginWithRedirect , user )
const [infoUser, setInfoUser] = useState({});

    return (
        <div className={Style.container}>
            <div className={Style.link}>
                <Link to="/home" >
                    <img className={Style.logo} src={logo} alt="logo" />
                    
                </Link>
                
            </div>
            <div>
                <Link>
                <h2 className={Style.inicio}>Inicio</h2>
                </Link>
                
            </div>
            <div className={Style.searchBar}> 
                <SearchBar/>
            </div>
            {/* <form  className={Style.input} onSubmit={(e) => onSubmit(e)} > 
             <input onChange={(e)=>onInputChange(e)} className={Style.barraBusqueda}  id ="titlle" type="text"  placeholder="Search a pokemon" value={search} required/> 
              <div className={Style.btn}> 
              <button type="submit" value={Search} onClick={(e)=>onInputChange(e)}> Buscar </button>
              </div>  
               </form> */}
            <div className={Style.link1}> 
            <div  className={Style.shopingCart}>
                 <Link> 
                 
                 <FontAwesomeIcon icon={faShoppingCart} className={Style.cart}/>
                 <span className="badge">{props.cartItems.length}</span>
            </Link>
            </div>
           
             <div className={Style.link1}> 

              {/* { isAuthenticated && user ? (
              <>
                {" "}
                <nav className="z-20 block md:hidden absolute right-4">
                  <Menu
                    menuButton={
                      <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#0d6efd]  rounded-lg transition-colors pl-3 pr-5">
                        <img src={user.picture} alt={user.given_name} className="w-8 h-8 object-cover rounded-full" />
                        <RiArrowDownSLine />
                      </MenuButton>
                    }
                    align="end"
                    arrow
                    arrowClassName="bg-secondary-100"
                    transition
                    menuClassName="bg-secondary-100 p-4"
                  >
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="/profile"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <img src={user.picture} alt={user.given_name} className="w-8 h-8 object-cover rounded-full" />
                        <div className="flex flex-col text-sm">
                          <span className="text-sm">{user.given_name} </span>
                          <span className="text-xs text-gray-500">{user.email}</span>
                        </div>
                      </Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem className="p-0 hover:bg-transparent">
                     {infoUser.roll == "superAdmin" ? (
                        <Link
                          to="/dashboard"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                          <RiProfileLine /> Admin
                        </Link>
                      ) : (
                        <Link
                          to="/profile"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                          <RiProfileLine /> My Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="/profile/favorites"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <MdOutlineFavorite /> Favorites
                      </Link>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="#"
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <RiLogoutCircleRLine /> Log Out
                      </Link>
                    </MenuItem>
                  </Menu>
                </nav>
              </>
            ) : <LoginButton/> } */}
            <button onClick={loginWithRedirect}> login </button>
            
            </div>
            </div>
            <Outlet />
        </div>
    )
}



