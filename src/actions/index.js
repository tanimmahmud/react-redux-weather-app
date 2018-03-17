
import axios from 'axios';

const WEATHER_API_KEY = '3ed2152c36e47de16d42e0391eca1b0d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},au`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
