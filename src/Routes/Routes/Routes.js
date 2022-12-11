import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blog from "../../Pages/Blog/Blog";
import Banner from "../../Pages/Home/Banner/Banner";
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
                loader: ({ params }) => fetch(`http://localhost:5000/projects/${params.id}`)

            },
        ]
    },
]);

export default router;