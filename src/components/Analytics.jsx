
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { RiArrowDropDownLine, RiArrowDropRightLine, RiArrowUpLine  } from 'react-icons/ri';
import { daysData,weeklyData } from '../lib/constants/chartsData';
import Progressbar from '../helpers/Progressbar';


function Analytics() {
  return (
    <>
        <div className="h-[24rem] bg-white p-3 rounded-sm gap-6 flex flex-row">
        <div className="mt-0.5 w-full flex-1 text-xs border border-gray-200 p-6 shadow-md">
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

	        <div className="mt-1 w-full flex-1 text-xs p-7 border border-gray-200 shadow-md">
                <div className='flex flex-row justify-between items-center'>
                    <div>
                    <p className="font-bold text-xl">NGN 500000</p>
                    <p className='font-xl'>Income this week</p>
                    </div>
                    <div>
                    <button className='border rounded border-gray-200 p-2 text-sm flex flex-row items-center text-teal-600'>12% <RiArrowUpLine /></button>
                    </div>
                    
                </div>
			
                <ResponsiveContainer width="100%" height="80%">
                <AreaChart width={500} height={250} data={daysData}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#7dd3fc" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    
                    <Tooltip />
                    <Area type="monotone" dataKey="Income" stroke="#8884d8" strokeWidth={5} fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
                </ResponsiveContainer>
                <div className='flex flex-row justify-between items-center mt-2' >                    
                    <p className='p-2 text-sm flex flex-row items-center'>Last 7 days <RiArrowDropDownLine /></p>
                    <p className="font-light text-base text-blue-600 flex flex-row items-center">USERS REPORT <RiArrowDropRightLine /></p>
                </div>
	</div>
    

                          {/* progress bar */}
				<div className="mt-1 flex-1 text-xs w-1/2 p-7 border border-gray-200 shadow-md">
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
