import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App.js';
import auth from '../../firebase.init.js';


const Header = () => {
   const[user]=useAuthState(auth)
   const logout = () => {
    signOut(auth);

  };
    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-5 ">
        <div className="container-fluid">
            <Link className = "nav-link text-danger fs-2 fw-bold" to ="/home">BooK SToRE</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto pe-3">
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to ="/home">Home</Link>
                    </li>
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to ="/Order">Orders</Link>
                    </li>
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to="/add">Admin</Link>
                    </li>
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to="/home">Deals</Link>
                    </li>
                   
                    <li>
           
                    {user?.displayName ? (
                                    <h5 className='nav-link active text-center text-dark'>
                                        {user?.displayName && <img className = " avatar rounded-circle img-fluid width w-50 " src={user.photoURL} alt = ""/>}
                                    </h5>
                            ) : (
                                    <Link to='/login' className='nav-link active btn btn btn-outline-danger  text-center'>
                                        Login
                                    </Link>
                            )}
                    </li>
                    <li>
                    {
                        user&&<button onClick={logout} className='nav-link active btn btn btn-outline-danger  text-center text-light'>
                        LogOuT
                    </button>
                    }
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};
export default Header;