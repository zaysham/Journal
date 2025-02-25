import { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  sendPostal: (post: string) => void;
}

export default function Navbar({ sendPostal }: NavbarProps) {
  const [postal, setPostal] = useState("");

  const handleClick = function () {
    setPostal("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              id="navbarIcon"
              className="mx-2"
              src="/assets/sunny.png"
              alt="Navbar Icon"
            />
            Now & Noted
            <img id="navbarIcon" src="/assets/notebook.png" alt="Navbar Icon" />
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
                handleClick();
              }}
              className="d-flex ms-auto"
            >
              <input
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
        </div>
      </nav>
    </>
  );
}
