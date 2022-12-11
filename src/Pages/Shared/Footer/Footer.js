import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content py-28">
            <div className="items-center grid-flow-col">
                <img className='w-12 rounded-full' src="https://png.pngtree.com/templates/sm/20180713/sm_5b4926c97e15a.jpg" alt=""  />
                <p className='text-lg'>Copyright © 2022 - All right reserved By Md. Al Kafee</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href='https://www.linkedin.com/in/md-al-kafee-6b5981175/' target='blank'>
                    <button className='btn rounded-full'><FaLinkedinIn className='text-2xl'></FaLinkedinIn></button>
                </a>
                <a target='blank' href='https://github.com/sojeeb01768' >
                    <button className='btn rounded-full'>
                        <FaGithub className='text-2xl'
                        ></FaGithub>
                    </button>
                </a>
                <a target='blank' href='https://www.facebook.com/sojeeb.mridha.9/'>
                    <button className='btn rounded-full'><FaFacebook
                        className='text-2xl'></FaFacebook>
                    </button>
                </a>
            </div>
        </footer>
    );
};

export default Footer;