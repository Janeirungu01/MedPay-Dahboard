
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { RiArrowDropDownLine  } from 'react-icons/ri';
import weeklyData from '../lib/constants/weeklyData';
import Progressbar from '../helpers/Progressbar';


function Analytics() {
  return (
    <>
        <div className="h-[24rem] bg-white p-7 rounded-sm border gap-y-px border-gray-200 flex flex-column">
        <div className="mt-3 w-full flex-1 text-xs">
            <strong className="text-gray-700 font-medium">March 2024</strong>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500}
                                height={300}
                                data={weeklyData}
                                margin={{
                                    top: 20,
                                    right: 10,
                                    left: -10,
                                    bottom: 0
                                }}>
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Income" fill="#ea580c"/>
                                <Bar dataKey="Expense" fill="#fdba74"/>
                </BarChart>
            </ResponsiveContainer>
    </div>

	        <div className="mt-3 w-full flex-1 text-xs">
                <div className='flex flex-row justify-between items-center'>
                    <p className="font-bold text-xl">Transaction Chart</p>
                    <button className='border rounded border-gray-200 p-2 text-sm flex flex-row items-center'>Last week <RiArrowDropDownLine /></button>
                </div>
			
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart width={500}
                                height={300}
                                data={weeklyData}
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


                                {/* progress bar */}

				 <div className="mt-3 flex-1 text-xs h-screen w-screen">
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
					</div> 
						
                        
    </div>

            

    </>
  )
}

export default Analytics
