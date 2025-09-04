import { useRef, useState, useEffect } from "react";

// SVG Icon Components - no changes here as they were correct.
const MdLocationOn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const MdEmail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const FaPhone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const AlertTriangleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const LOCATIONIQ_API_KEY = "pk.7ecbf6c9de4b96b9d9aa1f935f1b2f3e";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    organizationName: "",
    city: "",
    phone: "",
    email: "",
    interests: [],
    message: "",
  });

  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  // State for city autocomplete
  const [cityQuery, setCityQuery] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    if (cityQuery.length < 2) {
      setCitySuggestions([]);
      return;
    }

    if (typingTimeout) clearTimeout(typingTimeout);

    const timeout = setTimeout(async () => {
      try {
        setLoadingCities(true);

        const url = `https://api.locationiq.com/v1/autocomplete?q=${encodeURIComponent(
          cityQuery
        )}&countrycodes=in&tag=place%3Acity&key=${LOCATIONIQ_API_KEY}`;
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };

        const res = await fetch(url, options);
        const data = await res.json();

        if (Array.isArray(data)) {
          setCitySuggestions(data.map((item) => item.display_name));
        } else {
          setCitySuggestions([]);
        }
      } catch (err) {
        console.error("Error fetching cities:", err);
        setCitySuggestions([]);
      } finally {
        setLoadingCities(false);
      }
    }, 1000); // This was the first syntax error, fixed it.

    setTypingTimeout(timeout);
  }, [cityQuery]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "city") {
      setCityQuery(value);
    }
  };

  const handleCitySelect = (cityName) => {
    setFormData((prev) => ({ ...prev, city: cityName }));
    setCityQuery(cityName);
    setCitySuggestions([]);
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: [interest],
    }));
  };

  // Submission handler to post data to Google Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    if (!formData.interests[0]) {
      setSubmissionError("Please select at least one interest.");
      setIsSubmitting(false);
      return;
    }

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      setIsSubmitting(false);
      return;
    }

    // 1. UPDATED Google Form URL
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdja4jD0SInOsVMW2X5NfoMtvuMv_NSMP2D7JbrHBZUzurfkQ/formResponse";

    // 2. UPDATED Field Mappings for the new form
    const fieldMapping = {
      fullName: "entry.1042556776",
      organizationName: "entry.1931507053",
      city: "entry.484315254",
      phone: "entry.433148822",
      email: "entry.929181916",
      interest: "entry.392719309",
      message: "entry.1245702329",
    };

    // 3. Create a FormData object
    const formDataToSubmit = new FormData();
    formDataToSubmit.append(fieldMapping.fullName, formData.fullName);
    formDataToSubmit.append(
      fieldMapping.organizationName,
      formData.organizationName
    );
    formDataToSubmit.append(fieldMapping.city, formData.city);
    formDataToSubmit.append(fieldMapping.phone, formData.phone);
    formDataToSubmit.append(fieldMapping.email, formData.email);
    formDataToSubmit.append(fieldMapping.interest, formData.interests[0]);
    formDataToSubmit.append(fieldMapping.message, formData.message);

    try {
      // 4. Send data to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors",
      });

      // 5. Handle successful submission
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000);

      // Reset form fields
      setFormData({
        fullName: "",
        organizationName: "",
        city: "",
        phone: "",
        email: "",
        interests: [],
        message: "",
      });
      setCityQuery("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError(
        "Failed to submit the form. Please check the form URL and your internet connection, then try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }; // This was the main syntax error area. The function was not closed properly.

  return (
    <div
      className="min-h-screen bg-[#0B0B0B] text-[#F2F2F2] p-6"
      style={{
        borderBottom: "1px solid",
        borderImageSource:
          "linear-gradient(90deg, #000000 0%, #00FF01 49.05%, #000000 100%)",
        borderImageSlice: 1,
      }}
    >
      <style>{`
            @keyframes scale-in {
                0% { transform: scale(0.9); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }
            .animate-scale-in {
                animation: scale-in 0.3s ease-out forwards;
            }
        `}</style>

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#161616] text-center rounded-2xl p-8 border-2 border-[#00FF01] shadow-lg max-w-sm mx-auto animate-scale-in">
            <CheckCircleIcon className="w-16 h-16 text-[#00FF01] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Submitted!</h3>
            <p className="text-[#B0B0B0] mb-6">
              Your form has been submitted successfully. We will get in touch
              with you soon.
            </p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              style={{
                background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
              }}
              className="text-[#0B0B0B] font-bold py-2 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {/* Error Message Modal */}
      {submissionError && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#161616] text-center rounded-2xl p-8 border-2 border-red-500 shadow-lg max-w-sm mx-auto animate-scale-in">
            <AlertTriangleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Submission Failed
            </h3>
            <p className="text-[#B0B0B0] mb-6">{submissionError}</p>
            <button
              onClick={() => setSubmissionError(null)}
              className="bg-red-600 text-white font-bold py-2 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Form Section */}
        <div className="bg-[#161616] rounded-2xl p-8 border border-[#2C2C2C] flex flex-col justify-between">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div>
              <div className="mb-8">
                <h5
                  className="text-3xl font-bold mb-2"
                  style={{
                    fontSize: "21px",
                  }}
                >
                  LET'S <span className="text-accent">BUILD</span> SOMETHING
                  SPORTY TOGETHER.
                </h5>
              </div>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]"
                  />
                </div>

                {/* Organization Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    required
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    placeholder="Enter your organization's name"
                    className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]"
                  />
                </div>

                {/* City and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={cityQuery}
                      onChange={handleInputChange}
                      placeholder="Start typing your city name"
                      autoComplete="off"
                      className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]"
                    />
                    {/* Suggestions dropdown */}
                    {citySuggestions.length > 0 && (
                      <ul className="absolute z-10 w-full bg-[#2C2C2C] border border-[#00FF01] rounded-lg mt-1 max-h-40 overflow-y-auto">
                        {citySuggestions.map((city, idx) => (
                          <li
                            key={idx}
                            onClick={() => handleCitySelect(city)}
                            className="px-4 py-2 cursor-pointer hover:bg-[#00FF01] hover:text-[#0B0B0B]"
                          >
                            {city}
                          </li>
                        ))}
                        <li className="px-4 py-2 text-xs text-gray-400 border-t border-[#333]">
                          Powered by{" "}
                          <a
                            href="https://locationiq.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://locationiq.com/assets/images/logos/LocationIQ-logo.png"
                              alt="LocationIQ"
                              className="inline h-4 ml-1"
                            />
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email ID"
                    className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]"
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Interested In:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Coaching",
                      "Infra",
                      "Events",
                      "Merchandise",
                      "Other",
                    ].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestChange(interest)}
                        className={`px-4 py-2 rounded-lg border ${
                          formData.interests[0] === interest
                            ? "bg-[#00FF01] text-[#0B0B0B] border-[#00FF01] font-semibold"
                            : "bg-[#2C2C2C] text-[#F2F2F2] border-[#2C2C2C] hover:border-[#00FF01]"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                    <input
                      type="text"
                      name="interest"
                      value={formData.interests[0] || ""}
                      required
                      hidden
                      readOnly
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                fontSize: "18px",
              }}
              className="w-full text-[#0B0B0B] font-bold py-3 px-6 rounded-lg mt-6 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6 flex flex-col">
          <div className="flex-1 min-h-[300px] lg:min-h-0 relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <img
              src="/contact_form.jpg"
              alt="Sports Action"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Contact Info */}
          <div
            className="rounded-2xl p-6 text-[#0B0B0B]"
            style={{
              background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
            }}
          >
            <span
              className="text-2xl font-bold mb-8 block"
              style={{
                fontSize: "18px",
              }}
            >
              Contact Info
            </span>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MdLocationOn className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span
                  className="font-semibold text-lg"
                  style={{ fontSize: "14px" }}
                >
                  Mumbai | Pan-India Projects
                </span>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span
                  className="font-semibold text-lg"
                  style={{ fontSize: "14px" }}
                >
                  +91 8655819716 | +91 8779706509
                </span>
              </div>

              <div className="flex items-start space-x-4">
                <MdEmail className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span
                  className="font-semibold text-lg"
                  style={{ fontSize: "14px" }}
                >
                  connect@sportswizards.in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
