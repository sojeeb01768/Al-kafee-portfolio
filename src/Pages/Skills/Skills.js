import React from 'react';



const Skills = () => {
    return (
        <div className='m-auto'>
            <h1 className='text-5xl font-bold text-center my-5 text-fuchsia-700'>About Skills</h1>
            <p className='mx-auto text-center px-10 my-5 text-lg'>
                I have learned different programming languages ​​so far and as far as my skills are concerned
            </p>
            <div
                className=
                "card sm:w-full my-10 border md:w-10/12 bg-base-100  lg:w-10/12 mx-1 md:ml-20 lg:ml-42"
            >
                <div className="card-body">
                    <div className="card-actions justify-center lg:grid grid-cols-2 lg:gap-5">

                        <div className='w-full md:w-full  '>
                            <h4 className='font-semibold text-xl text-center my-5 '>Expertise Front-End</h4>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-black rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "90%" }}>90% HTML</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-accent rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "85%" }}>85% CSS</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-success rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "95%" }}>95% Bootstrap</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-info rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "85%" }}>85% Tailwind</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-warning rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "98%" }}>98% DaisyUI</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-primary rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "68%" }}>68% MaterialUI</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-error rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "75%" }}>75% ReactJS</div>
                            </div>
                        </div>

                        <div className='w-full md:w-full'>
                            <h4 className='font-semibold text-xl my-5 text-center'>Comfortable Back-End</h4>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-accent rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "70%" }}>70% JavaScript</div>
                            </div>

                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-primary rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "60%" }}>60% NodeJS</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-error rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "62%" }}>62% ExpressJS</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-black rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "65%" }}>65% React Hooks</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-secondary rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "60%" }}>60% MongoDB</div>
                            </div>
                            <div className="w-full bg-gray-300 rounded-2xl mb-3">
                                <div className="bg-info rounded-2xl text-xl font-seminold leading-none py-2 text-center text-white" style={{ width: "70%" }}>70% Fire Base</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Skills;