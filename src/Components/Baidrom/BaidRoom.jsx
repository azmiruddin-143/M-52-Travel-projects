import React from 'react';
import img1 from "../../images/Rectangle 26.png"
import img2 from "../../images/Rectangle 27.png"
import img3 from "../../images/Rectangle 28.png"
import map from "../../images/map.jpg"
import Header from '../Home Page/Header';
const BaidRoom = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-64'>
                <h1>252 stays Apr 13-17 3 guests</h1>
                <h1>Stay in Cox’s Bazar</h1>
            </div>
            <div className='flex justify-center gap-7 items-center'>

                <div className='flex gap-3'>
                    <img src={img1} alt="" />
                    <div>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                        <h1>Light bright airy stylish apt & safe
                            peaceful stay</h1>
                    </div>
                </div>
                <div>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BaidRoom;