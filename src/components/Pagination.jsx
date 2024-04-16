

const Pagination = ({totalposts, postsPerpage, setCurrentPage, currentPage}) => {
    let pages = [];

    for (let i=1; i<= Math.ceil(totalposts/postsPerpage);i++) {
        pages.push(i)
    }
function prePage () {

}
function nextPage () {
  
}

  return (
    <>
      <div className="pagination">
              <a href="#" className="page-link" onClick={prePage}>Previous</a>
         

        {pages.map((page, index) => {
            return (
                 <button key={index} onClick={() => setCurrentPage(page)} 
            className={page == currentPage ? 'active' : '' }>
                {page}</button>)
        })
      }
            
            <a href="#" className="page-link" onClick={nextPage}>Next</a>
         
      </div>
    </>
  )
}

export default Pagination
