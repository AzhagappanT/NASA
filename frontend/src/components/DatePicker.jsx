import React, { useState } from 'react';
import { Calendar, Search } from 'lucide-react';

const DatePicker = ({ onDateSelect }) => {
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date) onDateSelect(date);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-4 items-center bg-space-800/50 p-4 rounded-xl border border-white/10 w-full max-w-md">
            <Calendar className="text-accent-500 w-6 h-6" />
            <input
                type="date"
                value={date}
                max={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-white outline-none flex-grow font-sans"
            />
            <button
                type="submit"
                className="p-2 bg-accent-500 hover:bg-accent-400 rounded-lg transition-colors"
            >
                <Search className="w-5 h-5 text-white" />
            </button>
        </form>
    );
};

export default DatePicker;
