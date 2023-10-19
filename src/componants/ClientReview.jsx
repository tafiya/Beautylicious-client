import review from '../assets/image/j-balla-photography-BilfH1qKpuU-unsplash.jpg'
import client2 from '../assets/image/client1.jpeg';
import client1 from '../assets/image/client3.jpg'

const ClientReview = () => {
    return (
        <div>
            
                   <div className="border border-gray-200 rounded-lg shadow-lg dark:border-gray-700">
            <h2 className="text-center lg:text-4xl text-2xl font-semibold my-8"><span className=" text-rose-500"> Clients </span>Reviews</h2>
            <div className='grid grid-cols-2'>
            <div> <img src={review} className=' h-[600px]' alt="" /></div>
        <div className="grid gap-20   max-w-7xl mx-auto mt-12  md:mb-12 md:grid-cols-1">
    <figure className="flex w-3/4 flex-col items-center justify-center p-8 text-center bg-[hsl(var(--nc) / var(--tw-text-opacity))] border-b border-gray-400 rounded-3xl md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-slate-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4">If you care for your time, I hands down would go with this.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img src={client1} className=" w-16 h-16 rounded-full" alt="" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-slate-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
   
    <figure className="flex w-3/4 flex-col items-center justify-center p-8 text-center bg-[hsl(var(--nc) / var(--tw-text-opacity))] border-b border-gray-400 rounded-3xl md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-slate-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-white">MindBlowing workflow</h3>
            <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next event.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
        <img src={client2} className=" w-16 h-16 rounded-full" alt="" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm text-slate-500 dark:text-slate-500">Software </div>
            </div>
        </figcaption>    
    </figure>

</div>
            </div>
 
        
            
</div>     
            
        </div>
    );
};

export default ClientReview;