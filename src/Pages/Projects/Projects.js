import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

    const projects = [

        {
            "id": "1",
            "title": "Doctor's Portal Online Appointment",
            "project": "1",
            "imgUrl": "https://i.ibb.co/NLDCpnz/Screenshot-1.png",
            "description": " You can booking doctors appointment on this web app",
        },
        {
            "id": "2",
            "title": "Used Mobile Selling and Buying site",
            "project": "2",
            "imgUrl": "https://i.ibb.co/1qbvpfp/5df10d81fd9db229ba736a77.webp",
            "description": " Here, You can buy and sell your mobile phone",
        },
        {
            "id": "3",
            "title": "Quiz App",
            "project": "3",
            "imgUrl": "https://i.ibb.co/Ms5zR80/Screenshot-3.png",
            "description": " This website has authentication system.",
        }
    ]

    return (
        <div >
            <h1 className='text-5xl font-bold my-4 text-fuchsia-700 text-center mb-10'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-10 m-10'>
                {
                    projects.map(project =>
                        <div
                            key={project.id}
                            className="card  bg-base-100 shadow-xl ">
                            <figure><img src={project.imgUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-semibold">
                                    {project.title}
                                </h2>
                                <p>
                                    {project.description}
                                </p>
                                <Link to={`/projects/${project.id}`} className="card-actions justify-end">
                                    <button className="btn w-full btn-success text-white">Project Details</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default Projects;

