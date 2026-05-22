import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Certificates = ({ certificateData }) => {

  const [formData, setFormData] = useState([]);

  // Set Data
  useEffect(() => {

    setFormData(certificateData?.data || []);

  }, [certificateData]);

  // Handle Input Change
  const handleChange = (index, key, value) => {

    const updatedData = [...formData];

    updatedData[index][key] = value;

    setFormData(updatedData);
  };

  // Add New Certificate
  const addItem = () => {

    const newCertificate = {
      title: "",
      slug: "",
      issuer: "",
      short_description: "",
      description: "",
      credentialLink: "",
      thumbnail: "",
      skills: "",
    };

    setFormData((prev) => [newCertificate, ...prev]);
  };

  // Excluded Fields
  const excludedFields = [
    "_id",
    "createdAt",
    "updatedAt",
    "__v",
  ];

  // Delete Certificate
  const handleDelete = async (_id) => {

    try {

      const response = await fetch(
        "https://my-mern-portfolio-8g6r.onrender.com/api/certificates/delete-certificate",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Update UI
      setFormData((prev) =>
        prev.filter((item) => item._id !== _id)
      );

      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        background: "#1e293b",
        color: "#fff",
      });

    } catch (error) {

      Swal.fire({
        title: "Error",
        text: error.message || "Something went wrong",
        icon: "error",
        background: "#1e293b",
        color: "#fff",
      });
    }
  };

  // Submit Data
  const submitData = async () => {

    try {

      const response = await fetch(
        "https://my-mern-portfolio-8g6r.onrender.com/api/certificates/update-certificates",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            certificatesData: formData,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        background: "#1e293b",
        color: "#fff",
      });

    } catch (error) {

      Swal.fire({
        title: "Error",
        text: error.message || "Something went wrong",
        icon: "error",
        background: "#1e293b",
        color: "#fff",
      });
    }
  };

  return (
    <div className="text-white">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-8">

        {/* Left */}
        <div>

          <h1 className="text-3xl font-bold">
            Certificate Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your certificates and achievements
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">

          {/* Add */}
          <button
            onClick={addItem}
            className="px-6 py-3 rounded-2xl border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
          >
            <i className="fa-solid fa-plus me-2"></i>

            Add Certificate
          </button>

          {/* Save */}
          <button
            onClick={submitData}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            <i className="fa-solid fa-floppy-disk me-2"></i>

            Save Changes
          </button>

        </div>
      </div>

      {/* Certificates */}
      <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">

        {formData.length > 0 ? (

          formData.map((item, index) => (

            <div
              key={index}
              className="bg-[#1e1b2e] border border-[#31284f] rounded-3xl p-6 shadow-xl"
            >

              {/* Top */}
              <div className="flex justify-between items-center mb-6">

                <div>

                  <h2 className="text-xl font-bold">
                    Certificate #{index + 1}
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    Edit certificate details
                  </p>

                </div>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item._id)}
                  className="h-11 w-11 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all duration-300"
                >
                  <i className="fa-regular fa-trash-can text-red-500"></i>
                </button>

              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {Object.entries(item).map(([key, value], i) => {

                  if (excludedFields.includes(key)) {
                    return null;
                  }

                  return (

                    <div key={i}>

                      <label className="block text-sm text-gray-400 mb-2 capitalize">

                        {key.replace(/_/g, " ")}

                      </label>

                      <div className="relative">

                        {/* Textarea for long fields */}
                        {key === "description" ||
                        key === "short_description" ? (

                          <textarea
                            rows={2}
                            value={value || ""}
                            onChange={(e) =>
                              handleChange(index, key, e.target.value)
                            }
                            className="w-full bg-[#151221] border border-[#3b3258] rounded-2xl px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                          />

                        ) : (

                          <input
                            type="text"
                            value={value || ""}
                            onChange={(e) =>
                              handleChange(index, key, e.target.value)
                            }
                            className="w-full bg-[#151221] border border-[#3b3258] rounded-2xl px-4 py-3 pr-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          />

                        )}

                        <div className="absolute right-4 top-4 text-gray-500">

                          <i className="fa-solid fa-pen"></i>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          ))

        ) : (

          <div className="text-center py-20 border border-dashed border-gray-700 rounded-3xl">

            <i className="fa-solid fa-certificate text-5xl text-gray-600 mb-5"></i>

            <h2 className="text-2xl font-semibold text-gray-300">
              No Certificates Found
            </h2>

            <p className="text-gray-500 mt-2">
              Start by adding your first certificate
            </p>

          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;