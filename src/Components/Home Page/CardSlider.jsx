import React, { useState } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { NavLink, useLoaderData } from "react-router-dom";

const CardSlider = () => {

    const Userdata = useLoaderData()

    // const [chek, setChek] = useState(false)

    // const imageHandle = () => {
    //     setChek(true)
    // }

    // const buttonHandle = () => {
    //     if (chek) {
    //         alert("fgb")
    //         setChek(false)
    //     }
    // }

    return (

        <div className="mt-24 flex gap-3">
            <div className="space-y-5 w-[50%] ">
                <h1 className="text-white text-center font-bold text-5xl">Cox's bazar</h1>
                <p className="text-white font-bold text-xl mx-auto w-6/12">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className="py-1 px-6 rounded-md mx-auto flex bg-[#F9A51A]">Booking</button>
            </div>

            <div>

                <div className="flex items-center gap-5">

                    {
                        Userdata.map(data =>
                            <NavLink to={`/details/${data.id}`}>
                                <div  style={{ backgroundImage: `url(${data.image})` }} className={`bg-cover h-[500px] flex justify-start items-end w-[300px]  bg-no-repeat bg-center`}>
                                    <h1 className="text-white font-bold text-2xl pl-3 py-3">{data.title}</h1>
                                    
                                </div>
                            </NavLink>
                        )
                    }

                </div>

                <div className="flex gap-5 items-center my-20">
                    <div>
                    <FaCircleChevronLeft size={50} />
                    </div>
                    <FaCircleChevronRight size={50} />
                </div>
            </div>
        </div>

    )
};

export default CardSlider;
