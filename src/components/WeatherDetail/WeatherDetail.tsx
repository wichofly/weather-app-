import { Weather } from '../../hooks/useWeather';
import styles from './WeatherDetail.module.css';

interface WeatherDetailProps {
  weather: Weather;
}

const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  const formatTemperature = (temp: number) => {
    return Math.round(temp);
  };

  return (
    <div className={styles.container}>
      <h2>Weather in: {weather.name}</h2>

      <p className={styles.description}>{weather.weather[0].description}</p>
      <p className={styles.current}>
        {formatTemperature(weather.main.temp)} &deg;C
      </p>

      <div className={styles.temperatures}>
        <p>
          Sensation: {''}
          <span>{formatTemperature(weather.main.feels_like)} °C</span>
        </p>
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)} °C</span>
        </p>
        <p>
          Max: <span>{formatTemperature(weather.main.temp_max)} °C</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDetail;
