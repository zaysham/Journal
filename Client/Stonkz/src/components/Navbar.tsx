import { useState } from "react";

interface NavbarProps {
  sendPostal: (post: string) => void;
}

export default function Navbar({ sendPostal }: NavbarProps) {
  const [postal, setPostal] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Weather
            <img id="navbarIcon" src="/assets/sunny.png" alt="Navbar Icon" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendPostal(postal);
              }}
              className="d-flex ms-auto"
            >
              <input
                id="postal"
                type="text"
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
                placeholder="Postal Code/Zipcode"
              />

              <button className="btn btn-success ms-3">Get Weather</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
