const CategorySelection = ({onSelectCategory, activeCategory}) => {

  const categories = ["Startups","Apps","Gadgets","Health","Fintech","AI","Security","Enterprise","Growth"]

  return (
    <>
    <div className="flex flex-row flex-wrap  justify-start w-3/4">
    <button className={`border px-3 py-1 rounded-lg bg-orange-400 text-white  ${activeCategory === null ? "active-button" : ""}`} onClick={()=>onSelectCategory(null)}>All</button>  
    { 
      categories.map((category)=>(
        <button 
        onClick={()=>onSelectCategory(category)}
        className={`border px-3 py-1 rounded-lg bg-orange-400 text-white ${activeCategory === category ? "active-button" : ""}`} key={category}>{category}</button>
      ))
    }
    </div>
    </>
  )
}

export default CategorySelection