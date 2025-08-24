import { useState } from "react";
import { IoClose } from "react-icons/io5";

const DownloadForm = ({ onClose, onSuccess }) => {
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

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModalInterestChange = (interest) => {
    setModalData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(interest)
        ? prev.interestedIn.filter((i) => i !== interest)
        : [...prev.interestedIn, interest],
    }));
  };

  const handleModalSubmit = () => {
    console.log("Modal form submitted:", modalData);

    // Simulate success and notify parent
    onSuccess();

    // Reset modal form
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
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-[#161616] rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto border border-[#2C2C2C]">
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

          <div>
            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={modalData.designation}
              onChange={handleModalInputChange}
              placeholder="Enter designation here"
              className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
                City
              </label>
              <select
                name="city"
                value={modalData.city}
                onChange={handleModalInputChange}
                className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Other">Other</option>
              </select>
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

          <div>
            <label className="block text-sm font-medium mb-3 text-[#F2F2F2]">
              Interested In:
            </label>
            <div className="flex flex-wrap gap-2">
              {["Coaching", "Events", "Infra"].map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleModalInterestChange(interest)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    modalData.interestedIn.includes(interest)
                      ? "bg-[#00FF01] text-[#0B0B0B] border-[#00FF01] font-semibold"
                      : "bg-[#2C2C2C] text-[#F2F2F2] border-[#2C2C2C] hover:border-[#00FF01]"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
              How did you hear about us?
            </label>
            <textarea
              name="howDidYouHear"
              value={modalData.howDidYouHear}
              onChange={handleModalInputChange}
              placeholder="Message"
              rows={3}
              className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent resize-none"
            />
          </div>

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

export default DownloadForm;
