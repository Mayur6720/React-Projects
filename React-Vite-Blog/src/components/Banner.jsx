import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="bg-black text-white py-32 px-4  mx-auto">
        <div className="text-white text-center">
        <h2 className="text-5xl lg:text-7xl font-bold mb-5 leading-sung">Welcome To Our Blog</h2>
        <p className="text-grey-100 lg:w-3/5 w-4/5 mx-auto mb-5 py-4 font-primary">
          Explore the latest in technology trends, insightful articles, and
          expert opinions. This is a brief description providing more context
          and enticing readers to explore further. Blog from various category like tech-industry, latest inovation, Pharma , Bio-technology and many more make yourself comfortable with reading.
        </p>
        <Link className="inline-flex items-center mb-5 gap-2 hover:text-orange-500">Learn More <FaArrowRight className="mt-1 ml-1"/></Link>
        </div>
      </section>
    </>
  );
};

export default Banner