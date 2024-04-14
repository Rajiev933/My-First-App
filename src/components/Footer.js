const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <img src="facebook-icon.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="twitter-icon.png" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="instagram-icon.png" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};


export default Footer;