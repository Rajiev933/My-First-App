const Footer = () => {
  return (
    <footer className="w-full h-[50px] bg-orange-400">
      <div className="container mt-10 ml-40 w-2/3 flex justify-between ">
        <ul className="flex gap-5 mt-3">
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

        <ul className="flex gap-5 mt-3">
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
    </footer>
  );
};

export default Footer;
