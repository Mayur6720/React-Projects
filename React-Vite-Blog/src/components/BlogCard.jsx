import { Link } from "react-router-dom";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize, search }) => {
  const filterBlog = blogs
  .filter((blog) => !selectedCategory || blog.category === selectedCategory)
  .slice((currentPage - 1)*pageSize, currentPage * pageSize);
  // console.log(filterBlog);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-4 gap-3">
        {filterBlog.filter((items)=> {
          return search.toLowerCase() === '' ? items : items.author.toLowerCase().includes(search);
        }).map((blog) => 
          <Link to={`/blog/${blog.id}`} key={blog.id} className="p-5 row-span-1 shadow-lg rounded cursor-pointer">
            <div>
              <img src={blog.image} alt="" className="w-full"/>
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-700 cursor-pointer">{blog.title}</h3>
            <p className="mb-2 text-grey-600">{blog.author}</p>
            <p className="text-sm text-grey-500">published : {blog.published_date}</p>
          </Link>
        )}
      </section>
    </>
  );
};

export default BlogCard;
