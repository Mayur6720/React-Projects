import BlogPage from "../components/BlogPage";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-sung font-bold mb-5">
          Blog Page
        </h2>
      </div>
      <div className="mx-auto max-w-7xl">
        <BlogPage />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
