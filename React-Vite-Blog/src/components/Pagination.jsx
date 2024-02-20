import { Link } from "react-router-dom";

const Pagination = ({ blogs, onPageChange, currentPage, pageSize }) => {

  const totalPages = Math.ceil(blogs.length /pageSize);
  // console.log(totalPages); 

  const renderPagenationLink = () => {
    return Array.from({length: totalPages},(_, i) => i + 1).map((pageNumber)=>(
    <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
      <Link onClick={() => onPageChange(pageNumber)}>{pageNumber}</Link>
    </li>))
  }

  return (
    <>
    <ul className="pagination flex-wrap gap-8 my-8 flex-row">
      <li>
        <button onClick={()=> onPageChange(currentPage -1)} disabled={currentPage === 1}>Previous</button>
      </li>
      <div className="flex gap-1">{renderPagenationLink()}</div>
      <li>
        <button onClick={()=> onPageChange(currentPage +1)} disabled={currentPage === totalPages}>Next</button>
      </li>
    </ul>
    </>
  )
}

export default Pagination