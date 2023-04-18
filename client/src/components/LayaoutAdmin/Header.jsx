import React from 'react';
import {
    RiArrowDownSLine,
    RiLogoutCircleRLine,
    RiProfileLine,
} from "react-icons/ri";
import { useAuth0 } from '@auth0/auth0-react';
import { FaRegCalendarAlt, FaArrowCircleRight } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import Style from '../LayaoutAdmin/Header.module.css'



const Header = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    return (
        (
            <header className="border-bottom border-secondary-100 p-4 p-md-5 d-flex align-items-center justify-content-end header-height">
                <nav className="d-flex align-items-center gap-3">
                    <Link to="/home" className="d-flex align-items-center gap-2 p-2 bg-primary rounded-lg w-auto hover:bg-[#0d6efd]">
                        <p className="text-white font-weight-bold">Go Home</p>
                        <FaArrowCircleRight className="text-white" />
                    </Link>
                    <button className="d-flex align-items-center gap-2 text-white font-weight-bold hover-text-white">
                        <FaRegCalendarAlt className="hover-white" />
                        {`${day}/${month}/${year}`}
                    </button>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" className="d-flex align-items-center gap-2 transition-colors text-white font-weight-bold hover-text-white">
                            <img src="{user.picture}" alt="y bueno "className="w-6 h-6 object-cover rounded-circle" />
                            <span className="mr-2">hola</span>
                            <RiArrowDownSLine />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bg-secondary-100">
                            <Dropdown.Item className="p-0">
                                <Link to="#" className="d-flex align-items-center gap-4 py-2 px-4 flex-1 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
                                    <img src="#" alt="given name" className="w-8 h-8 object-cover rounded-circle" />
                                    <div className="flex flex-col text-sm">
                                        <span>Daniel Quijada</span>
                                        <span className="text-xs text-gray-500">mi mail </span>
                                    </div>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="p-0">
                                <Link to="/dashboard" className="d-flex align-items-center gap-4 py-2 px-4 flex-1 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
                                    <RiProfileLine />
                                    <span>My Profile</span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="p-0">
                                <Link to="#" onClick={() => logout({ returnTo: window.location.origin })} className="d-flex align-items-center gap-4 py-2 px-4 flex-1 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
                                    <RiLogoutCircleRLine />
                                    <span>Log Out</span>
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </nav>
            </header>
        )
    );
    
}

export default Header;
