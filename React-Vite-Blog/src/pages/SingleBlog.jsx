import { useLoaderData } from "react-router";
import { FaReadme, FaUser } from "react-icons/fa";
import SideBar from "./SideBar";
import Footer from "../components/Footer";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2
          className="text-5xl lg:text-7xl leading-snug font-bold
       mb-5"
        >
          Single Blog Page
        </h2>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date} | {category}
          </p>
          <p className="mb-5 text-gray-600">
            <FaReadme className="inline-flex items-center mr-2" /> It take{" "}
            <span className="font-semibold">{reading_time}</span> to read this
            article
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto in voluptate unde dolorum iusto voluptates, itaque
              veritatis enim nostrum, officia beatae vitae cupiditate id
              consectetur qui esse tempore exercitationem sunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto in voluptate unde dolorum iusto voluptates, itaque
              veritatis enim nostrum, officia beatae vitae cupiditate id
              consectetur qui esse tempore exercitationem sunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto in voluptate unde dolorum iusto voluptates, itaque
              veritatis enim nostrum, officia beatae vitae cupiditate id
              consectetur qui esse tempore exercitationem sunt?
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleBlog;
