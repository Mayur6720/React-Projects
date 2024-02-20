import {
  FaGears,
  FaHandshakeAngle,
  FaThreads,
  FaThumbsUp,
  FaUser,
} from "react-icons/fa6";
import Footer from "../components/Footer";
import { FaComments } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-sung font-bold mb-5">
          Service Page
        </h2>
      </div>
      <div className="w-max-7xl mx-auto text-center py-10 capitalize">
        <p className="text-red-700 font-semibold text-2xl">our services</p>
        <h3 className="text-3xl py-1 font-bold">What We Offer</h3>
        <p className="text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          corrupti temporibus, officiis nisi error nihil omnis rerum?
        </p>
      </div>
      <div className="grid w-3/4 mx-auto gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        <div className="bg-gray-200 shadow-lg p-3 hover:scale-110 transition-all duration-500  rounded-md">
          <FaThumbsUp
            className="text-5xl text-blue-900 py-1"
            icon="fa-regular fa-thumbs-up"
          />
          <h3 className="text-2xl py-1 font-bold ">Service</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            asperiores vero quaerat?
          </p>
        </div>

        <div className="bg-gray-200 shadow-lg p-3 hover:scale-110 transition-all duration-500  rounded-md">
          <FaGears
            className="text-5xl text-blue-900 py-1"
            icon="fa-regular fa-thumbs-up"
          />
          <h3 className="text-2xl py-1 font-bold ">Obstacles</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            asperiores vero quaerat?
          </p>
        </div>

        <div className="bg-gray-200 shadow-lg p-3 hover:scale-110 transition-all duration-500  rounded-md">
          <FaHandshakeAngle
            className="text-5xl text-blue-900 py-1"
            icon="fa-regular fa-thumbs-up"
          />
          <h3 className="text-2xl py-1 font-bold ">Community</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            asperiores vero quaerat?
          </p>
        </div>

        <div className="bg-gray-200 shadow-lg p-3 hover:scale-110 transition-all duration-500  rounded-md">
          <FaUser
            className="text-5xl text-blue-900 py-1"
            icon="fa-regular fa-thumbs-up"
          />
          <h3 className="text-2xl py-1 font-bold ">User</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            asperiores vero quaerat?
          </p>
        </div>

        <div className="bg-gray-200 shadow-lg p-3 hover:scale-110 transition-all duration-500  rounded-md">
          <FaThreads
            className="text-5xl text-blue-900 py-1"
            icon="fa-regular fa-thumbs-up"
          />
          <h3 className="text-2xl py-1 font-bold ">Threading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            asperiores vero quaerat?
          </p>
        </div>

        <div className="bg-gray-200 shadow-lg p-3 hover:scale-110 transition-all duration-500  rounded-md">
          <FaComments
            className="text-5xl text-blue-900 py-1"
            icon="fa-regular fa-thumbs-up"
          />
          <h3 className="text-2xl py-1 font-bold ">Messeges</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            asperiores vero quaerat?
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
