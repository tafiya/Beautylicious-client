import image1 from "../../assets/image/pexels-anderson-guerra-1115128.jpg"
import Footer from "../../componants/Footer";
import Navbar from "../../componants/Navbar";
const Contacts = () => {
    return (
        <div>
            <Navbar></Navbar>
                     <div className="hero h-96" style={{backgroundImage:`url( ${image1})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <p className="mb-5">Hello there</p>
      <h1 className="mb-5 text-5xl font-bold">Contact Us </h1>
    </div>
  </div>
</div>
       <div className="my-14 max-w-7xl mx-auto">
       <h2 className="text-center lg:text-4xl text-xl font-semibold my-8 text-slate-500">Contact us if you need our services. We will be happy to make your events memorable!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card w-96 bg-base-100 ">
  <div className="card-body">
    <h2 className="card-title">Address</h2>
    <p>38-2 Hilton Street, California</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 ">
  <div className="card-body">
    <h2 className="card-title">Phone</h2>
    <p>(+01) 123 456 7890</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 ">
  <div className="card-body">
    <h2 className="card-title">Email</h2>
    <p>inform@dvents.com</p>
   
  </div>
</div>
        </div>
       </div>
      <Footer></Footer>
            
        </div>
    );
};

export default Contacts;