import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mx-5 mt-5 rounded">
      <h5>External APIs: </h5>

      <p>
        Weather API:{" "}
        <a href="https://www.weatherapi.com/">https://www.weatherapi.com/</a>
      </p>
      <p>
        Calendar API: <a href="https://newsapi.org/">https://newsapi.org/</a>
      </p>
    </footer>
  );
}
