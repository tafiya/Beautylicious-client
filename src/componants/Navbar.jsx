import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Login/Providers/AuthProvider";
import profile from '../assets/image/istockphoto-1495088043-612x612.jpg'
import { AuthContext } from "../Provider/AuthProvider";






const Navbar = () => {

   //signOut section
   const {user,logOut }=useContext(AuthContext);
  console.log(user);
   const handleLogout=()=>{
     logOut()
     .then()
     .catch()
   }
    const navLinks=<>
     <li><NavLink className=" text-lg font-medium mr-2  text-white" to="/">Home</NavLink></li>
     <li><NavLink className=" text-lg font-medium mr-2  text-white" to="/addProduct">Add Product</NavLink></li>
     <li><NavLink className=" text-lg font-medium mr-2  text-white" to="/carts">My carts </NavLink></li>
     { user &&
      <>
      <li><NavLink className=" text-lg font-medium mr-2  text-white" to="/blog">Blog </NavLink></li>
     <li><NavLink className=" text-lg font-medium mr-2  text-white" to='/contact'>Contacts</NavLink></li>
      </>
     }
     
    </>
    return (
        <div className="navbar bg-gray-600  font-display">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
    
    <a className=" text-green-100 normal-case italic font-semibold text-3xl">Beautylicious</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
        user? <div className="flex flex-row items-center text-white text-lg  lg:gap-2 lg:font-medium"><h2>{user.displayName?user.displayName:'no name'}</h2> <img src={user.photoURL? user.photoURL:profile
        } alt="" className=" border rounded-full h-12 w-12" /> <button onClick={handleLogout} className="   text-white btn btn-outline">LogOut</button></div> :<Link to='/login'><button className=" btn btn-outline text-white">Login</button></Link>
    
      }
    
  </div>
</div>
    );
};

export default Navbar;