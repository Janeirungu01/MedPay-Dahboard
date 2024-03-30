import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const data = [
	{
		name: 'Week1',
		Expense: 6000,
		Income: 7500
	},
	{
		name: 'week2',
		Expense: 6500,
		Income: 8000
	},
	{
		name: 'week3',
		Expense: 9800,
		Income: 5800
	},
	{
		name: 'week4',
		Expense: 5280,
		Income: 5000
	}
]

function Charts() {
  return (
    <>
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">March 2024</strong>
			<div className="mt-3 w-full flex-1 text-xs">
    <ResponsiveContainer width="40%" height="80%">
        <BarChart width={500}
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
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#ea580c" />
						<Bar dataKey="Expense" fill="#fdba74" />
            </BarChart>
                        </ResponsiveContainer>

						
                        </div>
                        </div>
    </>
  )
}

export default Charts
