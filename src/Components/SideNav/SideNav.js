import React from 'react';
import { Link } from 'react-router-dom';
import { FaThLarge,FaPlus,FaEdit,FaHome } from 'react-icons/fa';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="side-nav">
            <h3 className = "text-color stext-uppercase d-flex justify-content-center align-items-center ">BOOK region</h3>
               <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav flex-column ">
                            <Link className="nav-link text-white fs-6" aria-current="page" to ="/manage"><FaThLarge/>&nbsp;&nbsp;Manage Books</Link>
                            <Link className="nav-link text-white fs-6" to ="/add"><FaPlus/>&nbsp;&nbsp;Add Book</Link>
                            <Link className="nav-link text-white fs-6" to ="/customize"><FaEdit/>&nbsp;&nbsp;Edit Book</Link>
                            <Link className="nav-link text-white fs-6" to="/">
                    <FaHome
                    />
                    &nbsp;&nbsp;
                    <span>
                      Back Home<span className="fa fa-home"></span>
                    </span>
                  </Link>
                        </div>
                    </div>
                </nav> 
         </div>    
    );
};
export default SideNav;