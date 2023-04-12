// In PetCounts.js

import axios from 'axios';
import React, { useState, useEffect,PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell} from 'recharts';


function Dashboard() {
  const [normalCount, setNormalCount] = useState(0);
  const [criticalCount, setCriticalCount] = useState(0);

  useEffect(() => {
    async function healthCounts() {
      try {
        const response = await axios.get('http://localhost:5000/api/vet/statuscount');
        setNormalCount(response.data.normalCount);
        setCriticalCount(response.data.criticalCount);
      } catch (err) {
        console.error(err);
      }
    }
    healthCounts();
  }, []);


  const data = [
    { name: 'Group A', value: normalCount },
    { name: 'Group B', value: criticalCount },

  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>

<div id="wrapper" class="ml-[500px] mt-[80px] px-4 py-4 mx-auto">
            <div class="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-5">
                <div id="jh-stats-positive" class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded">
                    <div>
                        <div>
                            <p class="flex items-center justify-end text-green-500 text-md">
                                <span class="font-bold">6%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path class="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"/></svg>
                            </p>
                        </div>
                        <p class="text-3xl font-semibold text-center text-gray-800">{normalCount}</p>
                        <p class="text-lg pt-2 text-center text-gray-500">Normal Health</p>
                    </div>
                </div>

                <div id="jh-stats-positive" class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded">
                    <div>
                        <div>
                            <p class="flex items-center justify-end text-green-500 text-md">
                                <span class="font-bold">6%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path class="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"/></svg>
                            </p>
                        </div>
                        <p class="text-3xl font-semibold text-center text-gray-800">{criticalCount}</p>
                        <p class="text-lg text-center pt-2 text-gray-500">Critical Health</p>
                    </div>
                </div>
    
                <div id="jh-stats-negative" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                        <div>
                            <p class="flex items-center justify-end text-red-500 text-md">
                                <span class="font-bold">6%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path class="heroicon-ui" d="M20 9a1 1 0 012 0v8a1 1 0 01-1 1h-8a1 1 0 010-2h5.59L13 10.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 11.6l3.3-3.3a1 1 0 011.4 0l6.3 6.3V9z"/></svg>
                            </p>
                        </div>
                        <p class="text-3xl font-semibold text-center text-gray-800">43</p>
                        <p class="text-lg text-center text-gray-500">New Tickets</p>
                    </div>
                </div>

                <div id="jh-stats-neutral" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                        <div>
                            <p class="flex items-center justify-end text-gray-500 text-md">
                                <span class="font-bold">0%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path class="heroicon-ui" d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z"/></svg>
                            </p>
                        </div>
                        <p class="text-3xl font-semibold text-center text-gray-800">43</p>
                        <p class="text-lg text-center text-gray-500">New Tickets</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="ml-[700px]">

        <PieChart width={400} height={400} class="bg-black" >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
    </>
  );
}

export default Dashboard;
