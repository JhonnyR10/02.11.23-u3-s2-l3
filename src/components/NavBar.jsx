import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/netflix_logo.png";
import user from "../assets/avatar.png";

import { Search, BellFill, Person, Star, Gear } from "react-bootstrap-icons";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <img
            className="navbar-brand"
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "60px" }}
          />
        </Link>
        <button
          className="navbar-toggler order-1 order-md-2 border-white bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-danger"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/TV"
                className={
                  location.pathname === "/TV"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
              >
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#movies"
                role="button"
                aria-expanded="false"
              >
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#RecentlyAdded"
                role="button"
                aria-expanded="false"
              >
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#mylist"
                role="button"
                aria-expanded="false"
              >
                My List
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ms-auto mb-lg-0 d-flex flex-row align-items-center">
          <li>
            <span className="nav-item text-white px-2">
              <Search />
            </span>
          </li>
          <li>
            <span className="nav-item text-white px-2">KIDS</span>
          </li>
          <li className="nav-item dropstart col p-2">
            <button
              type="button"
              className="btn dropdown border-0 rounded-circle text-white"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BellFill />
            </button>
            <ul
              className="dropdown-menu position-absolute top-100 end-0 bg-black"
              style={{ width: "280px" }}
            >
              <li>
                <a className="dropdown-item text-white" href="#Nonotification">
                  No Notification
                </a>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item text-white" href="#null">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropstart p-2 col">
            <button
              type="button"
              className="btn border-0 dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user}
                alt=""
                style={{ width: "35px", height: "35px" }}
              />
            </button>

            <ul
              className="dropdown-menu position-absolute top-100 end-0 bg-black"
              style={{ width: "280px" }}
            >
              <li className="mt-2">
                <div className="row justify-content-center align-items-center">
                  <div className="col col-2">
                    <img
                      src={user}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col col-9 align-items-start">
                    <p className="m-0 ps-2 text-white">Giovanni Longo</p>
                    <p className="m-0 ps-2 text-white">g_l@epicode.com</p>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <hr className="dropdown-divider" />
              </li>
              <li className="mb-2">
                <div className="row justify-content-center">
                  <div className="col-2">
                    <Person className="text-white" />
                  </div>
                  <div className="col-8 align-items-start">
                    <a
                      className="text-decoration-none text-white"
                      href="#profile"
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="row justify-content-center">
                  <div className="col-2">
                    <Star className="text-white" />
                  </div>
                  <div className="col-8 align-items-start">
                    <a className="text-decoration-none text-white" href="#sub">
                      Subscription
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="row justify-content-center">
                  <div className="col-2">
                    <Gear className="text-white" />
                  </div>
                  <div className="col-8 align-items-start">
                    <a
                      className="text-decoration-none text-white"
                      href="#settings"
                    >
                      Settings
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <hr className="dropdown-divider" />
              </li>
              <li className="mb-2 mt-3">
                <div className="row justify-content-center">
                  <a
                    className="text-decoration-none text-white text-center"
                    href="#logout"
                  >
                    Sign Out
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
