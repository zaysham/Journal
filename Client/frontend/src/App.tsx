import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/NavbarComponent/Navbar";
import WeatherComponent from "./components/WeatherComponent/WeatherComponent";
import News from "./components/NewsComponent/News";
import CalendarComponent from "./components/CalendarComponent/CalendarComponent";
import Footer from "./components/FooterComponent/Footer";

export default function App() {
  const [weather, setWeather] = useState({
    //create use state for weather data
    country: "",
    city: "",
    temp: "",
    condition: "",
    icon: "",
  });

  const [news, setNews] = useState<
    //create state for news component
    [
      { title: string; description: string; url: string },
      { title: string; description: string; url: string },
      { title: string; description: string; url: string }
    ]
  >([
    { title: "", description: "", url: "" },
    { title: "", description: "", url: "" },
    { title: "", description: "", url: "" },
  ]);

  const fetchWeather = function () {
    //fetches weather from backend

    axios
      .get("http://localhost:3000/weather")
      .then((res) => {
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
    //sends postal code to backend

    axios
      .post("http://localhost:3000/weather", { postal })
      .then(() => {
        if (postal) {
          fetchWeather();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getNews = function () {
    //fetches news from backend
    axios
      .get("http://localhost:3000/news")
      .then((res) => {
        setNews([
          {
            title: res.data[0].title,
            description: res.data[0].description,
            url: res.data[0].url,
          },
          {
            title: res.data[1].title,
            description: res.data[1].description,
            url: res.data[1].url,
          },
          {
            title: res.data[2].title,
            description: res.data[2].description,
            url: res.data[2].url,
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />

      <div className="">
        <div className="row">
          <div className="col-lg-8">
            <CalendarComponent />
          </div>

          <div className="col-lg-4">
            <WeatherComponent weather={weather} sendPostal={sendPostal} />
            <News getNews={getNews} news={news} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
