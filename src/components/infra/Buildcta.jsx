import { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";

const LOCATIONIQ_API_KEY = "pk.7ecbf6c9de4b96b9d9aa1f935f1b2f3e";

const Buildcta = ({ onClose }) => {
    const [modalData, setModalData] = useState({
        fullName: "",
        TypeOfsurfaceneeds: [],
        WhoSoonareyoulookingtostart: [],
        city: "",
        phone: "",
        email: "",
        message: "",
    });

    const [cityQuery, setCityQuery] = useState("");
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [loadingCities, setLoadingCities] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleModalCheckboxChange = (name, value) => {
        setModalData((prev) => ({
            ...prev,
            [name]: prev[name].includes(value)
                ? prev[name].filter((i) => i !== value)
                : [...prev[name], value],
        }));
    };

    const handleModalSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("entry.396673442", modalData.fullName);
        formData.append("entry.589072046", modalData.TypeOfsurfaceneeds.join(", "));
        formData.append("entry.575737485", modalData.WhoSoonareyoulookingtostart.join(", "));
        formData.append("entry.334177803", modalData.city);
        formData.append("entry.750359966", modalData.phone);
        formData.append("entry.941026692", modalData.email);
        formData.append("entry.949469690", modalData.message); // This ID has been corrected

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLScm6Ug6zIljevAf5Jv5GIH7QKl26pB9wbp_EeRPRmp2ldcgQw/formResponse",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors",
                }
            );
            console.log("✅ Data successfully saved to Google Form.");

            setIsSubmitted(true);
            setModalData({
                fullName: "",
                TypeOfsurfaceneeds: [],
                WhoSoonareyoulookingtostart: [],
                city: "",
                phone: "",
                email: "",
                message: "",
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
        return () => clearTimeout(timeout);
    }, [cityQuery]);

    const surfaceNeeds = [
        "Basketball Courts", "Football Turfs", "Pickleball Courts", "Padel Courts", "Tennis Courts",
        "Cricket Turfs", "Badminton Court", "Athletic Running track", "Outdoor Multisports",
        "Indoor Multisports", "Kids Play Area", "Gym Flooring"
    ];

    const lookingToStart = [
        "Within 15 days", "Within 1 month", "1-3 months", "Just exploring"
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-bg-secondary rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-misc custom-scrollbar sm:p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">
                            Fill out the form
                        </h3>
                        <p className="text-[#B0B0B0] text-sm">
                            We will contact you soon.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-[#B0B0B0] hover:text-[#F2F2F2] transition-colors"
                    >
                        <IoClose className="w-6 h-6" />
                    </button>
                </div>

                {isSubmitted ? (
                    <div className="text-center p-8 bg-[#2C2C2C] rounded-lg">
                        <h4 className="text-2xl text-[#00FF01] font-bold mb-4">✅ Submitted Successfully!</h4>
                        <p className="text-[#B0B0B0]">Your data has been saved. We will contact you shortly.</p>
                        <button
                            onClick={onClose}
                            className="mt-6 px-6 py-3 bg-[#00FF01] text-[#0B0B0B] font-bold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleModalSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={modalData.fullName}
                                onChange={handleModalInputChange}
                                placeholder="Enter Full Name"
                                className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
                            />
                        </div>

                        {/* Type of Surface Needed */}
                        <div>
                            <label className="block text-sm font-medium mb-3 text-[#F2F2F2]">Type of Surface Needed:</label>
                            <div className="flex flex-wrap gap-2">
                                {surfaceNeeds.map((surface) => (
                                    <button
                                        key={surface}
                                        type="button"
                                        onClick={() => handleModalCheckboxChange("TypeOfsurfaceneeds", surface)}
                                        className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                                            modalData.TypeOfsurfaceneeds.includes(surface)
                                                ? "bg-[#00FF01] text-[#0B0B0B] border-[#00FF01] font-semibold"
                                                : "bg-[#2C2C2C] text-[#F2F2F2] border-[#2C2C2C] hover:border-[#00FF01]"
                                        }`}
                                    >
                                        {surface}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* How soon are you looking to start? */}
                        <div>
                            <label className="block text-sm font-medium mb-3 text-[#F2F2F2]">How soon are you looking to start?</label>
                            <div className="flex flex-wrap gap-2">
                                {lookingToStart.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => handleModalCheckboxChange("WhoSoonareyoulookingtostart", option)}
                                        className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                                            modalData.WhoSoonareyoulookingtostart.includes(option)
                                                ? "bg-[#00FF01] text-[#0B0B0B] border-[#00FF01] font-semibold"
                                                : "bg-[#2C2C2C] text-[#F2F2F2] border-[#2C2C2C] hover:border-[#00FF01]"
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* City + Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">City</label>
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
                                <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Phone</label>
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
                            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Email ID</label>
                            <input
                                type="email"
                                name="email"
                                value={modalData.email}
                                onChange={handleModalInputChange}
                                placeholder="Enter Email ID"
                                className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Message</label>
                            <textarea
                                name="message"
                                value={modalData.message}
                                onChange={handleModalInputChange}
                                placeholder="Enter your message here"
                                rows={3}
                                className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:opacity-90 text-[#0B0B0B] font-bold py-3 px-6 rounded-lg transition-all duration-200"
                        >
                            Submit Now
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Buildcta;
