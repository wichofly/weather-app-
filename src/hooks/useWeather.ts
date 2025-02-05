import axios from 'axios';
import { z } from 'zod';
import { SearchType } from '../interfaces/interface';
import { useMemo, useState } from 'react';

const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
  weather: z.array(
    z.object({
      description: z.string(),
    })
  ),
});

export type Weather = z.infer<typeof Weather>;

const useWeather = () => {
  const [weather, setWeather] = useState<Weather>({
    name: '',
    main: {
      temp: 0,
      feels_like: 0,
      temp_max: 0,
      temp_min: 0,
    },
    weather: [
      {
        description: '',
      },
    ],
  });
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    const api_key = import.meta.env.VITE_API_KEY;
    setLoading(true);

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${api_key}`;

      const { data } = await axios(geoUrl);
      console.log(data);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

      const { data: weatherResult } = await axios(weatherUrl);
      const result = Weather.safeParse(weatherResult);

      if (result.success) {
        setWeather(result.data);
      } else {
        console.log('Wrong answer');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return { weather, loading, fetchWeather, hasWeatherData };
};

export default useWeather;
