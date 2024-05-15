import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items)
  

  return (
    <div className="header w-screen bg-orange-400 shadow-lg">
      <nav className="navbar">
        <div className="container flex justify-between items-center ml-40 w-2/3">
          <img className=" h-20" src={LOGO_URL} alt="Swiggy Logo" />

          <div className="nav-links">
            <ul className="flex m-5 gap-4">
              <li>
                Online Status:{" "}
                {onlineStatus ? (
                  <h3 style={{ color: "Green" }}>Online</h3>
                ) : (
                  <h3 style={{ color: "Red" }}>Offline</h3>
                )}
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
                <Link to="/cart">Cart ({cartItems.length} items)</Link>
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
              <li>
                <Link className="font-bold">{loggedInUser}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
