// src/App.js

import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStats from './components/TransactionsStats';
import BarChart from './components/BarChart';

const App = () => {
    const [selectedMonth, setSelectedMonth] = useState('March');

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div>
            <h1>Transactions Dashboard</h1>
            <select onChange={handleMonthChange} value={selectedMonth}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>

            <TransactionsStats selectedMonth={selectedMonth} />
            <TransactionsTable selectedMonth={selectedMonth} />
            <BarChart selectedMonth={selectedMonth} />
        </div>
    );
};

export default App;
