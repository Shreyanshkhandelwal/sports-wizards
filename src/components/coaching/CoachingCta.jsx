import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const LOCATIONIQ_API_KEY = "pk.7ecbf6c9de4b96b9d9aa1f935f1b2f3e";

const CoachingCta = ({ onClose, onSuccess }) => {
  const [modalData, setModalData] = useState({
    fullName: "",
    organizationName: "",
    designation: "",
    city: "",
    phone: "",
    email: "",
    interestedIn: [],
    howDidYouHear: "",
  });

  const [cityQuery, setCityQuery] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [loadingCities, setLoadingCities] = useState(false);
  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "city") {
      setCityQuery(value);
    }
  };

  const handleModalInterestChange = (interest) => {
    setModalData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(interest)
        ? prev.interestedIn.filter((i) => i !== interest)
        : [...prev.interestedIn, interest],
    }));
  };

  const handleModalSubmit = async () => {
    const formData = new FormData();

    // 🔹 Map form fields to Google Form entry IDs
    formData.append("entry.1510040030", modalData.fullName);
    formData.append("entry.1222064776", modalData.organizationName);
    formData.append("entry.1528689650", modalData.city);
    formData.append("entry.1877046564", modalData.phone);
    formData.append("entry.929433826", modalData.email);
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdBmcF9GMujUKASpnYSiVYv0uVvT_4otCW0WB85mDOacs4Qkw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      console.log("✅ Submitted to Google Form:", modalData);
      const link = document.createElement("a");
      link.href = "/coaching_Download.pdf";
      link.download = "School@Work by Sports Wizards.pdf";
      link.click();
      onSuccess();
      setModalData({
        fullName: "",
        organizationName: "",
        designation: "",
        city: "",
        phone: "",
        email: "",
        interestedIn: [],
        howDidYouHear: "",
      });
      setCityQuery("");
      setCitySuggestions([]);
    } catch (err) {
      console.error("Error submitting to Google Form:", err);
    }
  };
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
    }, 2000);

    setTypingTimeout(timeout);
  }, [cityQuery]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-bg-secondary rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-misc custom-scrollbar">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">
              Fill out the form to download our latest report
            </h3>
            <p className="text-[#B0B0B0] text-sm">
              and see how we're changing lives through sports.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#B0B0B0] hover:text-[#F2F2F2] transition-colors"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={modalData.fullName}
              onChange={handleModalInputChange}
              placeholder="Enter Full Name"
              className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
            />
          </div>

          {/* Org Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
              Organization / School / Company Name
            </label>
            <input
              type="text"
              name="organizationName"
              value={modalData.organizationName}
              onChange={handleModalInputChange}
              placeholder="Enter Organization Name"
              className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
            />
          </div>

          {/* City + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
                City
              </label>
              <input
                type="text"
                name="city"
                value={modalData.city}
                onChange={handleModalInputChange}
                placeholder="Enter City"
                className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
              />
              {loadingCities && (
                <p className="text-xs text-[#B0B0B0] mt-1">Searching...</p>
              )}
              {citySuggestions.length > 0 && (
                <ul className="absolute left-0 right-0 bg-[#2C2C2C] border border-[#3C3C3C] rounded-lg mt-1 max-h-40 overflow-y-auto z-50">
                  {citySuggestions.map((city, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setModalData((prev) => ({ ...prev, city }));
                        setCityQuery(city);
                        setCitySuggestions([]);
                      }}
                      className="px-4 py-2 text-[#F2F2F2] hover:bg-[#3C3C3C] cursor-pointer"
                    >
                      {city}
                    </li>
                  ))}
                  {/* Attribution */}
                  <li className="px-4 py-2 text-xs text-[#B0B0B0] border-t border-[#3C3C3C]">
                    Powered by{" "}
                    <a
                      href="https://locationiq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      LocationIQ
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={modalData.phone}
                onChange={handleModalInputChange}
                placeholder="Enter Phone Number"
                className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={modalData.email}
              onChange={handleModalInputChange}
              placeholder="Enter Email ID"
              className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleModalSubmit}
            className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:opacity-90 text-[#0B0B0B] font-bold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachingCta;
