import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pb-8 text-xl px-10">
          <div className=" pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pr-24 lg:mx-4">
            <p className="font-medium text-xl tracking-wide text-gray-300">
              {" "}
              Category
            </p>
            <ul className="mt-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  World
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  References
                </Link>
              </li>
            </ul>
          </div>
          <div className=" pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pr-24 lg:mx-4">
            <p className="font-medium text-xl tracking-wide text-gray-300">
              {" "}
              Service
            </p>
            <ul className="mt-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  E-paper
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Mobile App
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Megazine
                </Link>
              </li>
            </ul>
          </div>
          <div className=" pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pr-24 lg:mx-4">
            <p className="font-medium text-xl tracking-wide text-gray-300">
              Bussiness
            </p>
            <ul className="mt-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Media
                </Link>
              </li>
            </ul>
          </div>
          <div className=" pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pr-24 ">
            <p className="font-medium text-xl tracking-wide text-gray-300">
              {" "}
              About
            </p>
            <ul className="mt-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Future
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300
            hover:text-orange-500"
                >
                  Multi-Media
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full col-span-1 sm:text-center lg:text-left md:col-span-2 md:text-left lg:col-span-2 pt-16 p-8">
            <h2 className="font-medium text-xl tracking-wide text-gray-300">Subscribe for Updates</h2>
            <input type="email" className="p-2 border-1 rounded-sm" placeholder="Email"/>
            <button className="text-white p-2 mx-2 mt-2 mb-5 border-gray-500 rounded-md border-2">Subscribe</button>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro perferendis in.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
