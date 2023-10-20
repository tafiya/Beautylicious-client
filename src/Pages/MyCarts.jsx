import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

const MyCarts = () => {

  const loadedUsers = useLoaderData()
  const [users,setUsers]= useState(loadedUsers)
  const handleDelete =id=>{
      console.log(id);
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:3500/users/${id}`,{
                  method:"DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                  console.log(data)
                  if(data.deletedCount>0)
                  {
                  Swal.fire(
                  'Deleted!',
                  'Your Coffee has been deleted.',
                  'success'
                )
  
              //    remove the deleted items and the rest in setCoffees
                const remaining = users.filter(cof => cof._id !==id);
                setUsers(remaining);
  
                  }
              })
            
          }
        })

  }
  return (
    <div>
      <Navbar></Navbar>
      <div className=" max-w-[1400px] mx-auto my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   {
users.map(user=> 
<div key={user._id} className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
<figure><img src={user.photo}alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{user.name}</h2>
<p>{user.description}</p>
<p>{user.price}</p>
<div className="card-actions justify-end">
<button className="btn btn-primary" onClick={()=>handleDelete(user._id)}> X</button>
</div>
</div>
</div>

)
}
    </div>

      </div>
      
   <Footer></Footer>
   



    
</div>
  );
};

export default MyCarts;