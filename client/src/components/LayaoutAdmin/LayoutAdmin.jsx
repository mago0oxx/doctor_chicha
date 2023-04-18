import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../LayaoutAdmin/Sidebar.";
import Header from "../LayaoutAdmin/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import Style from '../LayaoutAdmin/LayoutAdmin.module.css'
function LayoutAdmin() {
    const { user, isAutenticated } = useAuth0()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    const state = useSelector(state => state)
    console.log(state)



    return (
        <>
        
        <div className="bg-secondary-900 min-vh-100 d-flex flex-column">
        <div className="d-flex flex-grow-1 flex-shrink-0">
          <Sidebar />
          <div className="flex-grow-1">
            <Header />
            <div className={Style.container}>
              <Outlet/>
            </div>
          </div>
        </div>
        </div>
        </>
       
      
    
  );
};

export default LayoutAdmin;
