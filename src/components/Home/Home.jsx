import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Home;