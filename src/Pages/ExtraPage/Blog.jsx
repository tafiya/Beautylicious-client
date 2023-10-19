

import beauty from '../../assets/image/laura-chouette-YzaRgVOweMY-unsplash.jpg'
import Footer from '../../componants/Footer';
import Navbar from '../../componants/Navbar';

const Blog = () => {
return(
< div > 
<Navbar></Navbar>

<h2 className=' text-center text-6xl font-extrabold text-slate-700 mt-14'>READ THE BLOG</h2>
<hr/>
<div className=" max-w-[1400px] mx-auto">
<div className=" grid md:grid-cols-3 grid-cols-1 gap-6">
    <div className="card">
    <div className="hero text-left items-start  h-80 " style={{ backgroundImage: `url(${beauty})` }}>
                     <p className=' bg-black text-white'> Makeup</p>
                     
              
                </div>
        <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
            </div>
        </div>
    </div>
    <div className="card">
    <div className="hero text-left items-start  h-80 " style={{ backgroundImage: `url(${beauty})` }}>
                     <p className=' bg-black text-white'> Makeup</p>
                     
              
                </div>
        <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
            </div>
        </div>
    </div>
    <div className="card">
    <div className="hero text-left items-start  h-80 " style={{ backgroundImage: `url(${beauty})` }}>
                     <p className=' bg-black text-white'> Makeup</p>
                     
              
                </div>
        <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
            </div>
        </div>
    </div>


</div>
</div>
<Footer></Footer>

</div>);

};

export default Blog;