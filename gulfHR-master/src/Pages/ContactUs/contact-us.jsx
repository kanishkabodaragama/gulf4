// import React, { useEffect, useRef, useState } from "react";
// import Lottie from "lottie-react";
// import ContactUsAnime from "./ContactUs - animation.json";
// import ContactDetails from "../../components/ContactUs/contact-details";
// import { useTranslation } from "react-i18next";
// import countries from "./countries";
// import emailjs from "@emailjs/browser"; // Import EmailJS
// import "./contact-us.css";


// const ContactPage = () => {
//   // Translation
//   const { t } = useTranslation();

//   const formRef = useRef(null); // Reference to the form
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const dropdownRef = useRef(null);

//   // Filter countries based on the search term
//   const filteredCountries = countries.filter((country) =>
//       country.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   // Close dropdown when clicking outside of it
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Handle selection of country
//   const handleSelectCountry = (country) => {
//     setSelectedCountry(country);
//     setIsOpen(false);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!selectedCountry) {
//       alert(t("Please select a country"));
//       return;
//     }

//     // Send email using EmailJS
//     emailjs
//         .sendForm(
//             "service_imdvd1t", // Replace with your EmailJS Service ID
//             "template_47w9nwj", // Replace with your EmailJS Template ID
//             formRef.current,
//             "ED2auafugLPgwWowo" // Replace with your EmailJS User ID
//         )
//         .then(
//             (result) => {
//               console.log("SUCCESS!", result.text);
//               alert(t("Your message has been sent successfully!"));
//               e.target.reset(); // Reset form fields
//               setSelectedCountry(""); // Reset selected country
//             },
//             (error) => {
//               console.log("FAILED...", error.text);
//               alert(t("There was an error sending your message. Please try again."));
//             }
//         );
//   };

//   return (
//       <div className="flex flex-col contact-us md:flex-row md:space-x-4">
//         {/* Right side */}
//         <div className=" rightside">
//           <div className="flex justify-center w-[450px] xl:w-[700px] items-center sm:px-20 px-5 font-bold sm:text-[48px] text-[28px] sm:mt-[4rem] mt-6"
//           style={{
//             lineHeight: "1.2", // Adjust line spacing (reduce space between lines)
//             letterSpacing: "-0.5px", // Adjust letter spacing (reduce space between letters)
//           }}>
//             {t("c1")}
//           </div>
//           <div className="flex justify-center items-center xl:w-[650px] w-[420px] text-[18px] font-normal sm:mt-10 mt-6 sm:px-20 px-5 lg:w-[85%]"
//           style={{
//             fontWeight:350, // Adjust letter spacing (reduce space between letters)
//           }}>
//             {t("c2")}
//           </div>
//           <div className="flex">
//             <ContactDetails />
//             <Lottie animationData={ContactUsAnime} className="w-[15rem]" />
//           </div>
//         </div>

//         {/* Left side */}
//         <div className="bg-white sm:px-10 leftside">
//           <div className="flex justify-start items-center sm:px-20 px-6 font-bold tracking-tighter text-[28px] sm:text-[48px] sm:mb-4 mb-8 mt-6 sm:mt-[4.8rem]">
//             {t("cuf1")}
//           </div>
//           <form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               className="items-center mx-6 mb-20 sm:mx-20 max-w"
//           >
//             {/* First Name and Last Name */}
//             <div className="mb-3 sm:flex">
//               <div className="mb-6 sm:mb-0 sm:w-1/2">
//                 <label
//                     htmlFor="firstName"
//                     className="text-[18px] block mb-2  sm:font-normal text-gray-900"
//                 >
//                   {t("firstName")} <span className="text-[#e47470]">*</span>
//                 </label>
//                 <input
//                     type="text"
//                     id="firstName"
//                     name="first_name"
//                     className="shadow-sm bg-gray-50 border border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
//                     placeholder={t("First Name")}
//                     required
//                 />
//               </div>
//               <div className="sm:w-1/2 sm:ml-6">
//                 <label
//                     htmlFor="lastName"
//                     className="text-[18px] block mb-2  sm:font-normal text-gray-900"
//                 >
//                   {t("lastName")} <span className="text-[#e47470]">*</span>
//                 </label>
//                 <input
//                     type="text"
//                     id="lastName"
//                     name="last_name"
//                     className="shadow-sm bg-gray-50 border border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
//                     placeholder={t("Last Name")}
//                     required
//                 />
//               </div>
//             </div>

//             {/* Contact and WhatsApp */}
//             <div className="mb-3 sm:flex">
//               <div className="mb-6 sm:w-1/2 sm:mb-0">
//                 <label
//                     htmlFor="contactNumber"
//                     className="text-[18px] block mb-2 sm:font-normal text-gray-900"
//                 >
//                   {t("contact")} <span className="text-[#e47470]">*</span>
//                 </label>
//                 <input
//                     type="text"
//                     id="contactNumber"
//                     name="contact_number"
//                     className="shadow-sm bg-gray-50 border border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
//                     placeholder="+966 xx xxx xxxx"
//                     required
//                 />
//               </div>
//               <div className="sm:w-1/2 sm:ml-6">
//                 <label
//                     htmlFor="whatsapp"
//                     className="text-[18px] block mb-2  sm:font-normal text-gray-900"
//                 >
//                   {t("whatsapp")}
//                 </label>
//                 <input
//                     type="text"
//                     id="whatsapp"
//                     name="whatsapp"
//                     className="shadow-sm bg-gray-50 border border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
//                     placeholder="+966 xx xxx xxxx"
//                 />
//               </div>
//             </div>

//             {/* Employees and Company Website */}
//             <div className="mb-3 sm:flex">
//               <div className="mb-6 sm:w-1/2 sm:mb-0">
//                 <label
//                     htmlFor="employees"
//                     className="text-[18px] block mb-2  sm:font-normal text-gray-900"
//                 >
//                   {t("employee")} <span className="text-[#e47470]">*</span>
//                 </label>
//                 <input
//                     type="text"
//                     id="employees"
//                     name="employees"
//                     className="shadow-sm bg-gray-50 border border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
//                     placeholder={t("Employees")}
//                     required
//                 />
//               </div>
//               <div className="sm:w-1/2 sm:ml-6">
//                 <label
//                     htmlFor="companyWebsite"
//                     className="text-[18px] block mb-2 sm:font-normal text-gray-900"
//                 >
//                   {t("companyWeb")}
//                 </label>
//                 <input
//                     type="text"
//                     id="companyWebsite"
//                     name="company_website"
//                     className="shadow-sm bg-gray-50 border border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
//                     placeholder="www.company.com"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-3">
//               <label
//                   htmlFor="email"
//                   className="text-[18px] block mb-2  sm:font-normal text-gray-900"
//               >
//                 {t("email")} <span className="text-[#e47470]">*</span>
//               </label>
//               <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="shadow-sm bg-gray-50 border border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
//                   placeholder={t("Email Address")}
//                   required
//               />
//             </div>

            
            
//             {/* Country Dropdown */}
//             <div className="relative z-50 mb-6">
//               <label
//                 htmlFor="country"
//                 className="text-[18px] block mb-2 sm:font-normal text-gray-900"
//               >
//                 {t("country")} <span className="text-[#e47470]">*</span>
//               </label>
//               <input type="hidden" name="country" value={selectedCountry} />
//               <div className="w-full hover:bg-[#e53527] rounded-md z-50">
//                 <button
//                   type="button"
//                   onClick={toggleDropdown}
//                   className="shadow-sm bg-gray-50 border hover:border-[#e53527] border-[#959494] text-gray-900 text-sm rounded-md  w-full p-2.5 flex items-center justify-between"
//                 >
//                   <span className="text-[16px] font-light">
//                     {selectedCountry || t("Select Country")}
//                   </span>
//                   <svg
//                     className="w-5 h-5 text-gray-500"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 {isOpen && (
//                   <div
//                     ref={dropdownRef}
//                     className="absolute z-50 w-full rounded-md shadow-lg bg-[#FFFFFF] font-light"
//                     style={{
//                       bottom: '55%', // Position dropdown above button
//                       left: 0,
//                     }}
//                   >
//                     {/* Search Input */}
//                     <div className="p-2 ">
//                       <input
//                         type="text"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         placeholder={t("Search country")}
//                         className="w-full p-2 text-sm border border-[#808080] rounded-md"
//                       />
//                     </div>

//                     {/* Dropdown Items */}
//                     <div className="z-50 overflow-y-auto max-h-60 h-[200px]">
//                       {filteredCountries.map((country) => (
//                         <button
//                           key={country}
//                           type="button"
//                           onClick={() => handleSelectCountry(country)}
//                           className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
//                           style={{
//                             borderBottom: '1px solid #ddd', // Item separator
//                           }}
//                         >
//                           {country}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>


//             {/* Terms and Message */}
//             <div className="flex items-start mb-5">
//               <div className="flex items-center h-5">
//                 <input
//                     id="terms"
//                     type="checkbox"
//                     className="w-4 h-4 border-gray-300 rounded bg-gray-50"
//                     required
//                     defaultChecked={true}
//                 />
//               </div>
//               <label
//                   htmlFor="terms"
//                   className="ms-2  font-medium text-[#e53527]"
//               >
//                 {t("freeDemo")}
//               </label>
//             </div>
//             <div className="mb-5">
//               <label
//                   htmlFor="message"
//                   className="text-[18px] block mb-2  sm:font-normal text-gray-900"
//               >
//                 {t("message")} <span className="text-[#e47470]">*</span>
//               </label>
//               <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   className="shadow-sm bg-gray-50 border  border-[#959494] text-gray-900 text-[16px] rounded-lg block w-full p-2.5"
//                   placeholder={t("message")}
//                   required
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="mt-[2.7rem]">
//               <button type="submit" className="contact-button" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight:"500" }}>
//                 <p className="text-animation">{t("button")}</p>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//   );
// };

// export default ContactPage;



import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import ContactUsAnime from "./ContactUs - animation.json";
import ContactDetails from "../../components/ContactUs/contact-details";
import { useTranslation } from "react-i18next";
import countries from "./countries";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./contact-us.css";


const ContactPage = () => {
  // Translation
  const { t } = useTranslation();
  const formRef = useRef(null); // Reference to the form
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const dropdownRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    whatsapp: "",
    employees: "",
    company_website: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter countries based on the search term
  const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle selection of country
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setErrors((prevErrors) => ({ ...prevErrors, country: "" }));
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.first_name) formErrors.first_name = t("This field is required");
    if (!formData.last_name) formErrors.last_name = t("This field is required");
    if (!formData.contact_number) formErrors.contact_number = t("This field is required");
    if (!formData.employees) formErrors.employees = t("This field is required");
    if (!selectedCountry) formErrors.country = t("This field is required");
    if (!formData.message) formErrors.message = t("This field is required");
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    // if (!selectedCountry) {
    //   alert(t("Please select a country"));
    //   return;
    // }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Send email using EmailJS
    emailjs
        .sendForm(
            "service_imdvd1t", // Replace with your EmailJS Service ID
            "template_47w9nwj", // Replace with your EmailJS Template ID
            formRef.current,
            "ED2auafugLPgwWowo" // Replace with your EmailJS User ID
        )
        .then(
            (result) => {
              console.log("SUCCESS!", result.text);
              // alert(t("Your message has been sent successfully!"));
              // e.target.reset(); // Reset form fields
              setFormData({
                first_name: "",
                last_name: "",
                contact_number: "",
                whatsapp: "",
                employees: "",
                company_website: "",
                email: "",
                message: "",
              });
              setSelectedCountry(""); // Reset selected country
              setIsSubmitted(true);
            },
            (error) => {
              console.log("FAILED...", error.text);
              alert(t("There was an error sending your message. Please try again."));
            }
        );
  };

  return (
      <div className="flex flex-col contact-us md:flex-row md:space-x-4">
        {/* Right side */}
        <div className=" rightside">
          <div className="flex justify-center w-[450px] xl:w-[700px] items-center sm:px-20 px-5 font-bold sm:text-[48px] text-[28px] sm:mt-[4rem] mt-6"
          style={{
            lineHeight: "1.2", // Adjust line spacing (reduce space between lines)
            letterSpacing: "-0.5px", // Adjust letter spacing (reduce space between letters)
          }}>
            {t("c1")}
          </div>
          <div className="flex justify-center items-center xl:w-[650px] w-[420px] text-[18px] font-normal sm:mt-10 mt-6 sm:px-20 px-5 lg:w-[85%]"
          style={{
            fontWeight:350, // Adjust letter spacing (reduce space between letters)
          }}>
            {t("c2")}
          </div>
          <div className="flex">
            <ContactDetails />
            <Lottie animationData={ContactUsAnime} className="w-[15rem]" />
          </div>
        </div>

        {/* Left side */}
        <div className="bg-white sm:px-10 leftside">
          <div className="flex justify-start items-center sm:px-20 px-6 font-bold tracking-tighter text-[28px] sm:text-[48px] sm:mb-4 mb-8 mt-6 sm:mt-[4.8rem]">
            {t("cuf1")}
          </div>
          {isSubmitted ? (
          <div className="thank-you-message">
            <h2 className="text-[24px] font-bold text-center mt-20">{t("Thank you for your message!")}</h2>
            <p className="text-center mt-4 text-[16px]">{t("We will get in touch with you shortly")}</p>
          </div>
          ) : (
          <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="items-center mx-6 mb-20 sm:mx-20 max-w"
          >
            {/* First Name and Last Name */}
            <div className="mb-3 sm:flex">
              <div className="mb-6 sm:mb-0 sm:w-1/2">
                <label
                    htmlFor="firstName"
                    className="text-[18px] block mb-2  sm:font-normal text-gray-900"
                >
                  {t("firstName")} <span className="text-[#e47470]">*</span>
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className={`shadow-sm bg-gray-50 border hover:border-[#000] text-gray-900 text-[16px] border-[#959494] rounded-md block w-full p-2.5 ${
                      errors.first_name ? "border-[#e47470]" : "border-gray-300"
                    }`}
                    placeholder={t("First Name")}
                    
                />
                {errors.first_name && <p className="text-sm text-[#d84545]">{errors.first_name}</p>}
              </div>
              <div className="sm:w-1/2 sm:ml-6">
                <label
                    htmlFor="lastName"
                    className="text-[18px] block mb-2  sm:font-normal text-gray-900"
                >
                  {t("lastName")} <span className="text-[#e47470]">*</span>
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    value={formData.last_name}
                onChange={handleInputChange}
                className={`shadow-sm bg-gray-50 border text-gray-900 hover:border-[#000] border-[#959494] text-[16px] rounded-md block w-full p-2.5 ${
                  errors.last_name ? "border-[#e47470]" : "border-gray-300"
                }`}
                    placeholder={t("Last Name")}

                />
                {errors.last_name && <p className="text-sm text-[#d84545]">{errors.last_name}</p>}
              </div>
            </div>

            {/* Contact and WhatsApp */}
            <div className="mb-3 sm:flex">
              <div className="mb-6 sm:w-1/2 sm:mb-0">
                <label
                    htmlFor="contactNumber"
                    className="text-[18px] block mb-2 sm:font-normal text-gray-900"
                >
                  {t("contact")} <span className="text-[#e47470]">*</span>
                </label>
                <input
                    type="number"
                    id="contactNumber"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleInputChange}
                    className={`shadow-sm bg-gray-50 border hover:border-[#000] border-[#959494] text-gray-900 text-[16px] hover-bo rounded-md block w-full p-2.5 ${
                      errors.contact_number ? "border-[#e47470]" : "border-gray-300"
                    }`}
                    placeholder="+966 xx xxx xxxx"
                    
                />
                {errors.contact_number && <p className="text-sm text-[#d84545]">{errors.contact_number}</p>}
              </div>
              <div className="sm:w-1/2 sm:ml-6">
                <label
                    htmlFor="whatsapp"
                    className="text-[18px] block mb-2  sm:font-normal text-gray-900"
                >
                  {t("whatsapp")}
                </label>
                <input
                    type="number"
                    id="whatsapp"
                    name="whatsapp"
                    className="shadow-sm bg-gray-50 border hover:border-[#000] border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
                    placeholder="+966 xx xxx xxxx"
                />
              </div>
            </div>

            {/* Employees and Company Website */}
            <div className="mb-3 sm:flex">
              <div className="mb-6 sm:w-1/2 sm:mb-0">
                <label
                    htmlFor="employees"
                    className="text-[18px] block mb-2  sm:font-normal text-gray-900"
                >
                  {t("employee")} <span className="text-[#e47470]">*</span>
                </label>
                <input
                    type="number"
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className={`bg-gray-50 text-gray-900 border hover:border-[#000] border-[#959494] text-[16px] rounded-md shadow-sm block w-full p-2.5 ${
                      errors.employees ? "border-[#e47470]" : "border-gray-300"
                    }`}
                    placeholder={t("Employees")}
                    
                />
                {errors.employees && <p className="text-sm text-[#d84545]">{errors.employees}</p>}
              </div>
              <div className="sm:w-1/2 sm:ml-6">
                <label
                    htmlFor="companyWebsite"
                    className="text-[18px] block mb-2 sm:font-normal text-gray-900"
                >
                  {t("companyWeb")}
                </label>
                <input
                    type="text"
                    id="companyWebsite"
                    name="company_website"
                    className="shadow-sm bg-gray-50 border hover:border-[#000] border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
                    placeholder="www.company.com"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label
                  htmlFor="email"
                  className="text-[18px] block mb-2  sm:font-normal text-gray-900"
              >
                {t("email")} <span className="text-[#e47470]">*</span>
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border hover:border-[#000] border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5"
                  placeholder={t("Email Address")}
                  
              />
            </div>

            
            
            {/* Country Dropdown */}
            <div className="relative z-50 mb-6">
              <label
                htmlFor="country"
                className="text-[18px] block mb-2 sm:font-normal text-gray-900"
              >
                {t("country")} <span className="text-[#e47470]">*</span>
              </label>
              <input type="hidden" name="country" value={selectedCountry} />
              <div>
                <div className="w-full hover:bg-[#e53527] rounded-md z-50">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    value={formData.country}
                    onChange={handleInputChange}
                    className="shadow-sm bg-gray-50 border hover:border-[#e53527] border-[#959494] text-gray-900 text-sm rounded-md  w-full p-2.5 flex items-center justify-between"
                  >
                    <span className="text-[16px] font-light">
                      {selectedCountry || t("Select Country")}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {errors.country && <p className="text-sm text-[#d84545]">{errors.country}</p>}
                {isOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-50 w-full rounded-md shadow-lg bg-[#FFFFFF] font-light"
                    style={{
                      bottom: '55%', // Position dropdown above button
                      left: 0,
                    }}
                  >
                    {/* Search Input */}
                    <div className="p-2 ">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={t("Search country")}
                        className="w-full p-2 text-sm border border-[#808080] rounded-md"
                      />
                    </div>

                    {/* Dropdown Items */}
                    <div className="z-50 overflow-y-auto max-h-60 h-[200px]">
                      {filteredCountries.map((country) => (
                        <button
                          key={country}
                          type="button"
                          onClick={() => handleSelectCountry(country)}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          style={{
                            borderBottom: '1px solid #ddd', // Item separator
                          }}
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* Terms and Message */}
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-50"
                    required
                    defaultChecked={true}
                />
              </div>
              <label
                  htmlFor="terms"
                  className="ms-2  font-medium text-[#e53527]"
              >
                {t("freeDemo")}
              </label>
            </div>
            <div className="mb-5">
              <label
                  htmlFor="message"
                  className="text-[18px] block mb-2  sm:font-normal text-gray-900"
              >
                {t("message")} <span className="text-[#e47470]">*</span>
              </label>
              <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`shadow-sm bg-gray-50 border hover:border-[#000] border-[#959494] text-gray-900 text-[16px] rounded-md block w-full p-2.5 ${
                    errors.message ? "border-[#e47470]" : "border-gray-300"
                  }`}
                  placeholder={t("message")}
                  
              />
              {errors.message && <p className="text-sm text-[#d84545]">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="mt-[2.7rem]">
              <button type="submit" className="contact-button" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight:"500" }}>
                <p className="text-animation">{t("button")}</p>
              </button>
            </div>
          </form>
        )}
        </div>
      </div>
  );
};

export default ContactPage;




