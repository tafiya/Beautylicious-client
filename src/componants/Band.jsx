import { Link } from "react-router-dom";


const Band = ({band}) => {
    const {id,band_name,band_image}=band;
    return (
        <div>
            <Link to={`/products/${encodeURIComponent(band_name)}`}>
< div className = "card bg-base-100 shadow-xl" > <div className="card-body">
    <h2 className="card-title text-center">
        {band_name}</h2>

</div>
<figure><img src={band_image}
        className=" lg:w-96 md:w-96 w-full h-40 rounded-t-md"
        alt="Shoes"/></figure></div>

            </Link>
 
  
            
        </div>
    );
};

export default Band;