import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar">
        <div class="container">
          <div class="logo">
            <img
              src={LOGO_URL}
              alt="Swiggy Logo"
            />
          </div>
          <div class="nav-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Login / Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;