
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import Slider from '../componants/Slider';
import SelectedBandCard from '../componants/SelectedBandCard';
//import NoData from '../componants/NoData';
import { useEffect, useState } from 'react';

const ViewProducts = () => {
    const { band_name } = useParams();
    console.log(band_name);
    const [products,setProducts]=useState([]);
    const loadedBandProducts= useLoaderData();
    useEffect(()=>{
        const newProducts =loadedBandProducts.filter(product => product.bandName === band_name);
        setProducts(newProducts)

    },[band_name,loadedBandProducts])
    

    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <div className=" max-w-[1400px] mx-auto">
                { 
                    products.length>0?<div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 ">
                    {
                        products.map(band=><SelectedBandCard key={band._id} band={band}></SelectedBandCard>
                           
                       )
                    }
                    </div>: <h2 className=' text-4xl font-bold'> Sorry !!! No products</h2>
                     
                }
            </div>
           
            <Footer></Footer>
            
            
        </div>
    );
};

export default ViewProducts;