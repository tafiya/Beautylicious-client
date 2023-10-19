import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const {signInUser} = useContext(AuthContext);
    const [invalid, setInvalid] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setInvalid('');
        signInUser(email, password).then(result => {
            swal("login is successfully done...!");
            e.target.reset();
            navigate(location ?. state ? location.state : '/');
           
        }).catch(error => setInvalid(error.message))
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider).then(result => {
            swal("login is successfully done...!");
            navigate(location ?. state ? location.state : '/');
        }).catch(error => {
         
        })
    }
    return (
        <div>
            <Navbar></Navbar>
             <div className=" bg-base-200  mt-40 mb-10 md:w-3/4 lg:w-1/2 mx-auto rounded-lg">
                <h2 className=" px-4 pt-4 text-center text-2xl font-medium">
                    Please log in
                </h2>
                <form onSubmit={handleLogin}
                    className=" p-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className=" w-full btn btn-active text-white bg-red-400">Login</button>
                    </div>
                </form>
                {
                invalid && <div>
                    <p className=" text-xl text-red-600">
                        {invalid}</p>
                </div>
            }
                
                <p className="text-center pb-4 text-lg">Do not have a account? Please
                    <Link className=" text-red-600" to='/register'> Register</Link>
                </p>
            </div>
            <div className=" bg-base-200  mb-40 md:w-3/4 lg:w-1/4 mx-auto">
            <button onClick={handleGoogleSignIn} className=' flex items-center gap-2 btn btn-outline w-full'>
            <FcGoogle></FcGoogle>
            Login with Google 
            </button>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Login;