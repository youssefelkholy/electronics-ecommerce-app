import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./pagination.css";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
    const generatedPages = [];
    for (let i = 1; i <= pages; i++) {
        generatedPages.push(i);
    }
    
    return (
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className="page previous">
                <BsArrowRight />
                السابق
            </button>
            {generatedPages.map((page) => {
                return (
                    <div onClick={()=>setCurrentPage(page)} key={page} className={currentPage === page ? "page active" : "page"}>
                        {page}
                    </div>
                );
            })}
            <button disabled={currentPage === pages} onClick={()=>setCurrentPage((prev)=> prev + 1)} className="page next">
                التالي
                <BsArrowLeft />
            </button>
        </div>
    );
}

export default Pagination;