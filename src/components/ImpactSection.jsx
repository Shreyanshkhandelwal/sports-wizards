const impactData = [
  { number: "50,000+", unit: "sqft", description: "Sports Infra Built" },
  { number: "25+", unit: "", description: "Events executed" },
  { number: "150+", unit: "", description: "International Participants" },
  { number: "100+", unit: "", description: "Coaches & Crew Members" },
  { number: "1", unit: "VISION", description: "A Sport-Playing Nation" },
];

const StatItem = ({ number, unit, description }) => (
  <div className="text-center p-4">
    <h2 className="text-5xl font-extrabold italic">
      {number}
      {unit && (
        <span className="text-3xl md:text-4xl font-semibold not-italic ml-2">
          {unit}
        </span>
      )}
    </h2>
    <p className="mt-2 text-sm text-bg-foreground-secondary font-medium tracking-wider uppercase">
      {description}
    </p>
  </div>
);

const ImpactSection = () => {
  const topRowData = impactData.slice(0, 3);
  const bottomRowData = impactData.slice(3, 5);

  return (
    <div>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            OUR IMPACT
          </h1>
          <p className="mt-8 text-2xl md:text-4xl font-extrabold text-white italic">
            WE'RE NOT JUST BUILDING COURTS—
            <br />
            WE'RE BUILDING CULTURE
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:hidden">
            {impactData.map((item, index) => (
              <div
                key={index}
                className={`relative pb-8 ${
                  index < impactData.length - 1 ? "gradient-border-b" : ""
                }`}
              >
                <StatItem {...item} />
              </div>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-3">
            {topRowData.map((item, index) => (
              <div
                key={index}
                className={`relative pr-4 ${
                  index < topRowData.length - 1 ? "gradient-border-r" : ""
                }`}
              >
                <StatItem {...item} />
              </div>
            ))}

            <div className="col-span-3 grid grid-cols-2">
              {bottomRowData.map((item, index) => (
                <div
                  key={index}
                  className={`relative pr-4 ${
                    index < bottomRowData.length - 1 ? "gradient-border-r" : ""
                  }`}
                >
                  <StatItem {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
