import { useLoaderData } from "react-router-dom";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";
import Swal from "sweetalert2";


const UpdateProducts = () => {
    const updateCoffee =useLoaderData()
    const{_id,photo,bandName,name,type,rating,price,description}=updateCoffee;
    console.log('showing the update info',updateCoffee)
    const handleSubmit=e=>{
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const type =form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const rating=form.rating.value;
        const bandName=form.bandName.value;
        const photo=form.photo.value;

        const UpdateCoffee ={_id,name,type,price,description,rating,bandName,photo}
      console.log('after update',UpdateCoffee)
      fetch(`https://cosmetics-brand-base-website-server-cyyzawrrz-tafiyas-projects.vercel.app/products/${_id}`,{
        method:"PUT",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(UpdateCoffee)
      })
      .then(res=>res.json())
      .then(data=>
        {
            Swal.fire(
                'Good job!',
                'Product is updated',
                'success'
              )
           
              console.log(data)
              form.reset();
        }
        )

    }
    return (
        <div>
            
        <Navbar></Navbar>
            <div className=" bg-[#F4F3F0] p-24">
        <h2 className=" text-3xl font-extrabold text-center my-12">Update Product</h2>
        <form  onSubmit={handleSubmit}>
            {/* coffee row */}
            <div className="md:flex mb-4">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Name" defaultValue={name} name="name" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Type" defaultValue={type} name="type" className="input input-bordered w-full"/>
                    </label>
                </div>
            </div>
              {/*price row */}
              <div className="md:flex mb-4">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Price" defaultValue={price} name="price" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={description}  placeholder="Short description" name="description" className="input input-bordered w-full"/>
                    </label>
                </div>
            </div>
              {/* bandName  row */}
              <div className="md:flex mb-4">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Band name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Band name" defaultValue={bandName} name="bandName" className="input input-bordered w-full"/>
                    </label>
                </div>
            </div>
            {/* Photo url */}
            <div>
            <div className="form-control md:w-full mb-4">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Photo url" defaultValue={photo} name="photo" className="input input-bordered w-full"/>
                    </label>
    
            </div>
    
            </div>
            <input type="submit" value="Update Product" className="btn btn-block" />
           
          
    
        </form>
    
    </div>
    <Footer></Footer>
   

       </div>
    );
};

export default UpdateProducts;