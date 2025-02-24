import "./WeatherComponent.css";

interface WeatherComponentProps {
  weather: {
    country: string;
    city: string;
    temp: string;
    condition: string;
    icon: string;
  };
}

export default function WeatherComponent({ weather }: WeatherComponentProps) {
  return (
    <>
      {weather.country && (
        <div className="p-3 rounded">
          <div className="weatherContainer rounded ms-auto">
            <p>
              Location: {weather.city}, {weather.country}
            </p>
            <p>Temperature: {weather.temp} &#8451;</p>
            <p>Condition: {weather.condition}</p>

            {weather.icon && (
              <img src={weather.icon} alt="Weather Icon" id="weatherIcons" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
