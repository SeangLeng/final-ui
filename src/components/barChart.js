"use client"
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'PortISTAD Chart',
        },
    },
};

const labels = ['2022', '2023'];

export const data = {
    labels,
    datasets: [
        {
            label: 'frontend',
            data: labels.map(() => faker?.datatype?.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgb(0,0,139)',
        },
        {
            label: 'Backend',
            data: labels.map(() => faker?.datatype?.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgb(0,0,120)',
        },
    ],
};

export default function BarChart() {
    return <Bar options={options} data={data} />
}
