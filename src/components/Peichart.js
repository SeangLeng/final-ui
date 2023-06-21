import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { de } from 'faker/lib/locales';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['No career', 'Have career', 'Learning', 'other'],
    datasets: [
        {
            label: '%',
            data: [5, 40, 30, 25],
            backgroundColor: [
                '#ff9a62',
                '#4ecb71',
                '#ffd233',
                '#85b6ff'
            ],
            borderColor: [
                '#ff9a62',
                '#4ecb71',
                '#ffd233',
                '#85b6ff'
            ],
            borderWidth: 1,
        },
    ],
};

export default function PeiChart() {
    return <Pie data={data} />;
}