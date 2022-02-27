import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/userActions';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const isAuth = useSelector((state) => state.UserReducer.isAuth)
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login(user));
    console.log("logged");
  };
   const succnotify = () => {
     toast.success('You are logged in');
  }
  const errnotify = () => {
    toast.error('bad credentials', {closeOnClick: true})
  }
  useEffect(() => {
    if (isAuth) {
      navigate('/stats', { replace: true });
      succnotify()
    }
  }, [isAuth, navigate]);
  const errClick = () => {
    if (!isAuth) {
      errnotify();
    };
  };
  
  
  
  return (
    <div className='maincon'>
      <ToastContainer />
      <form className='form-2' onSubmit={onSubmit}>
        <h1>login</h1>
        <input type="email" placeholder='email' name='email' value={user.email}   onChange={handleChange}/>
        <input type="password" placeholder='password' name='password' value={user.password}  onChange={handleChange}/>
        <button type='submit' onClick={errClick}>Login 🔒</button>
      </form>
    </div>
  )
}

export default Login