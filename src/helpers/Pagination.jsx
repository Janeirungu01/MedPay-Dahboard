import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = ({totalposts, postsPerpage, setCurrentPage, currentPage}) => {
    let pages = [];

    for (let i=1; i<= Math.ceil(totalposts/postsPerpage);i++) {
        pages.push(i)
    }

  return (
    <>
       <div className="pagination">
              <a href="#" className="page-link"> <BiChevronLeft />Previous</a>         

        {pages.map((page, index) => {
            return (
                 <button key={index} onClick={() => setCurrentPage(page)} 
            className={page === currentPage ? 'active' : '' }>
                {page}</button>)
        })
      }
            
            <a href="#" className="page-link">Next<BiChevronRight /></a>
         
      </div>       
            
    </>
  )
  
}

export default Pagination
