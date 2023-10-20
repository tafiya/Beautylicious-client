import banner1 from '../assets/image/sliderimage.jpg'
import banner2 from '../assets/image/sliderimage2.jpg'
import banner3 from '../assets/image/sliderimage3.jpg'
import banner4 from '../assets/image/sliderimage4.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full h-[600px]">
        {/* <!-- ...............slide-1............., --> */}
        <div id="slide1" className="carousel-item relative  w-full    ">
         
          <div className="hero w-full " style={{backgroundImage:`url( ${banner1})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-white">
                <h1 className="mb-5 text-2xl lg:text-7xl font-extrabold">TRY OUR NEW
 COLLECTION</h1>
                <p className="mb-5 text-sm font-normal lg:text-xl lg:font-medium">WE Produce you the best one!!!</p>
       
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle  ">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
      
        </div> 
         {/* <!-- ...............slide-2............., --> */}
      
        <div id="slide2" className="carousel-item relative w-full ">
          <div className="hero w-full " style={{backgroundImage:`url( ${banner2})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-white">
                <h1 className="mb-5 text-2xl lg:text-7xl font-extrabold">Grab your offer...</h1>
                <p className="mb-5 text-sm font-normal lg:text-xl lg:font-medium">You can avail offer by applying the coupon</p>
               
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
         {/* <!-- ...............slide-1............., --> */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero w-full " style={{backgroundImage:`url( ${banner3})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-white">
              <h1 className="mb-5 text-2xl lg:text-7xl font-extrabold">Buy Products in Market Challenging price</h1>
              <p className="mb-5 text-sm font-normal lg:text-xl lg:font-medium">We offer your desire product in qualityful and cheapest  price</p>
              
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
         {/* <!-- ...............slide-1............., --> */}
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero w-full " style={{backgroundImage:`url( ${banner4})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-white">
              <h1 className="mb-5 text-2xl lg:text-7xl font-extrabold">Apply this coupon to get 20% flat discount</h1>
              <p className="mb-5 text-sm font-normal lg:text-xl lg:font-medium">This offer is valid for only first purchase</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slider;