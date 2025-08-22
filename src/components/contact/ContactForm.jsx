// import { useState } from "react";
// import { MapPin, Phone, Mail } from "react-icons";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     organizationName: "",
//     city: "",
//     phone: "",
//     email: "",
//     interests: [],
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleInterestChange = (interest) => {
//     setFormData((prev) => ({
//       ...prev,
//       interests: [interest],
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData);
//     alert("Form submitted successfully! Check console for details.");
//     // Handle form submission here
//   };

//   return (
//     <div className="min-h-screen bg-[#0B0B0B] text-[#F2F2F2] p-6">
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
//         {/* Form Section */}
//         <div className="bg-[#161616] rounded-2xl p-8 border border-[#2C2C2C]">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold mb-2">
//               LET'S <span className="text-[#00FF01]">BUILD</span> SOMETHING
//             </h1>
//             <h2 className="text-3xl font-bold text-[#00FF01]">
//               SPORTY TOGETHER.
//             </h2>
//           </div>

//           <div className="space-y-6">
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 placeholder="Enter Full Name"
//                 className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
//               />
//             </div>

//             {/* Organization Name */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Organization Name
//               </label>
//               <input
//                 type="text"
//                 name="organizationName"
//                 value={formData.organizationName}
//                 onChange={handleInputChange}
//                 placeholder="Enter Organization Name"
//                 className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
//               />
//             </div>

//             {/* City and Phone */}
//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   placeholder="Enter City"
//                   className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="Enter Phone Number"
//                   className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Email ID</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter Email ID"
//                 className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
//               />
//             </div>

//             {/* Interests */}
//             <div>
//               <label className="block text-sm font-medium mb-3">
//                 Interested In:
//               </label>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                 {["Coaching", "Infra", "Events", "Merchandise", "Other"].map(
//                   (interest) => (
//                     <button
//                       key={interest}
//                       type="button"
//                       onClick={() => handleInterestChange(interest)}
//                       className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
//                         formData.interests[0] === interest
//                           ? "bg-[#00FF01] text-[#0B0B0B] border-[#00FF01] font-semibold"
//                           : "bg-[#2C2C2C] text-[#F2F2F2] border-[#2C2C2C] hover:border-[#00FF01]"
//                       }`}
//                     >
//                       {interest}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 placeholder="Tell us about your project"
//                 rows={4}
//                 className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent resize-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="w-full bg-gradient-to-b from-teal-300 via-green-400 to-green-500 hover:opacity-90 text-[#0B0B0B] font-bold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
//             >
//               Submit
//             </button>
//           </div>
//         </div>

//         {/* Right Side Content */}
//         <div className="space-y-6">
//           {/* Tennis Court Image Placeholder */}
//           <div
//             className="relative rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat aspect-[3/3]"
//             style={{
//               backgroundImage: "url('/contact_form.jpg')",
//               backgroundPosition: "-600px top", // customize as needed
//             }}
//           ></div>

//           {/* Contact Info */}
//           <div className="bg-gradient-to-b from-teal-300 via-green-400 to-green-500 rounded-2xl p-6 text-[#0B0B0B]">
//             <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <MapPin className="w-6 h-6 flex-shrink-0 mt-0.5" />
//                 <span className="font-semibold text-lg">
//                   Mumbai | Pan-India Projects
//                 </span>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Phone className="w-6 h-6 flex-shrink-0 mt-0.5" />
//                 <span className="font-semibold text-lg">
//                   +91 8655819716 | +91 8779706509
//                 </span>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Mail className="w-6 h-6 flex-shrink-0 mt-0.5" />
//                 <span className="font-semibold text-lg">
//                   connect@sportswizards.in
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import { useState } from "react";
// import { MapPin, Phone, Mail, X } from "react-icons";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

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
    setShowModal(true);
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
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                LET'S <span className="text-[#00FF01]">BUILD</span> SOMETHING
              </h1>
              <h2 className="text-3xl font-bold text-[#00FF01]">
                SPORTY TOGETHER.
              </h2>
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
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter City"
                    className="w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00FF01] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
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
                  {["Coaching", "Infra", "Events", "Merchandise", "Other"].map(
                    (interest) => (
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
                    )
                  )}
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
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-b from-teal-300 via-green-400 to-green-500 hover:opacity-90 text-[#0B0B0B] font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] mt-6"
          >
            Submit
          </button>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6 flex flex-col">
          {/* Tennis Court Image Placeholder */}
          <div className="flex-1 min-h-[300px] lg:min-h-0 relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <img src="/contact_form.jpg" className="object-cover h-full" />
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-b from-teal-300 via-green-400 to-green-500 rounded-2xl p-6 text-[#0B0B0B]">
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

      {/* Modal */}
      {showModal && (
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
                onClick={closeModal}
                className="text-[#B0B0B0] hover:text-[#F2F2F2] transition-colors"
              >
                <X className="w-6 h-6" />
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
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-[#161616] rounded-2xl p-8 max-w-sm w-full text-center border border-[#2C2C2C]">
            <div className="mb-6">
              <CiCircleCheck className="w-16 h-16 text-[#00FF01] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-2">
                Success!
              </h3>
              <p className="text-[#B0B0B0]">
                Your form has been submitted successfully. We'll get back to you
                soon!
              </p>
            </div>
            <button
              onClick={closeSuccess}
              className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:opacity-90 text-[#0B0B0B] font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
