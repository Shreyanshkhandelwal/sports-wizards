const WhoAreWe = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500">
            Who We Are
          </h1>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">

            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide leading-tight">
                  More Than A Vendor, <br /> Your <span className="bg-gradient-to-b from-teal-300 to-green-500 bg-clip-text text-transparent">Sports</span> Partner.
                </h2>
                <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="250" height="16" viewBox="0 0 422 16" fill="none">
                  <path d="M421.207 8.70711C421.598 8.31658 421.598 7.68342 421.207 7.29289L414.843 0.928932C414.453 0.538408 413.819 0.538408 413.429 0.928932C413.038 1.31946 413.038 1.95262 413.429 2.34315L419.086 8L413.429 13.6569C413.038 14.0474 413.038 14.6805 413.429 15.0711C413.819 15.4616 414.453 15.4616 414.843 15.0711L421.207 8.70711ZM0.5 9H420.5V7H0.5V9Z" fill="white" />
                </svg>
              </div>

              <div className="flex flex-row gap-4 w-full px-4">
                <img
                  src="/gym.jpg"
                  alt="Modern gym interior"
                  className="w-1/2 h-80 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/coach.png"
                  alt="Coach with young athletes"
                  className="w-1/2 h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center mt-8 lg:mt-0">
              <img
                src="/children-playing.jpg"
                alt="Children playing soccer"
                className="w-full h-auto object-cover rounded-lg shadow-2xl order-2 lg:order-1"
              />
              <p className="w-full text-bg-foreground-secondary text-base md:text-lg leading-relaxed text-left order-1 lg:order-2 mb-8 lg:mb-0 lg:mt-6">
                At Sports Wizards, we build the future of play—through sports infra, structured coaching, high-impact events, and quality equipment supply. Whether you're a school, residential society, gymkhana, or corporate—we enable access to sports with world-class execution.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}



export default WhoAreWe;
