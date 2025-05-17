'use client'

import {useState, useEffect} from 'react';
import {Separator} from "@/components/ui/separator";

const Weather = () => {
    const [weather, setWeather] = useState({
        temperature: '21',
        condition: 'Rainy',
        icon: '800',
        timestamp: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Check if we have cached weather data that's less than 15 minutes old
                // Only access localStorage in browser environment
                if (typeof window !== 'undefined') {
                    const cachedWeather = localStorage.getItem('weatherData');
                    if (cachedWeather) {
                        const parsedWeather = JSON.parse(cachedWeather);
                        const now = Date.now();
                        const fifteenMinutesInMs = 15 * 60 * 1000;

                        // If the cached data is less than 15 minutes old, use it
                        if (now - parsedWeather.timestamp < fifteenMinutesInMs) {
                            setWeather(parsedWeather);
                            setLoading(false);
                            return;
                        }
                    }
                }
                
                const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=37.93&lon=23.75&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
                const response = await fetch(weather_url);

                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();

                const weatherData = {
                    temperature: Math.round(data.main.temp).toString(),
                    condition: data.weather[0].main,
                    icon: data.weather[0].id.toString(),
                    timestamp: Date.now()
                };

                // Save to localStorage with timestamp
                if (typeof window !== 'undefined') {
                    localStorage.setItem('weatherData', JSON.stringify(weatherData));
                }

                setWeather(weatherData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching weather data:', err);
                // @ts-expect-error - err is an Error object
                setError(err.message);
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <div className="flex items-center justify-center gap-2 text-white/90">Loading weather...</div>;
    if (error) return <div className="flex items-center justify-center gap-2 text-white/90">Failed to load
        weather</div>;

    return (
        <div className="flex items-center justify-center gap-2 text-white/90">
            <div className="flex flex-col items-center justify-center">
                <i className={`text-4xl md:text-4xl lg:text-6xl font-light tracking-tight text-white mb-2 wi wi-owm-${weather.icon}`}></i>
                <span className="text-4xl font-medium">{weather.temperature}°C</span>

            </div>
            <Separator orientation="vertical" className={'h-12 bg-border/10'}/>
            <span className="text-4xl font-medium">{weather.condition}</span>
        </div>
    );
};

export default Weather;
