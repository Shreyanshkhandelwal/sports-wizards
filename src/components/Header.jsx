const Header = () => {
  return (
    <header className="absolute top-5 left-0 w-full z-[999] flex justify-between items-center px-[5%]">
      <a href="/">
        <img src="/logo.png" className="sm:w-[150px] w-[100px]" />
      </a>
      <ul className="flex items-center justify-center sm:gap-10 gap-5 text-sm sm:text-base">
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
