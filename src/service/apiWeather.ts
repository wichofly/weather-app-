import axios from 'axios';

const api_key = import.meta.env.VITE_API_KEY;

const getGeoUrl = (city: string, country: string) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${api_key}`;

export const fetchGeoData = async (city: string, country: string) => {
  const geoUrl = getGeoUrl(city, country);
  const { data } = await axios(geoUrl);
  return data;
};

const getWeatherUrl = (lat: number, lon: number) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

export const fetchWeatherData = async (lat: number, lon: number) => {
  const weatherUrl = getWeatherUrl(lat, lon);
  const { data } = await axios(weatherUrl);
  return data;
};
