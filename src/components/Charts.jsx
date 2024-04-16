// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
// import Progressbar from './Progressbar'
// import { RiArrowDropDownLine } from "react-icons/ri";


// const data = [
// 	{
// 		name: '01Feb',
// 		Expense: 3000,
// 		Income: 7500
// 	},
// 	{
// 		name: '02Feb',
// 		Expense: 6500,
// 		Income: 8000
// 	},
// 	{
// 		name: '03Feb',
// 		Expense: 9800,
// 		Income: 5800
// 	},
// 	{
// 		name: '04Feb',
// 		Expense: 5280,
// 		Income: 3000
// 	},
// 	{
// 		name: '05Feb',
// 		Expense: 6500,
// 		Income: 8000
// 	},
// 	{
// 		name: '06Feb',
// 		Expense: 4800,
// 		Income: 5800
// 	},
// 	{
// 		name: '07Feb',
// 		Expense: 5280,
// 		Income: 3000
// 	},
// ]

// function Charts() {
//   return (
//     <>
//     <div className="h-[24rem] bg-white p-4 rounded-sm border gap-y-px border-white flex flex-row">
// {/* 
// 		<div className='' >
// 			<div>
// 				<p>Acc Balance</p>
// 				<h3>NGN 1200000</h3>
// 			</div>
// 			<div>
// 				<p>Total Income</p>
// 				<h3>NGN 1200000</h3>
// 			</div>
// 			<div>
// 				<p>Total Expense</p>
// 				<h3>NGN 314555</h3>
// 			</div>

// 		</div> */}
		


// 		<div className="mt-3 w-full flex-3 text-xs">
// 			<div className='flex flex-row justify-between items-center'>
// 				<p className="font-bold text-xl">Transaction Chart</p>
// 				<button className='border rounded border-gray-200 p-2 text-sm flex flex-row items-center'>Last week <RiArrowDropDownLine /></button>
// 			</div>
				
// 			<ResponsiveContainer width="100%" height="90%">
// 				<LineChart width={500}
// 							height={300}
// 							data={data}
// 							margin={{
// 								top: 20,
// 								right: 10,
// 								left: -10,
// 								bottom: 0
// 							}}>
// 					<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
// 							<XAxis dataKey="name" />
							
// 							<Tooltip />
// 							<Legend />
// 							<Line type="monotone" dataKey="Income"  stroke="#ea580c" strokeWidth={2} />
// 							<Line type="monotone" dataKey="Expense" stroke="#fdba74" strokeWidth={2} />
// 				</LineChart>
// 			</ResponsiveContainer>

// 		</div>
						
                        
//     </div>
//     </>
//   )
// }

// export default Charts


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import Progressbar from './Progressbar'
import { RiArrowDropDownLine } from "react-icons/ri";


const data = [
	{
		name: '01Feb',
		Expense: 3000,
		Income: 7500
	},
	{
		name: '02Feb',
		Expense: 6500,
		Income: 8000
	},
	{
		name: '03Feb',
		Expense: 9800,
		Income: 5800
	},
	{
		name: '04Feb',
		Expense: 5280,
		Income: 3000
	},
	{
		name: '05Feb',
		Expense: 6500,
		Income: 8000
	},
	{
		name: '06Feb',
		Expense: 4800,
		Income: 5800
	},
	{
		name: '07Feb',
		Expense: 5280,
		Income: 3000
	},
]

function Charts() {
  return (
    <>
    <div className="h-[24rem] bg-white p-4 rounded-sm border gap-y-px border-gray-200 flex flex-column">
	<div className="mt-3 w-full flex-1 text-xs">
		<div className='flex flex-row justify-between items-center'>
			<p className="font-bold text-xl">Transaction Chart</p>
			<button className='border rounded border-gray-200 p-2 text-sm flex flex-row items-center'>Last week <RiArrowDropDownLine /></button>
		</div>
			
		<ResponsiveContainer width="100%" height="90%">
            <LineChart width={500}
						height={300}
						data={data}
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


		<div className='p-7 justify-between text-center' >
			<div className='bg-blue-500 justify-start text-white p-7 align-center'>
 				<p>Account Balance</p>
				<h3>NGN 1200000</h3>
 			</div >
 			<div className='bg-red-700 justify-start text-white p-7 align-center'>
 				<p>Total Income</p>
 				<h3>NGN 1200000</h3>
 			</div>
 			<div className='bg-teal-800 justify-start text-white p-7 align-center'>
 				<p>Total Expense</p>
 				<h3>NGN 314555</h3>
 			</div>

 		</div>

					{/* <div className="mt-3 flex-1 text-xs h-screen w-screen">
	<p className="text-gray-700 font-medium">Top Categories</p>
			
            <h3 className="heading">Showing data for top income</h3>
			<br />
			<p className="text-center justify-center">Pharmacy  52%</p>
            <Progressbar 
                bgcolor="#065f46"
                progress="52"
                height={15}
            />
			<p className="text-center justify-center">Ob-Gyn  27%</p>
            <Progressbar
                bgcolor="#065f46"
                progress="27"
                height={15}
            />
			<p className="text-center justify-center">Laboratory   82%</p>
            <Progressbar
                bgcolor="#065f46"
                progress="82" 
                height={15}
            />
			<p className="text-center justify-center">Emergency Fund   29%</p>
            <Progressbar
                bgcolor="#065f46"
                progress="29"
                height={15}
            />       
					</div> */}

						
                        
                        </div>
    </>
  )
}

export default Charts