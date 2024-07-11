import { Link } from "react-router-dom";
import img1 from "./../../assets/img/logo.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="ma-all">
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 top-0 ">
        <div className="container gap-5">
          <a
            className="navbar-brand d-flex align-items-center gap-2 ma-brand-nav"
            href="/"
          >
            <img src={img1} alt="logo" className="ma-img-nav" />
            <p className="mb-1">UpDate</p>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 align-items-center">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle ma-link-nav"
                  to="/courses"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Photographer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Designer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Programmer
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Animator
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Illustrator
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Marketer
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active ma-link-nav"
                  aria-current="page"
                  href="#"
                >
                  Teachers
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link ma-link-nav" to={"/blogs"}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ma-link-nav" to={"/article"}>
                  Article
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ma-link-nav"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      AR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Marketer
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ma-link-nav"
                  aria-current="page"
                  href="#"
                >
                  Sgin in
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ma-link-nav"
                  aria-current="page"
                  href="#"
                >
                  <button>Trial free</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
