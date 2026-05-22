import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const Timeline = ({ userData }) => {

  const [formData, setFormData] = useState([]);

  // Set data when userData changes
  useEffect(() => {

    setFormData(userData?.education || []);



  }, [userData]);

  // Handle Input Change
  const handleChange = (index, key, value) => {

    const updatedData = [...formData];
    updatedData[index][key] = value;

    setFormData(updatedData);
  };
  const addItem = () => {
    setFormData((prev) => ([
      ...prev, {
        "degree": " ",
        "institute": " ",
        "description": " ",
        "score": " ",
        "startYear": " ",
        "endYear": ""
      }]))
  }
  const excludedFields = [
    "_id",
    "createdAt",
    "updatedAt",
    "__v"
  ];
  const handleDelelte = async (_id) => {
    try {
     

      const response = await fetch(
        "https://my-mern-portfolio-cy5c.onrender.com/api/delete-education",
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

      // update UI AFTER success
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




  const submitData = async () => {
    try {
      const response = await fetch("https://my-mern-portfolio-cy5c.onrender.com/api/update-education", {
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
        text: error.message || "Something went wrong",
        icon: "error",
        background: "#1e293b",
        color: "#fff"
      })
    }
  }
  return (
    <div className="text-white">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between  gap-5 rounded-3xl">

        {/* Left */}
        <div className="flex items-center gap-4 py-4">

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Timeline Management
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Manage your education and work experience
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="w-full sm:w-auto flex gap-5">

          <button
            className="w-full sm:w-auto transition-all duration-300 px-5 py-3 rounded-2xl text-white font-semibold border-2 border-gray-500 cursor-pointer" onClick={addItem}>
            <i className="fa-solid fa-add me-2"></i>

            Add Item
          </button>

          <button
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] hover:opacity-90 transition-all duration-300 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg shadow-blue-500/20 cursor-pointer" onClick={submitData}
          >
            <i className="fa-solid fa-floppy-disk me-2"></i>

            Save Changes
          </button>

        </div>

      </div>

      {/* Timeline Data */}
      <div className="max-h-[600px] overflow-y-auto pr-2 pt-10 custom-scrollbar">

        {
          formData.length > 0 ? (

            formData.map((item, index) => (

              <div
                key={index}
                className="bg-[#281f40] p-5  rounded-xl border border-gray-600 mt-5"
              >

                <div className="flex justify-between items-center mb-5 pe-5">
                  <h1 className="font-bold text-xl ">
                    Timeline Item {index + 1}
                  </h1>
                  <button onClick={() => handleDelelte(item._id)}><i class="fa-regular fa-trash-can text-red-500 font-bold text-xl"></i></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                  {
                    Object.entries(item).map(([key, value], i) => {

                      // Hide specific fields


                      if (excludedFields.includes(key)) {
                        return null;
                      }

                      return (

                        <div key={i}>

                          <label className="block text-md font-medium text-gray-400 mb-2 capitalize tracking-wide">

                            {key}

                          </label>

                          <div className="relative">

                            <input
                              type="text"
                              value={value || ""}
                              onChange={(e) =>
                                handleChange(index, key, e.target.value)
                              }
                              className="w-full bg-[#2c2745] border border-[#3a2f5c] rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                            />

                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">

                              <i className="fa-solid fa-pen text-sm"></i>

                            </div>

                          </div>

                        </div>

                      );
                    })
                  }

                </div>

              </div>

            ))

          ) : (

            <div className="text-center text-gray-400 mt-10">
              No timeline data found
            </div>

          )
        }

      </div>

    </div>
  );
};

export default Timeline;