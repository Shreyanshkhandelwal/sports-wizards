import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="absolute top-5 left-0 w-full z-[999] flex justify-between items-center px-[5%]">
      <Link to="/">
        <img src="/logo.png" className="sm:w-[150px] w-[100px]" />
      </Link>
      <ul className="flex items-center justify-center sm:gap-10 gap-5 text-sm sm:text-base">
        <li>
          <Link
            to="/about"
            className={pathname === "/about" ? "text-accent" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={pathname === "/contact" ? "text-accent" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
