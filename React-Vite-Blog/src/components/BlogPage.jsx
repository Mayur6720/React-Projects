import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./categorySelection";
import SideBar from "../pages/SideBar";

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState('');
  console.log(search);
  const pageSize = 12; // Page Size
  

  useEffect(() => {
    async function fetchBlog(){
      let url = `http://localhost:5000/blogs?`;

      if(selectedCategory){
        url +=`&category=${selectedCategory}`;
        console.log(selectedCategory)
      }
      const response = await fetch(url)
      const data = await response.json();
      setBlogData(data); 
      // console.log(blogData);
  }
    fetchBlog();
  }, [selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category)

  }

  return (
    <>
    {/* search section */}
    <input 
    className="py-2 border-2 w-2/3 sm:w-3/4 md:w-1/3 lg:w-1/3  px-2 mt-3 rounded-md"
    type="text" placeholder="Search by author" 
    value={search} 
    onChange={(e)=> setSearch(e.target.value) 
    }
    />


    {/* category section */}
      <div className="py-3">
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>

      {/* blog card  */}
      <div className="flex flex-row gap-12 justify-around">
        <BlogCard search={search} blogs={blogData} currentPage={currentPage} selectCategory={selectedCategory} pageSize={pageSize}/>

      {/* Side Bar */}
      <div>
        <SideBar />
      </div>
      </div>

    {/* pagenation */}
      <Pagination blogs={blogData} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
    </>
  );
};

export default BlogPage;
