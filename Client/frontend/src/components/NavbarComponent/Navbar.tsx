import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-center">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand rounded mx-auto" href="#">
            <img
              id="navbarIcon"
              className="mx-2"
              src="/assets/sunny.png"
              alt="Navbar Icon"
            />
            Now & Noted
            <img id="navbarIcon" src="/assets/notebook.png" alt="Navbar Icon" />
          </a>
          {/* <button
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
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          ></div> */}
        </div>
      </nav>
    </>
  );
}
