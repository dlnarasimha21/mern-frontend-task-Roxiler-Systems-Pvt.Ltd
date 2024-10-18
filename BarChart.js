// src/components/BarChart.js

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = ({ selectedMonth }) => {
    const [data, setData] = useState({});

    const fetchChartData = async (month) => {
        const response = await axios.get(`/api/bar-chart?month=${month}`);
        const priceRanges = response.data.priceRanges;

        const chartData = {
            labels: priceRanges.map(range => range.label),
            datasets: [{
                label: 'Number of Items',
                data: priceRanges.map(range => range.count),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }],
        };

        setData(chartData);
    };

    useEffect(() => {
        fetchChartData(selectedMonth);
    }, [selectedMonth]);

    return (
        <div>
            <h2>Bar Chart Stats - {selectedMonth}</h2>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
