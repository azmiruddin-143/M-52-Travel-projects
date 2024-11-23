import React from 'react';
import Home from '../Components/Home Page/Home';
import { Outlet } from 'react-router-dom';

const MainRoot = () => {
    return (
        <div>
            <Home></Home>
            {/* <Outlet></Outlet> */}
            
        </div>
    );
};



export default MainRoot;