import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-display">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;