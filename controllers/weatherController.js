import axios from "axios";
import { cities } from "../data/cities.js";

// simple in-memory cache
const cache = {};
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

export function getWeatherData(req, res) {
  const results = [];

  const fetchNext = (index) => {
    if (index >= cities.List.length) {
      res.status(200).json(results);
      return;
    }

    const city = cities.List[index];
    const cached = cache[city.CityCode];
    const now = Date.now();

    // serve cached value if fresh
    if (cached && now - cached.time < CACHE_TIME) {
      results.push(cached.data);
      fetchNext(index + 1);
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.CityCode}&appid=${process.env.WEATHER_KEY}&units=metric`;

    axios
      .get(url)
      .then((result) => {
        const data = {
          City: city.CityName,
          Temperature: result.data.main.temp,
          Weather: result.data.weather[0].description,
        };
        cache[city.CityCode] = { time: now, data }; // store fresh data
        results.push(data);
        fetchNext(index + 1);
      })
      .catch((error) => {
        results.push({
          City: city.CityName,
          error: true,
          message: error.message,
        });
        fetchNext(index + 1);
      });
  };

  fetchNext(0);
}
