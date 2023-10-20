import banner from "../assets/image/pexels-zhugewala-2113855.jpg"


const Banner = () => {
    return (
        <div>
< div className = "hero min-h-screen " style = {{backgroundImage: `url(${banner})`}} > <div className=""></div>
<div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-gray-600">
        <h1 className="mb-5 text-6xl font-extrabold text-stone-600">Forever Beautiful</h1>
        <p className="mb-5 text-stone-600 text-xl font-thin ">This collection focuses on natural and plant base ingredients to help customers achieve a radiant and healthy Glow</p>
       
    </div>
</div></div>

        </div>
    );
};

export default Banner;