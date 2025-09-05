const Footer = () => {
  return (
    <footer className="text-bg-foreground-secondary px-4 py-8 md:p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Description Column */}
          <div className="w-full">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                className="md:w-1/2 md:min-w-[150px] w-[150px]"
                alt="Sports Wizards Logo"
              />
            </div>
            <span className="text-sm leading-relaxed mb-6 md:mb-0">
              A proudly registered initiative under Wincognito Technologies
              Private Limited (WTPL), we are India's leading sports enablement
              brand—architecting turnkey infrastructure, coaching ecosystems,
              and events that bring play to schools, corporates, and
              communities.
            </span>
            <div className="flex md:justify-start mt-6 space-x-4 mb-8 md:mb-0">
              <a href="https://www.instagram.com/sportswizardsindia/">
                <img src="/instagram.svg" className="size-8" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/sportswizardsindia">
                <img src="/fb.svg" className="size-8" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/showcase/sports-wizards">
                <img src="/x_twitter.svg" className="size-8" alt="LinkedIn" />
              </a>
              <a href="https://www.youtube.com/@sportswizards9441">
                <img src="/yt.svg" className="size-9 pb-1" alt="YouTube" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="w-full">
            <span className="text-white font-bold text-lg mb-2 md:mb-4">
              Quick Links
            </span>
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

          {/* Legal & Info Column */}
          <div className="w-full">
            <span className="text-white font-bold text-lg mb-2 md:mb-4">
              Legal & Info
            </span>
            <ul className="space-y-1 md:space-y-2 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
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

          {/* Contact Column */}
          <div className="w-full">
            <span className="text-white font-bold text-lg mb-2 md:mb-4">
              Contact
            </span>
            <p className="text-sm">
              <span className="text-sm">Email:</span>{" "}
              <a
                href="mailto:connect@sportswizards.in"
                className="hover:text-white transition-colors duration-300"
              >
                connect@sportswizards.in
              </a>
            </p>
            <p className="text-sm mt-1 md:mt-2">
              <span className="text-sm">Phone:</span>{" "}
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                +91 8655819716 / +91 8779706509
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-sm border-t border-gray-700">
          <span>&copy; 2025 Sports Wizards. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
