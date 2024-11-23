import React from 'react';
import Header from './Header';
import CardSlider from './CardSlider';
import bgcox from "../../images/Rectangle 1.png"


const Home = () => {
    
    return (

        <div style={{ backgroundImage: `url(${bgcox})`}} className=" bg-[#000000] h-screen bg-cover bg-no-repeat bg-center " >
            <Header></Header>
            <CardSlider></CardSlider>

        </div>


    );
};

export default Home;