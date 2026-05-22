import React, { useEffect, useState } from "react";
import "../../../src/App.css";
import Swal from "sweetalert2";
const Profile = ({ userData }) => {

  // form state
  const [formData, setFormData] = useState({});


  // update state when props change
  useEffect(() => {
    setFormData(userData || {});

  }, [userData]);

  // fields not to show
  const excludedFields = [
    "_id",
    "password",
    "createdAt",
    "updatedAt",
    "__v",
    "education",
    "portfolio",
  ];

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // save data

  const sendData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/update-profile", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json();
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        background: "#1e293b",
        color: "#fff"
      });
    }
    catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        background: "#1e293b",
        color: "#fff"
      });
    }
  }


  return (
    <div className="text-white">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center py-3 justify-between gap-5 rounded-3xl">

        {/* Left */}
        <div className="flex items-center gap-4">



          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Profile Information
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Update your personal and contact details.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="w-full sm:w-auto">
          <button
            onClick={sendData}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] hover:opacity-90 transition-all duration-300 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            <i className="fa-solid fa-floppy-disk me-2"></i>
            Save Changes
          </button>
        </div>
      </div>

      {/* Form Area */}
      <div className="max-h-[600px] overflow-y-auto pr-2 pt-10 custom-scrollbar">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {Object.keys(formData || {})
            .filter((key) => !excludedFields.includes(key))
            .map((key) => (

              <div
                key={key}
                className="bg-gradient-to-br from-[#171529] to-[#1f1b35] border border-[#2e225d] rounded-2xl p-5 shadow-lg hover:border-blue-500/40 transition-all duration-300"
              >

                {/* Label */}
                <label className="block text-sm font-medium text-gray-400 mb-2 capitalize tracking-wide">
                  {key}
                </label>

                {/* Input */}
                <div className="relative">

                  <input
                    type="text"
                    name={key}
                    value={formData[key] || ""}
                    onChange={handleChange}
                    className="w-full bg-[#0f0b1f] border border-[#3a2f5c] rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <i className="fa-solid fa-pen text-sm"></i>
                  </div>

                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;