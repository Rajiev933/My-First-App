import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={LOGO_URL} alt="Swiggy Logo" />
          </div>

          <div className="nav-links">
            <ul>
              <li>
                Online Status: {onlineStatus ? <h3 style={{color: "Green"}}>Online</h3>:<h3 style={{color: "Red"}}>Offline</h3>}
              </li>
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
                <Link to="/grocery">Grocery</Link>
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
