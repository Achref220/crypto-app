import React from 'react';
import './NavBar.css';
import logo from '../../images/bit-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userActions';



const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    }
    const token = localStorage.getItem("token");
    return (
        <nav className='main__nav'>
            <Link to="/"><div className='imgl'><img src={logo} alt="logo-err" /></div></Link>
                <ul className='li-ul'>
                {token && (
                    <li>
                        <Link className='link1' to="stats">Stats</Link>
                        <Link className='link1' to='/posts'>Posts</Link>
                    </li>
                )}
                </ul>
            {token ? <button className='out' onClick={handleLogout}>Sign Out</button> : (
                <><Link to='/register' className='Up'>Sign Up</Link>
                <Link to='/Login' className='In'>Sign In</Link></>
                )}
        </nav>
    )
}

export default NavBar
