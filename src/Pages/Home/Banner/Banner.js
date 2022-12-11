import React from 'react';
import image from '../../../image/sojeeb-modified.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-lime-200">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                <img src={image} className="md:w-4/6 w-5/6 
                lg:w-11/12 mx-auto" alt='' />
                <div>
                    <h1 className='text-5xl font-bold my-4 text-fuchsia-700'>Welcome! To My Portfolio</h1>
                    <h1 className="text-4xl font-bold">Hi! I Am Md. Al Kafee</h1>
                    <h2 className='text-3xl font-semibold'>Front-End Web Developer</h2>
                    <p className="py-5 ">
                        I build new projects to tickle my brain. My knowledge in this field will help me to solve any problem in this
                        field. Moreover, my devotion to the job will encourage me to carry on any difficult tasks. I have the skills which
                        will aid me to maintain a good relationship with clients and tea.
                    </p>
                    <a target='blank' href="https://drive.google.com/file/d/1eNy_1b5E73BDpEJjkqwKaqw0h8fxOuKx/view?usp=share_link">
                        <button className="btn btn-wide btn-success text-white">See My Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;