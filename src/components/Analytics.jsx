import {
  BarChart, Bar, Cell, AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer, PieChart, Pie,} from "recharts";
import {  RiArrowDropDownLine, RiArrowDropRightLine, RiArrowUpLine} from "react-icons/ri";
import { daysData, weeklyData, yearlyData } from "../lib/constants/chartsData";
import Progressbar from "../helpers/Progressbar";

export const data = [
{ name: 'Pharmacy', value: 940000},
{ name: 'Laboratory', value: 420000 },
{ name: 'ObGyn', value: 180000 }
];

   

const RADIAN = Math.PI / 180;
const COLORS = ["#1d4ed8", "#ec4899", "#10b981"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
  );
};

function Analytics() {
  return (
    <>
      <div className="flex flex-col mb-7 overflow-hidden overflow-x-hidden">
        <div className="h-[24rem] bg-white p-3 w-screen rounded-sm gap-6 flex flex-row">
          <div className="my-0.5 w-1/2 flex-1 text-xs border border-gray-200 p-6 shadow-md">
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-bold text-base">Income over Expense</p>
              </div>
              <div>
                <p className="text-base flex flex-row">
                  March 2024
                  <RiArrowDropDownLine />
                </p>
              </div>
              <div>
                <p className="text-base flex flex-row items-center text-teal-700">
                  12% <RiArrowUpLine />
                </p>
              </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={weeklyData}
                margin={{
                  top: 20,
                  right: 10,
                  left: -10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Income" fill="#ea580c" />
                <Bar dataKey="Expense" fill="#fdba74" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-1 flex-1 text-xs p-7 border border-gray-200 shadow-md">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="font-bold text-xl">NGN 500000</p>
                <h3 className="">Income this week</h3>
              </div>
              <div>
                <button className="border rounded border-gray-200 p-2 text-sm flex flex-row items-center text-teal-700">
                  12% <RiArrowUpLine />
                </button>
              </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
              <AreaChart
                width={500}
                height={250}
                data={daysData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1A56DB" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#7dd3fc" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Income"
                  stroke="#1A56DB"
                  strokeWidth={5}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
              <div className="flex flex-row justify-between items-center mt-2">
                <p className="p-2 text-sm flex flex-row items-center">
                  Last 7 days <RiArrowDropDownLine />
                </p>
                <p className="font-light text-base text-blue-600 flex flex-row items-center">
                  USERS REPORT <RiArrowDropRightLine />
                </p>
              </div>
            </ResponsiveContainer>
          </div>

          {/* Progress bar */}
          <div className="my-1 flex-1 text-xs p-7 border border-gray-200 shadow-md mr-8">
            <p className="font-bold text-base">Top Categories</p>
            <h3 className="heading">Showing data for top income</h3>
            <br />
            <p className="ml-4 text-center text-sm flex justify-start gap-28">
              <p>Pharmacy</p>
              <p>52%</p>
            </p>
            <Progressbar bgcolor="#ea580c" progress="52" height={15} />
            <p className="m-4 text-center text-sm flex justify-start gap-28">
              <p>Ob-Gyn</p>
              <p>27%</p>
            </p>
            <Progressbar bgcolor="#ea580c" progress="27" height={15} />
            <p className="m-4 text-center text-sm flex justify-start gap-28">
              <p>Laboratory</p>
              <p>82%</p>
            </p>
            <Progressbar bgcolor="#ea580c" progress="82" height={15} />
            <p className="m-4 text-center text-sm flex justify-start gap-28">
              <p>Emergency Fund</p>
              <p>29%</p>
            </p>
            <Progressbar bgcolor="#ea580c" progress="29" height={15} />
          </div>
        </div>

        {/* Bottom part */}
        {/* PieChart */}
        <div className="h-[27rem] flex flex-row justify-between ml-3">
          <div className="w-1/3 h-[27rem] border border-gray-200 shadow-md">
            <ResponsiveContainer width="100%" height="60%">
              <p className="font-bold text-base p-4">Top Categories</p>
              <h3 className="heading pl-4">Showing data for top income</h3> 
              <br />            
                <PieChart width={400} height={300}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="45%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={105}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>             

              <div className="flex flex-row justify-between items-center mt-1">
                <p className="p-2 text-sm flex flex-row items-center">
                  1March- 31March <RiArrowDropDownLine />
                </p>
                <p className="font-light text-base text-blue-600 flex flex-row items-center">
                  INCOME ANALYTICS <RiArrowDropRightLine />
                </p>
              </div>
            </ResponsiveContainer>
          </div>


                    {/* Bottom Right AreaChart*/}
          <div className="w-2/3 ml-5 my-10 mr-2 p-3 ">
            <ResponsiveContainer width="100%" height="100%">
              <ul className="flex flex-row justify-end mr-3 gap-3 p-1">
                <button className="bg-blue-400 border p-2 rounded-md text-white">Yearly</button>
                <button className="bg-gray-200 border p-2 rounded-md">Monthly</button>
                <button className="bg-gray-200 border p-2 rounded-md">Weekly</button>
              </ul>
              <AreaChart
                width={730}
                height={250}
                data={yearlyData}
                margin={{
                  top: 20,
                  right: 10,
                  bottom: 20,
                  left: 10,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 0" />
                <Area dataKey="Expense" stroke="#DCE5F9" fill="#1A56DB" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
