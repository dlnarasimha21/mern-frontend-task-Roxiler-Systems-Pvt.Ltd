// src/components/TransactionsStats.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsStats = ({ selectedMonth }) => {
    const [stats, setStats] = useState({ totalSales: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

    const fetchStats = async (month) => {
        const response = await axios.get(`/api/statistics?month=${month}`);
        setStats(response.data);
    };

    useEffect(() => {
        fetchStats(selectedMonth);
    }, [selectedMonth]);

    return (
        <div>
            <h2>Statistics - {selectedMonth}</h2>
            <p>Total Sales: {stats.totalSales}</p>
            <p>Total Sold Items: {stats.totalSoldItems}</p>
            <p>Total Not Sold Items: {stats.totalNotSoldItems}</p>
        </div>
    );
};

export default TransactionsStats;
