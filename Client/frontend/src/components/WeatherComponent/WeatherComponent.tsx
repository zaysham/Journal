import "./WeatherComponent.css";
import { useState } from "react";

interface WeatherComponentProps {
  weather: {
    country: string;
    city: string;
    temp: string;
    condition: string;
    icon: string;
  };
  sendPostal: (post: string) => void;
}

export default function WeatherComponent({
  weather,
  sendPostal,
}: WeatherComponentProps) {
  const [postal, setPostal] = useState("");

  const handleClick = function () {
    setPostal("");
  };
  return (
    <>
      (
      <div className="p-3">
        <div className="weatherContainer rounded ms-auto">
          <div className="mx-5 p-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendPostal(postal);
                handleClick();
              }}
            >
              <input
                className="rounded"
                required
                id="postal"
                type="text"
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
                value={postal}
                placeholder="Postal Code/Zipcode"
              />

              <button className="btn btn-success ms-3">Get Weather</button>
            </form>
          </div>

          <h3 className="mb-3">Local Weather</h3>

          {weather.city && (
            <>
              <p>
                Location: {weather.city}, {weather.country}
              </p>
              <p>Temperature: {weather.temp} &#8451;</p>
              <p>Condition: {weather.condition}</p>
            </>
          )}
          {weather.icon && (
            <img src={weather.icon} alt="Weather Icon" id="weatherIcons" />
          )}
        </div>
      </div>
      )
    </>
  );
}
