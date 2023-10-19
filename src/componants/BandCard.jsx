//import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import Band from "./Band";


const BandCard = () => {
    const [bandNames,setBandName]=useState([]);
    useEffect(()=>{
        fetch("BandData.json")
        .then( res=>res.json())
        .then(data=>setBandName(data))
    },[])
  
    return (
        <div>
         
            <h1 className=' text-center text-6xl font-extrabold text-slate-700 mt-14'>T o p  Brand </h1>
            <p className=' text-center text-base font-thin mt-4 text-slate-700 mb-14'>You can find every products from this Bands </p>
            <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 ">
            {
                bandNames.map(band=><Band key={band.id} band={band}></Band>
                   
               )
            }
         

            </div>
          
   

    </div>
    );
};

export default BandCard;


{/* <h1 className=' text-center text-6xl font-extrabold text-slate-700 mt-14'>T o p  Brand </h1>
<p className=' text-center text-base font-thin mt-4 text-slate-700 mb-14'>You can find every products from this Bands </p>
<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 ">
    {/* ------------Mac------------------ */}
    // <Link to='/carts'>
    //     <div className="hero h-80 " style={{ backgroundImage: `url(${mac})` }}>
    //         <div className="hero-content text-center text-neutral-content">
    //             <div className="max-w-md text-gray-600">
    //             <button className=" btn btn-outline h-24 text-white font-bold text-5xl">Mac</button>
    //             </div>
    //         </div>
    //     </div>
    // </Link>

     {/* ------------revolution------------------ */}

    // <Link>
    //     <div className="hero  h-80 " style={{ backgroundImage: `url(${revolution})` }}> <div className=""></div>
    //         <div className="hero-content text-center text-neutral-content">
    //             <div className="max-w-md text-gray-600">
    //             <button className=" btn btn-outline h-24 text-white font-bold text-5xl">Revolution</button>
             

    //             </div>
    //         </div>
    //     </div>
    // </Link>



//    <Link>
//    <div className="hero h-80 " style={{ backgroundImage: `url(${dior})` }}> <div className=""></div>
//         <div className="hero-content text-center text-neutral-content">
//             <div className="max-w-md text-gray-600">
//             <button className=" btn btn-outline h-24 text-white font-bold text-5xl">Dior</button>
   

//             </div>
//         </div>
//     </div>
   
//    </Link>
//    <Link>
//    <div className="hero h-80 " style={{ backgroundImage: `url(${avon})` }}> <div className=""></div>
//         <div className="hero-content text-center text-neutral-content">
//             <div className="max-w-md text-gray-600">
//             <button className=" btn btn-outline h-24 text-white font-bold text-5xl">Avon</button>
 

//             </div>
//         </div>
//     </div>


//    </Link>
   
//    <Link>
//    <div className="hero h-80 " style={{ backgroundImage: `url(${coty})` }}> <div className=""></div>
//         <div className="hero-content text-center text-neutral-content">
//             <div className=" ">
//             <button className=" btn btn-outline h-24 text-white font-bold text-5xl">Coty</button>
                

//             </div>
//         </div>
//     </div>
//    </Link>
//    <Link>
//    <div className="hero h-80 " style={{ backgroundImage: `url(${loreal})` }}> <div className=""></div>
//         <div className="hero-content text-center text-neutral-content">
//             <div className="max-w-md text-gray-600">
//             <button className=" btn btn-outline h-24 text-white font-bold text-5xl">L`Oreal</button>
                

//             </div>
//         </div>
//     </div>
//    </Link>
    

   

  

// </div> */}
