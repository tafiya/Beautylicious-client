import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import Swal from "sweetalert2";


const Registration = () => {
    const {createUser}=useContext(AuthContext);
    const [registerError,setRegister]=useState('');
    const [success,setSuccess]=useState('');
    const navigate = useNavigate();

    const handleRegister = e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        const name= form.get('name');
        const photo= form.get('photo');
        const email= form.get('email');
        const password=form.get('password');
        console.log(name,photo,email,password);
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password))
        {
          setRegister("Please provide a valid password .(Minimum 6 characters,one Uppercase letter,one special letter)")
            return;

        }
        setRegister('');
        setSuccess('');
        
        createUser(email,password)
        .then(result=>
          {
            console.log(result.user)
            Swal.fire('Registration is successfully done...!')
           
            e.target.reset();
            navigate(location ?. state ? location.state : '/');

          }
          )
        .catch(error=>{
          setRegister(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>

<div className=" bg-base-200  my-40 md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className=" px-4 pt-4 text-center text-2xl font-medium"> Please Register </h2>
        <form onSubmit={handleRegister} className=" p-8">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
    <button className=" w-full btn btn-active text-white bg-red-400">Register</button>
    </div>
  </form>
          {
                registerError && <div>
                    <p className=" text-red-600 font-bold">{registerError}</p>
                </div>
            }
  <p className="text-center pb-4">Do not have a account? Please <Link className=" text-red-600" to='/login'>Login</Link></p>
        </div>
        <Footer></Footer>
            
        </div>
    );
};

export default Registration;