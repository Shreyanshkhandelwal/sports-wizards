const Footer = () => {
  return (
    <footer className="text-bg-foreground-secondary px-4 py-8 md:p-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/4 md:pr-8 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                className="md:w-1/2 md:min-w-[150px] w-[150px]"
              />
            </div>
            <span className="text-sm leading-relaxed mb-6 md:mb-0">
              Wizards is building India's sporting future through turnkey sports
              infra, structured school coaching, and high-impact events like
              Courtside@Work. Explore our programs.
            </span>
            <div className="flex md:justify-start mt-6 space-x-4 mb-8 md:mb-0">
              <a href="#">
                <img src="/instagram.svg" className="size-8" />
              </a>
              <a href="#">
                <img src="/fb.svg" className="size-8" />
              </a>
              <a href="#">
                <img src="/x_twitter.svg" className="size-8" />
              </a>
              <a href="#">
                <img src="/yt.svg" className="size-9 pb-1" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-left">
            <h5 className="text-white font-bold text-lg mb-2 md:mb-4">
              Quick Links
            </h5>
            <ul className="space-y-1 md:space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/infra"
                  className="hover:text-white transition-colors duration-300"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="/coaching"
                  className="hover:text-white transition-colors duration-300"
                >
                  Coaching
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-white transition-colors duration-300"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/equipment"
                  className="hover:text-white transition-colors duration-300"
                >
                  Equipment
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-left">
            <h5 className="text-white font-bold text-lg mb-2 md:mb-4">
              Legal & Info
            </h5>
            <ul className="space-y-1 md:space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 text-left">
            <h5 className="text-white font-bold text-lg mb-2 md:mb-4">
              Contact
            </h5>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:connect@sportswizards.in"
                className="hover:text-white transition-colors duration-300"
              >
                connect@sportswizards.in
              </a>
            </p>
            <p className="text-sm mt-1 md:mt-2">
              Phone:{" "}
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                +91 8655819716 / +91 8779706509
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-sm">
          <span>&copy; 2025 Sports Wizards. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
