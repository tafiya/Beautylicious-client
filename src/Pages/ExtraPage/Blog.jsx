

import beauty from '../../assets/image/pexels-valeria-boltneva-965990.jpg'
import makeup from '../../assets/image/beauty.jpg';
import skincare from '../../assets/image/skincare.jpg'
import Footer from '../../componants/Footer';
import Navbar from '../../componants/Navbar';

const Blog = () => {
return(
< div > 
<Navbar></Navbar>

<h2 className=' text-center text-6xl font-extrabold text-slate-700 mt-14'>READ THE BLOG</h2>
<hr/>
<div className=" my-24 max-w-[1400px] mx-auto">
<div className=" items-center justify-center grid grid-cols-1  gap-6">
    <div className="card  h-[680px] w-3/4">
    <div className="hero text-left items-start h-[680px] w-3/4 " style={{ backgroundImage: `url(${makeup})` }}>
                     <p className=' bg-gray-900 p-4 text-white'> Makeup</p>
                     
              
                </div>
        <div className="card-body h-[480px] w-3/4">
            <h2 className="card-title">PRODUCTS TO MAKE YOUR MAKEUP PERFECT</h2>
            <p>As we are preparing for these special seasons, I am as of now prepared for the unavoidably driest season. It`s so awful in Utah that you need to put cream on your hands on...</p>
             <button className="btn btn-outline">Read More</button>
       
        </div>
    </div>
    <div className="card h-[680px] w-3/4">
    <div className="hero text-left items-start h-[680px] w-3/4" style={{ backgroundImage: `url(${beauty})` }}>
                     <p className=' bg-gray-900 p-4 text-white'> Beauty</p>
                     
              
                </div>
        <div className="card-body h-[480px] w-3/4">
            <h2 className="card-title">HERBAL INGREDIENTS IN FRAGRANCE</h2>
            <p>As we are preparing for these special seasons, I am as of now prepared for the unavoidably driest season. It`s so awful in Utah that you need to put cream on your hands on...</p>
            <button className="btn btn-outline">Read More</button>
          
        </div>
    </div>
    <div className="card h-[680px] w-3/4">
    <div className="hero text-left items-start h-[680px] w-3/4 " style={{ backgroundImage: `url(${skincare})` }}>
                     <p className=' bg-gray-900 p-4 text-white'>Skincare</p>
                     
              
                </div>
        <div className="card-body h-[480px] w-3/4">
            <h2 className="card-title">THE SKINCARE INGREDIENT U NEED</h2>
            <p>As we are preparing for these special seasons, I am as of now prepared for the unavoidably driest season. It`s so awful in Utah that you need to put cream on your hands on...</p>
            <button className="btn btn-outline">Read More</button>
     
        </div>
    </div>


</div>
</div>
<Footer></Footer>

</div>);

};

export default Blog;