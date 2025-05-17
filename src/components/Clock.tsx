'use client'

import { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // Format time as HH:MM:SS with AM/PM
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });

            // Format date as Day, Month Date, Year
            const dateString = now.toLocaleDateString('en-GB', {
                weekday: 'long',
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
            });

            setTime(timeString);
            setDate(dateString);
        };

        // Update time immediately and then every second
        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-center animate-pulse-subtle">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-2">
                {time}
            </h1>
            <p className="text-lg md:text-xl text-white/80">{date}</p>
        </div>
    );
};

export default Clock;