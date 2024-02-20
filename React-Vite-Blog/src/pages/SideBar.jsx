import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((resp) => resp.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);

  return (
    <>
      {/* Latest Blog */}
      <div>
        <h3 className="text-3xl font-bold px-4">Latest Blogs</h3>

        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              className="my-5 border-b-2 border-spacing-2 px-4"
              key={blog.id}
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link className="text-base pb-2 inline-flex items-center mb-5 gap-2 hover:text-orange-500">
                Read More <FaArrowRight className="mt-1 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blog */}

      <div>
        <h3 className="text-3xl font-bold px-4 mt-20">Popular Blogs</h3>

        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              className="my-5 border-b-2 border-spacing-2 px-4"
              key={blog.id}
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link className="text-base pb-2 inline-flex items-center mb-5 gap-2 hover:text-orange-500">
                Read More <FaArrowRight className="mt-1 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
