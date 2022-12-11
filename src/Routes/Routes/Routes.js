import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blog from "../../Pages/Blog/Blog";
import Banner from "../../Pages/Home/Banner/Banner";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ProjectDetails from "../../Pages/Projects/ProjectDetails";
import Projects from "../../Pages/Projects/Projects";
import Skills from "../../Pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/banner',
                element: <Banner></Banner>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => fetch(`https://my-portfolio-server-tawny.vercel.app/projects/${params.id}`)

            },
        ]
    },
]);

export default router;