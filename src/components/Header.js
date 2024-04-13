import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <nav class="navbar">
        <div class="container">
          <div class="logo">
            <img src={LOGO_URL} alt="Swiggy Logo" />
          </div>

          <div class="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link
                  
                  onClick={() => {
                    loginBtn === "Login"
                      ? setLoginBtn("Logout")
                      : setLoginBtn("Login");
                  }}
                >
                  {loginBtn}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
