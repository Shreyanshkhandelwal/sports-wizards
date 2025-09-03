import { useState, useEffect } from "react";

// SVG Icons
const IoClose = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
);

const CheckCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);


// Using the same API Key for consistency
const LOCATIONIQ_API_KEY = "pk.7ecbf6c9de4b96b9d9aa1f935f1b2f3e";

// PDF File URL - updated with the provided file
const PDF_URL = "/Courtside@Work by Sports Wizards.pdf";

const CourtsideAtWorkForm = ({ onClose }) => {
    const [modalData, setModalData] = useState({
        fullName: "",
        organizationName: "",
        city: "",
        phone: "",
        email: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [cityQuery, setCityQuery] = useState("");
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(null);

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
    
    const handleCitySelect = (cityName) => {
        setModalData((prev) => ({ ...prev, city: cityName }));
        setCityQuery(cityName);
        setCitySuggestions([]);
    };

    // Submits data to Google Sheets
    const handleModalSubmit = async () => { // Removed 'e' event parameter
        setIsSubmitting(true);
        
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfBv_u505k76x62tTj7-B9X0KbS1z2S_W-Jc-2oD5nF1nB5Xw/formResponse';
        const fieldMapping = {
          fullName: 'entry.1882103435',
          organizationName: 'entry.1509373977',
          city: 'entry.1082079048',
          email: 'entry.1044299949',
          phone: 'entry.1539234833',
        };

        const formDataToSubmit = new FormData();
        formDataToSubmit.append(fieldMapping.fullName, modalData.fullName);
        formDataToSubmit.append(fieldMapping.organizationName, modalData.organizationName);
        formDataToSubmit.append(fieldMapping.city, modalData.city);
        formDataToSubmit.append(fieldMapping.phone, modalData.phone);
        formDataToSubmit.append(fieldMapping.email, modalData.email);

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body: formDataToSubmit,
                mode: 'no-cors',
            });
            
            setShowSuccessMessage(true);

        } catch (error) {
            console.error("Error submitting download form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // This useEffect hook will run when the success message is shown
    useEffect(() => {
        if (showSuccessMessage) {
            // 1. Trigger the PDF download
            const link = document.createElement("a");
            link.href = PDF_URL;
            link.download = "Courtside_At_Work_Report.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // 2. Set a timer to close the modal after 5 seconds
            const timer = setTimeout(() => {
                 if (typeof onClose === 'function') {
                    onClose(); 
                }
                 setShowSuccessMessage(false); // Also hide message
            }, 5000);

            // Cleanup the timer if the component unmounts or user clicks OK
            return () => clearTimeout(timer);
        }
    }, [showSuccessMessage, onClose]);


    // Fetch cities with debounce
    useEffect(() => {
        if (cityQuery.length < 2) {
            setCitySuggestions([]);
            return;
        }
        if (typingTimeout) clearTimeout(typingTimeout);
        const timeout = setTimeout(async () => {
            try {
                const url = `https://api.locationiq.com/v1/autocomplete?q=${encodeURIComponent(cityQuery)}&countrycodes=in&tag=place%3Acity&key=${LOCATIONIQ_API_KEY}`;
                const res = await fetch(url, { method: "GET", headers: { accept: "application/json" } });
                const data = await res.json();
                setCitySuggestions(Array.isArray(data) ? data.map(item => item.display_name) : []);
            } catch (err) {
                console.error("Error fetching cities:", err);
                setCitySuggestions([]);
            }
        }, 1000);
        setTypingTimeout(timeout);
    }, [cityQuery]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
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
                        <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                        <p className="text-[#B0B0B0] mb-6">Your details have been submitted. The report is now downloading.</p>
                        <button
                            onClick={() => {
                                if(typeof onClose === 'function') onClose();
                            }}
                            style={{ background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)" }}
                            className="text-[#0B0B0B] font-bold py-2 px-8 rounded-lg transition-transform transform hover:scale-105"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {!showSuccessMessage && (
                 <div className="bg-[#161616] rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#2C2C2C]">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">Download the Courtside@work Report</h3>
                            <p className="text-[#B0B0B0] text-sm">Fill in your details to get the PDF.</p>
                        </div>
                        <button onClick={() => typeof onClose === 'function' && onClose()} className="text-[#B0B0B0] hover:text-[#F2F2F2] transition-colors">
                            <IoClose className="w-6 h-6" />
                        </button>
                    </div>
                    {/* Changed from onSubmit to a simple div */}
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Full Name</label>
                            <input type="text" name="fullName" required value={modalData.fullName} onChange={handleModalInputChange} placeholder="Enter Full Name" className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]" />
                        </div>
                        {/* Organization Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Organisation Name</label>
                            <input type="text" name="organizationName" required value={modalData.organizationName} onChange={handleModalInputChange} placeholder="Enter Organisation Name" className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]" />
                        </div>
                         {/* City and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Location / City</label>
                                <input type="text" name="city" required value={cityQuery} onChange={handleModalInputChange} placeholder="Start typing a city" autoComplete="off" className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]" />
                                {citySuggestions.length > 0 && (
                                    <ul className="absolute z-10 w-full bg-[#2C2C2C] border border-[#00FF01] rounded-lg mt-1 max-h-40 overflow-y-auto">
                                        {citySuggestions.map((city, idx) => (
                                            <li key={idx} onClick={() => handleCitySelect(city)} className="px-4 py-2 cursor-pointer hover:bg-[#00FF01] hover:text-[#0B0B0B]">{city}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Number</label>
                                <input type="tel" name="phone" required value={modalData.phone} onChange={handleModalInputChange} placeholder="Enter Phone Number" className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]" />
                            </div>
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">Email ID</label>
                            <input type="email" name="email" required value={modalData.email} onChange={handleModalInputChange} placeholder="Enter Email ID" className="w-full bg-[#2C2C2C] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF01]" />
                        </div>
                        {/* IMPORTANT CHANGE HERE */}
                        <button type="button" onClick={handleModalSubmit} disabled={isSubmitting} style={{ background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)" }} className="w-full text-[#0B0B0B] font-bold py-3 px-6 rounded-lg disabled:opacity-50">
                            {isSubmitting ? 'Submitting...' : 'Download Now'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourtsideAtWorkForm;

