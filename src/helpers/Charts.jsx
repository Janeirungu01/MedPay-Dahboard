import { XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { RiArrowDropDownLine, RiArrowUpLine } from "react-icons/ri";
import daysData from '../lib/constants/daysData';


function Charts() {
  return (
    <>
    <div className="h-[24rem] bg-white p-7 rounded-sm border gap-y-px border-gray-200 flex flex-row justify-center ">
	<div className='justify-between text-center w-1/3' >
			<div className='bg-blue-500 justify-start text-white p-7 align-center mt-3'>
			<div className='flex flex-row justify-between'>	
				<div className='flex flex-col justify-start'>		
 				<p>Account Balance</p>				
				<h3 className='font-bold text-white'>NGN 1200000</h3>
				</div>	
				<div className='mb-0'><button className='bg-white rounded-xl text-teal-800 p-3 flex'>12%< RiArrowUpLine/></button></div>				
			</div>
 			</div >
			 <div className='bg-red-700 justify-start text-white p-7 align-center mt-3'>
			<div className='flex flex-row justify-between'>	
				<div className='flex flex-col justify-self-start'>		
 				<p>Total Income</p>				
				<h3 className='font-bold text-white'>NGN 1200000</h3>
				</div>	
				<div className='mb-0'><button className='bg-white rounded-xl text-teal-800 p-3 flex'>12% < RiArrowUpLine/></button></div>				
				</div>
 			</div >
			 <div className='bg-teal-800 justify-start text-white p-7 align-center mt-3'>
			<div className='flex flex-row justify-between'>	
				<div className='flex flex-col justify-self-start'>		
 				<p>Total Expense</p>				
				<h3 className='font-bold text-white'>NGN 314555</h3>
				</div>	
				<div className='mb-0'><button className='bg-white rounded-xl text-teal-800 p-3 flex'>07% < RiArrowUpLine/></button></div>				
				</div>
 			</div >
 		</div>
	<div className="mt-3 flex-1 text-xs mx-10 w-2/3">
		<div className='flex flex-row justify-between items-center'>
			<p className="font-bold text-xl">Transaction Chart</p>
			<button className='border rounded border-gray-200 p-2 text-sm flex flex-row items-center'>Last week <RiArrowDropDownLine /></button>
		</div>
			
		<ResponsiveContainer width="100%" height="90%">
            <LineChart width={500}
						height={300}
						data={daysData}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}>
                <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="Income"  stroke="#ea580c" strokeWidth={2} />
						<Line type="monotone" dataKey="Expense" stroke="#fdba74" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>

	</div>
						
                        
    </div>
    </>
  )
}

export default Charts