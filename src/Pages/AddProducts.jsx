import Swal from "sweetalert2";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";


const AddProducts = () => {

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

        const addProducts ={name,type,price,description,rating,bandName,photo}
      console.log(addProducts)
      fetch('http://localhost:3500/products',{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(addProducts)
      })
      .then(res=>res.json())
      .then(data=>
        {
            Swal.fire(
                'Good job!',
                'One product is added!',
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
        <h2 className=" text-3xl font-extrabold text-center my-12">Add a Product</h2>
        <form  onSubmit={handleSubmit}>
            {/* coffee row */}
            <div className="md:flex mb-4">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Name" name="name" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Type" name="type" className="input input-bordered w-full"/>
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
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Short description" name="description" className="input input-bordered w-full"/>
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
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Band name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Band name" name="bandName" className="input input-bordered w-full"/>
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
                        <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full"/>
                    </label>
    
            </div>
    
            </div>
            <input type="submit" value="Add Product" className="btn btn-block" />
           
          
    
        </form>
    
    </div>
    <Footer></Footer>

       </div>
    
    );
};

export default AddProducts;