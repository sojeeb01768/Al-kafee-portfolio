import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to="blog" className="justify-between">
                                Blog
                            </Link>
                        </li>
                        <li><Link to="aboutme">About me</Link></li>
                        <li><Link to="skills">Skills</Link></li>
                        <li><Link to="projects">Projects</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl"><span className='text-info'> <span className='text-primary'>P</span> </span> <span className='text-error'>O</span> <span className='text-primary'>RT</span> <span className='text-primary'>F<span className='text-error'>O</span>LI<span className='text-error'>O</span></span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to="blog">
                            Blog
                        </Link>

                    </li>
                    <li><Link to="aboutme">About Me</Link></li>
                    <li><Link to="skills">Skils</Link></li>
                    <li><Link to="projects">Projects</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;