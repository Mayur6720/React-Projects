import { createBrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleBlog from "./pages/SingleBlog";

const Mainrouting = createBrowserRouter([
  {
    path : '/',
    element : <><Navbar/></>,
    children : [
      {
        path : '/',
        element : <><Home/></>
      },
      {
        path : '/services',
        element : <Services/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/blog',
        element : <Blog/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/blog/:id',
        element : <SingleBlog/>,
        loader : ({params}) => fetch(`http://localhost:5000/blogs?id=${params.id}`)  
      },
    ]
  },
  
])

export default Mainrouting;