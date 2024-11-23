import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Header from '../Home Page/Header';
// import Header from '../Home Page/Header';
import bgcox from "../../images/Rectangle 1.png"
const Details = () => {
    const personDada = useLoaderData()
    const { id, title, description } = personDada

    const handleForm  = (e) =>{
       e.preventDefault()
       const name = e.target.name.value
       if(name.length < 5 ){
        alert("xsvfx ")
       }
    }
    return (
        <div style={{ backgroundImage: `url(${bgcox})` }} className=" bg-[#000000] h-screen bg-cover bg-no-repeat bg-center " >
            <Header></Header>

            <div className="flex items-center justify-center mx-auto gap-5">
                <div className='w-[50%]'>
                    <h1 className="text-black  font-bold text-5xl">{title}</h1>
                    <p className="text-black font-bold text-xl w-6/12">{description}</p>
                </div>

                <div>
                    <div className="">
                        <div className=" flex-col lg:flex-row-reverse">
                            <div className=" bg-base-100 w-full shrink-0 shadow-2xl">
                                <form onSubmit={handleForm } className="card-body w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">origin</span>
                                        </label>
                                        <input type="text" name='name' placeholder="origin" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input type="text" placeholder="Description" className="input input-bordered" required />

                                    </div>

                                    
                                    <div className=" flex gap-3">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Form</span>
                                            </label>
                                            <input type="text" placeholder="Description" className="input input-bordered" required />
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">To</span>
                                            </label>
                                            <input type="text" placeholder="Description" className="input input-bordered" required />
                                        </div>

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Start Boking</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Details;