import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/navbar";
import WeatherComponent from "./components/WeatherComponent";
import News from "./components/News";

export default function App() {
  const [weather, setWeather] = useState({
    country: "",
    city: "",
    temp: "",
    condition: "",
    icon: "",
  });

  const fetchWeather = function () {
    //fetch weather function
    axios
      .get("http://localhost:3000/weather")
      .then((res) => {
        console.log(res.data);
        setWeather({
          country: res.data.location.country,
          city: res.data.location.name,
          temp: res.data.current.temp_c,
          condition: res.data.current.condition.text,
          icon: res.data.current.condition.icon,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendPostal = function (postal: string) {
    //send postal code function

    axios
      .post("http://localhost:3000/weather", { postal })
      .then(() => {
        fetchWeather();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar sendPostal={sendPostal} />

      <WeatherComponent weather={weather} />

      <News />
    </>
  );
}
