import React from "react";
import { Chart } from "react-google-charts";
import { categoriesData } from "../lib/constants/chartsData";

export const data = [
  ['Category', 'total income'],
		['Pharmacy', 500000],
		['Laboratory', 250000],
		['ObGyn',300000],
		['Triage', 100000],
];


export const options = {
  title: "My Daily Activities",
};

export function Profile() {
  return (
    <div  className="flex flex-row">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
   
  );
}

export default Profile