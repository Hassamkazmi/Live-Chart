import React from 'react';
import { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

const labels = ['PTI', 'PMLN'];


const Counter = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    };
    const handleCount1 = () => {
        setCount1(count1 + 1);
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'PTI',
                data: labels.map(() => faker.datatype.number({ min: count, max: count })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'PMLN',
                data: labels.map(() => faker.datatype.number({ min: count1, max: count1 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div>
           PTI  <span>{count}</span><br/>
           PMLN <span>{count1}</span>
           <br/>
            <button onClick={handleCount}>Vote PTI</button>
            <button onClick={handleCount1}>Vote PMLN</button>
            <>
              <div className='chartstyle'>
              <Bar options={options} data={data} />;
              </div>
            </>
        </div>
    );
};

export default Counter;
