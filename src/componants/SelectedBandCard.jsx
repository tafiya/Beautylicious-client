import { Link } from "react-router-dom";




const SelectedBandCard = ({band}) => {
    const {_id,photo,name,type,rating,price}=band;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
            <img src={photo} className=" lg:w-96 md:w-96 w-full h-40 rounded-t-md" alt="Shoes"/></figure>
        <div className="card-body mx-8">
            <h2 className="card-title text-center">{name}</h2>
            <p className="text-slate-500">{type}</p>
            <p className="text-lg text-slate-500"><span className="text-xl font-semibold">Price: </span> {price}</p>
            <p className="text-lg text-slate-500"> <span className="text-xl font-semibold">Ratings: </span> {rating}</p>
            <div className="card-actions justify-between">
                <Link to={`/updateProducts/${_id}`}><button className=" w-full btn btn-active text-white bg-red-400">Update</button></Link>
                <Link to={`/detailProducts/${_id}`}> <button className=" w-full btn btn-active text-white bg-red-400">View Details</button> </Link>
                {/* <button className=" w-full btn btn-primary">More details</button> */}
               
            </div>
        </div>
    </div>
    );
};

export default SelectedBandCard;