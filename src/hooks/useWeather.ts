import { z } from 'zod';
import { SearchType } from '../interfaces/interface';
import { useMemo, useState } from 'react';
import { fetchGeoData, fetchWeatherData } from '../service/apiWeather';

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

const initialState = {
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
};

const useWeather = () => {
  const [weather, setWeather] = useState<Weather>(initialState);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    setLoading(true);
    setWeather(initialState);
    setNotFound(false);

    try {
      const geoData = await fetchGeoData(search.city, search.country);

      if (!geoData[0]) {
        setNotFound(true);
        return;
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;

      const weatherData = await fetchWeatherData(lat, lon);
      const result = Weather.safeParse(weatherData);

      if (result.success) {
        setWeather(result.data);
        setNotFound(false);
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

  return { weather, loading, notFound, fetchWeather, hasWeatherData };
};

export default useWeather;
