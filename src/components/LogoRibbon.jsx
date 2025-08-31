const LogoRibbon = () => {
  const logos = Array(20).fill("/logo-light.png");

  return (
    <div className="relative w-full h-6 overflow-visible z-50">
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] -rotate-3 -mb-2"> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] -rotate-3 origin-center">
        <div className="flex justify-center bg-white py-1 md:py-2 lg:py-3 shadow-lg">
          {logos.map((logo, index) => (
            <img
              key={`bottom-${index}`}
              src={logo}
              alt="Logo"
              className="h-5 md:h-8 lg:h-10 mx-4 md:mx-6 lg:mx-8 xl:mx-10 flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] rotate-3 origin-center">
        <div className="flex justify-center bg-white py-1 md:py-2 lg:py-3 shadow-lg">
          {logos.map((logo, index) => (
            <img
              key={`top-${index}`}
              src={logo}
              alt="Logo"
              className="h-5 md:h-8 lg:h-10 mx-4 md:mx-6 lg:mx-8 xl:mx-10 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] rotate-3 -mt-2"> */}
    </div>
  );
};

export default LogoRibbon;
