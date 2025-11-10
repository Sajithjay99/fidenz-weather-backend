import axios from "axios";
import { cities } from "../data/cities.js";

export function getWeatherData(req, res) {
  const results = [];

  const fetchNext = (index) => {
    if (index >= cities.List.length) {
      res.status(200).json(results);
      return;
    }

    const city = cities.List[index];
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.CityCode}&appid=${process.env.WEATHER_KEY}&units=metric`;

    axios
      .get(url)
      .then((result) => {
        results.push({
          City: city.CityName,
          Temperature: result.data.main.temp,
          Weather: result.data.weather[0].description,
        });
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
