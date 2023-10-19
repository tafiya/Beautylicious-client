import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import EachDeatils from "./EachDeatils";


const DetailsProducts = () => {
    const [NewItem,setNewItem]=useState([]);
    const {id}=useParams();
    console.log(id);
    const events =useLoaderData();
    console.log(events);
    useEffect(()=>{
        const newEvent= events?.find(event=>event._id==id);
        setNewItem(newEvent);
    },[events,id])
    console.log(NewItem);
    return (
        <div>
       <Navbar></Navbar>
       <EachDeatils NewItem={NewItem} key={NewItem._id}></EachDeatils>

       <Footer></Footer>
            
        </div>
    );
};

export default DetailsProducts;