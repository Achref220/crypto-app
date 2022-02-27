import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import CoinsStats from './components/CoinsStats/CoinsStats';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Midimg from './components/Midimg/Midimg';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/NavBar/PrivateRoute';
import Post from './components/Post/Post';
import Register from './components/Register/Register';




function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={
          <>
            <Home />
            <AboutUs />
            <Midimg />
            <Blog />
          </>
        }
        />
        <Route exact path="/stats" element={<PrivateRoute/>}> 
          <Route exact path="/stats" element={<CoinsStats />} />
        </Route>
        <Route exact path="/posts" element={<PrivateRoute />}>
          <Route path='/posts' element={<Post />} />
        </Route>
        <Route path='/Register' element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        
      </Routes>
    </div>
  )
}

export default App;
