import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/travel-logo.png"

const Header = () => {
    
    return (
        <div className='flex justify-center gap-32  items-center'>
            <div>
                <img  src={logo} alt="" />
            </div>
            <div>
                <label className="input  input-bordered flex items-center ">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

             <div className='flex gap-16'>
                 <NavLink to="/">News</NavLink>
                 <NavLink to="/">Destination</NavLink>
                 <NavLink to="/blog">Blog</NavLink>
                 <NavLink to="/">Contact</NavLink>
                 {/* <NavLink to="/baidroom">Baidroom</NavLink> */}
                 
             </div>
             <button className='bg-[#F9A51A] font-bold py-1 px-6 rounded-md'>Login</button>
        </div>

    );
};

export default Header;