import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {

    const project = useLoaderData()
    console.log(project);

    return (
        //project details section
        <div class="max-w-4xl mx-6 lg:m-auto md:m-auto lg:my-8 my-8 overflow-hidden  rounded-lg shadow-md dark:bg-zinc-400">
            <h2 className='text-center text-5xl font-bold my-5 text-fuchsia-800 '>Project Details</h2>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='' src={project.imgUrl} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src={project.imgUrl1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src={project.imgUrl2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            <div class="p-6">
                <div>

                    <div className='flex justify-between sm:
              flex-col lg:flex-row gap-4'>
                        <span> <a alt="" href={project.live} target="blank" class="mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{project.title}</a></span>
                        <span>
                            <button className='btn btn-sm'>
                                <a href={project.githubClient} target="blank">Gihub Client Link</a>
                            </button>
                        </span>
                        <span>
                            <button className='btn btn-sm'>
                                <a href={project.githubServer} target="blank">Gihub Server Link</a>
                            </button>
                        </span>
                        <span>
                            <button className='btn btn-sm'>
                                <a href={project.live} target="blank">Live Site Link</a>
                            </button>
                        </span>
                    </div>
                    <h1 className='text-2xl text-white mt-6 font-semibold'>**Features and functionality**</h1>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description1}</p>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description2}</p>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description3}</p>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description4}</p>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description5}</p>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description6}</p>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description7}</p>
                    <p class="mt-2 text-sm text-white dark:text-white"> {project.description8}</p>
                    <h1 className='text-2xl text-white mt-6 font-semibold'>**Technology used in this site**</h1>
                    <p>{project.technology}</p>
                </div>

                <div class="mt-4">
                    <div class="flex items-center">
                        <div class="flex items-center">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProjectDetails;