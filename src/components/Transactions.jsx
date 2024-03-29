const paymentData = [
    {
        transactionId: 'PH56743',
        description: 'Sales',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Pharmacy',
        amount : 'N20,000'  
    },
    {
        transactionId: 'PH56743',
        description: 'New Stocks',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Ob-Gyn',
        amount : 'N20,000'  
    },
    {
        transactionId: 'PH56743',
        description: 'Sales',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Pharmacy',
        amount : 'N20,000'      
    },
    {
        transactionId: 'PH56743',
        description: 'New Items',
        date: 'Today, 12:00PM',
        status: 'Pending',
        category: 'Pharmacy',
        amount : '-N20,000'  
    },
    {
        transactionId: 'PH56743',
        description: 'New Items',
        date: 'Today, 12:00PM',
        status: 'Pending',
        category: 'Laboratory',
        amount : '-N20,000'  
    },
    {
        transactionId: 'PH56743',
        description: 'Malaria tests',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Laboratory',
        amount : 'N20,000'  
    },
];

const Transactions = () => {
    const textColor = paymentData.map(each => {
        if (each.status === "Completed") {
            return 'green';
        } else if (each.status === 'Pending') {
            return 'orange';
        } else {
            return 'blue';
        }
    });

    return (
        <div className="shadow mx-1 px-3 bg-light rounded-3 ">
            <div className=' d-flex align-items-center justify-content-between p-3 mt-3 ' >
                <h4 className="mb-0">Recent Transactions</h4>
                <button className="btn ">Filter</button>
            </div>

            <div className=' '>
                <table className="table ">
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
                        {paymentData.map((pay, index) => (
                            <tr key={index}>
                                <td>{pay.date}</td>
                                <td>{pay.transactionId}</td>
                                <td>{pay.category}</td>
                                <td>{pay.amount}</td>
                                <td style={{ color: textColor[index] }}>{pay.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
