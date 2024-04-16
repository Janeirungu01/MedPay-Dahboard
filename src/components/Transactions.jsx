import { useState } from "react";
import { FaFilter  } from "react-icons/fa";
import Pagination from "./Pagination";
import transactionData from "./data/transactionData";

const Transactions = () => {
    const textColor = transactionData.map(each => {
        if (each.amount === "N20,000") {
            return 'green';
        } else if (each.amount === '-N20,000') {
            return 'orange';
        } else {
            return 'blue';
        }
    });

    const [currentPage, setCurrentPage] =useState (1);
    const [postsPerpage, setPostsPerpage] = useState (14)

    const lastPostIndex = currentPage * postsPerpage;
    const firstPostIndex = lastPostIndex - postsPerpage;
    const currentposts = transactionData.slice(firstPostIndex,lastPostIndex)


  return (
    <>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<div className="flex justify-between py-3 px-2.5 text-sm text-left bg-white">
                <div className=" flex justify-start space-x-4  text-center" >
                <p className="text-gray-700 underline-offset-4 underline-custom font-bold">March,2024</p>             
                <p className='p-0 text-sm text-center'>Income</p>              
                <p className='p-0 text-sm text-center'>Expense</p>              
                </div>
		    <button className='border rounded-2xl border-gray-200 px-2 text-sm flex flex-row items-center gap-1 bg-neutral-50'><FaFilter /> Filter</button> 
         </div> 
            <div className="mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>                            
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>    
                        </tr>
                    </thead>
                    <tbody>
					{currentposts.map((pay, index) => (
                            <tr key={index}>
                                <td>{pay.date}</td>
                                <td>{pay.transactionId}</td>
                                <td>{pay.description}</td>
                                <td>{pay.category}</td>
                                <td style={{ color: textColor[index] }}>{pay.amount}</td>
                            </tr>
                        ))}
            		</tbody>                       
                </table>
            </div>
            
        </div>

        <div>
            <Pagination 
            totalposts={transactionData.length}
            postsPerpage={postsPerpage}
            setCurrentPage={setCurrentPage}
            />
        </div>

        
    </>
    
  )
}
export default Transactions
