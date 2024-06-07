import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['orange', 'limegreen', 'dodgerblue'];

const ChartCard = ({ title, data }) => {
  let i=0;
  const chartData = [
    { name: 'Upcoming', value: data[0] },
    { name: 'Ongoing', value: data[1] },
    { name: 'Completed', value: data[2] }
  ];

  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={chartData}
              cx="80"
              cy="70"
              innerRadius={60}
              outerRadius={75}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <text
              x="85"
              y="75"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={16}
              fontWeight="bold"
            >
              Total 
              123456
            </text>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="details">
          {chartData.map((entry, index) => (
            <p key={index} id={COLORS[i++]}>{entry.name}<span className='end'>{entry.value}</span></p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
