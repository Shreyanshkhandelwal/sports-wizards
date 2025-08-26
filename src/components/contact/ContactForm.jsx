import { useRef, useState } from "react";
// import { MapPin, Phone, Mail, X } from "react-icons";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const ContactForm = ({ onSuccess }) => {
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

  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: [interest],
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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    if (onSuccess) {
      onSuccess(); // Trigger the parent’s success modal
    }
  };

  const handleModalSubmit = () => {
    console.log("Modal form submitted:", modalData);
    setShowModal(false);
    setShowSuccess(true);
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

  const closeModal = () => {
    setShowModal(false);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F2F2F2] p-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Form Section */}
        <div className="bg-[#161616] rounded-2xl p-8 border border-[#2C2C2C] flex flex-col justify-between">
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();

              if (!formData.interests[0]) {
                alert("Please select at least one interest.");
                return;
              }

              if (!formRef.current.checkValidity()) {
                formRef.current.reportValidity();
                return;
              }

              handleSubmit();
            }}
          >
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  LET'S <span className="text-accent">BUILD</span> SOMETHING
                  SPORTY TOGETHER.
                </h1>
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
                    required={true}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter Full Name"
                    className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
                  />
                </div>

                {/* Organization Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    required={true}
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    placeholder="Enter Organization Name"
                    className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
                  />
                </div>

                {/* City and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
                      City
                    </label>
                    <select
                      required={true}
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
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      required={true}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email ID
                  </label>
                  <input
                    required={true}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email ID"
                    className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
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
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
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
                    className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              // onClick={handleSubmit}
              style={{
                background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
              }}
              className="w-full  hover:opacity-90 text-[#0B0B0B] font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] mt-6"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6 flex flex-col">
          {/* Tennis Court Image Placeholder */}
          <div className="flex-1 min-h-[300px] lg:min-h-0 relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <img src="/contact_form.jpg" className="object-cover h-full" />
          </div>

          {/* Contact Info */}
          <div
            className="rounded-2xl p-6 text-[#0B0B0B]"
            style={{
              background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MdLocationOn className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-lg">
                  Mumbai | Pan-India Projects
                </span>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-lg">
                  +91 8655819716 | +91 8779706509
                </span>
              </div>

              <div className="flex items-start space-x-4">
                <MdEmail className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-lg">
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
