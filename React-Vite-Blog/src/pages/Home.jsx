import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
      <Footer />
    </>
  );
};

export default Home;
