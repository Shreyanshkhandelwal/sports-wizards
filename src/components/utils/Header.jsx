// import { useLocation, Link } from "react-router-dom";

// const Header = () => {
//   const location = useLocation();
//   const pathname = location.pathname;

//   return (
//     <header className="absolute top-5 left-0 w-full z-[999] flex justify-between items-center px-[5%]">
//       <Link to="/">
//         <img src="/logo.png" className="sm:w-[150px] w-[100px]" />
//       </Link>
//       <ul className="flex items-center justify-center sm:gap-10 gap-5 text-sm sm:text-base">
//         <li>
//           <Link
//             to="/about"
//             className={pathname === "/about" ? "text-accent" : ""}
//           >
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             className={pathname === "/contact" ? "text-accent" : ""}
//           >
//             Contact Us
//           </Link>
//         </li>
//       </ul>
//     </header>
//   );
// };

// export default Header;

import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
// import { Menu, X } from "react-icons";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const baseNav = [
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const extendedNav = [
    ...baseNav,
    { path: "/events", label: "Events" },
    { path: "/coaching", label: "Coaching" },
    { path: "/equipment", label: "Equipment" },
    { path: "/infra", label: "Infrastructure" },
  ];

  // const navItems = pathname === "/" || pathname === "/contact" ? baseNav : extendedNav;
  const navItems = pathname === "/" ? baseNav : extendedNav;

  return (
    // <header className="absolute top-5 left-0 w-full z-[999] flex justify-between items-center px-[5%]">
    <header className="absolute top-5 left-0 w-full z-[999] flex justify-between items-center px-[5%]">
      {/* Logo */}
      <Link to="/">
        <img src="/logo.png" alt="Logo" className="sm:w-[150px] w-[100px]" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center justify-center gap-8 text-base">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`transition-colors ${
                pathname === item.path
                  ? "text-accent font-semibold"
                  : "text-white hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger (only for non-homepage) */}
      {pathname && (
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp size={28} /> : <IoMdMenu size={28} />}
        </button>
      )}

      {/* Mobile Dropdown Menu */}
      {isOpen && pathname && (
        <div className="fixed top-[50px] right-5 bg-black rounded-lg shadow-lg w-48 p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)} // close menu on click
                  className={`block transition-colors ${
                    pathname === item.path
                      ? "text-accent font-semibold"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
