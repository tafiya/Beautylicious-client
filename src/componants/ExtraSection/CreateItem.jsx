import face from '../../assets/image/raphael-lovaski-DEuob2v77wI-unsplash.jpg'
import power from '../../assets/image/facepower.png'
import organic from '../../assets/image/organic.png'
import clinical from '../../assets/image/clinical.png'
import animal from '../../assets/image/animal.png'
const CreateItem = () => {
    return (
        <div className="card lg:card-side bg-gray-600   gap-6 my-24">
            <div className='lg:w-1/2'>
            <img src={face} alt="Album"/>
            </div>
        
        <div className=" ml-6 w-1/2 card-body justify-center mt-18 text-slate-50">
          <h2 className="card-title text-slate-50 text-4xl mb-6">WE CREATE ONLY <br />
               ORGANIC COSMETICS!</h2>
               <hr />
          <div className=' gap-10 grid md:grid-cols-2 grid-cols-1 my-10'>
            <div className=' flex gap-8 justify-center'>
                <img src={power} className='w-12 h-12 rounded-full bg-white' alt="" />
                <div>
                    <h2 className='text-2xl font-semibold'>TOXINS FREE</h2>
                    <p className=' text-base font-thin'>Inspired by apothecary know-how, we always strive to source ingredients</p>
                </div>

            </div>
            <div className=' flex gap-8 justify-center'>
                <img src={organic} className='w-12 h-12 rounded-full bg-white' alt="" />
                <div>
                    <h2 className='text-2xl font-semibold'>
                          ONLY ORGANIC</h2>
                    <p className=' text-base font-thin'>Inspired by apothecary know-how, we always strive to source ingredients</p>
                </div>

            </div>
            <div className=' flex gap-8 justify-center'>
                <img src={clinical} className='w-12 h-12 rounded-full bg-white' alt="" />
                <div>
                    <h2 className='text-2xl font-semibold'>CLINICAL TESTED</h2>
                    <p className=' text-base font-thin'>Inspired by apothecary know-how, we always strive to source ingredients</p>
                </div>

            </div>
            <div className=' flex gap-8 justify-center'>
                <img src={animal} className='w-12 h-12 rounded-full bg-white' alt="" />
                <div>
                    <h2 className='text-2xl font-semibold'>
                          NOT ANIMAL TESTED</h2>
                    <p className=' text-base font-thin'>Inspired by apothecary know-how, we always strive to source ingredients</p>
                </div>

            </div>
          </div>
       
        </div>
      </div>
    );
};

export default CreateItem;