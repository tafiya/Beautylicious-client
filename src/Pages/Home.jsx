import BandCard from "../componants/BandCard";
import Banner from "../componants/Banner";
import ClientReview from "../componants/ClientReview";

import CreateItem from "../componants/ExtraSection/CreateItem";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";


const Home = () => {
 
    return (
        <div>
        
       <Navbar></Navbar>
       <Banner></Banner>
       <div className=" max-w-[1400px] mx-auto">
       <BandCard></BandCard>


       </div>
       <CreateItem></CreateItem>
       <div className=" max-w-[1400px] mx-auto">
        <ClientReview></ClientReview>
       

       </div>
       
       
       <Footer></Footer>
            
        </div>
    );
};

export default Home;