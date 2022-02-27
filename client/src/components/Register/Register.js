import React, { useEffect, useState } from 'react';
import './Register.css';
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        username: "",
        phone: "",
        password: "",
        date: ""
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const isAuth = useSelector((state) => state.UserReducer.isAuth)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(user));
        console.log("done");
    };
    const errNotif = () => {
        toast.error(`Please make sure to fill all the blanks and use unique informations that haven't used before !!!`)
    }
    useEffect(() => {
        if (isAuth) {
          navigate('/stats')
        } 
    }, [isAuth, navigate])
    const errClick = () => {
        if (!isAuth) {
            errNotif()
        }
    }
    return (
        <div className='form-div'>
            <ToastContainer />
            <div>
                <h1>Register now to get access to all of our cryptocurrency & nft statics and features !!!</h1>
            </div>
            <form className='main-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='email'
                    placeholder='Email'
                    value={user.email}
                    onChange={handleChange}
                    required={true}
                />
                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={user.username}
                    onChange={handleChange}
                    required={true}
                />
                <input
                    type="number"
                    name='phone'
                    placeholder='Phone Number'
                    value={user.phone}
                    onChange={handleChange}
                    required={true}
                />
                <input
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={user.password}
                    onChange={handleChange}
                    required={true}
                />
                <input
                    type="date"
                    name='date'
                    placeholder='Date of birth'
                    value={user.date}
                    onChange={handleChange}
                    required={true}
                />
                <div className='check' onChange={handleChange}>
                    <label className='male'>Male</label>
                    <input type="radio" className='checkbox1' name='gender' value="male"/>
                    <label className='female'>Female</label>
                    <input type="radio" className='checkbox2' name='gender' value="female"/>
                </div>
                <button type='submit' onClick={errClick}>Submit</button>
            </form>
        </div>
    )
};

export default Register;
