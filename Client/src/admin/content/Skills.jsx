import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
const Skills = ({ skills }) => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    setSkillsData(skills);
  }, [skills]);

  const excludedFields = ["_id", "createdAt", "updatedAt", "__v"];

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setSkillsData((prev) =>
      prev.map((skill, i) =>
        i === index ? { ...skill, [name]: value } : skill
      )
    );
  };

  const addItem = () => {
    setSkillsData((prev) => [
      ...prev,
      { name: "", category: "", icon: "", percentage: "" },
    ]);
  };

  const handleDelete = async (index) => {
    const SkilltoDelete = skillsData[index]._id;
    try {
      const response = await fetch("https://my-mern-portfolio-8g6r.onrender.com/api/delete-skills", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: SkilltoDelete }),

      })
      const data = await response.json();
      
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        background: "#1e293b",
        color: "#fff",
      })
      setSkillsData((prev) => prev.filter((_, i) => i !== index));
    }
    catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Something went wrong",
        icon: "error",
        background: "#1e293b",
        color: "#fff",
      })
    }
  };

  const submitData = async () => {
    try {
      const response = await fetch("https://my-mern-portfolio-8g6r.onrender.com/api/add-skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(skillsData),
      });
      const data = await response.json();
      
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-3xl">
        <div className="flex items-center gap-4 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">Skills Management</h1>
            <p className="text-gray-400 text-sm mt-1">Manage your skills</p>
          </div>
        </div>

        <div className="w-full sm:w-auto flex gap-5">
          <button
            onClick={addItem}
            className="w-full sm:w-auto transition-all duration-300 px-5 py-3 rounded-2xl text-white font-semibold border-2 border-gray-500 cursor-pointer"
          >
            <i className="fa-solid fa-add me-2"></i>Add Item
          </button>

          <button
            onClick={submitData}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] hover:opacity-90 transition-all duration-300 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            <i className="fa-solid fa-floppy-disk me-2"></i>Save Changes
          </button>
        </div>
      </div>

      {/* Skills List */}
      <div className="max-h-[600px] overflow-y-auto pr-2 pt-10 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={skill._id || index}
              className="bg-gradient-to-br from-[#171529] to-[#1f1b35] border border-[#2e225d] rounded-2xl p-5 shadow-lg hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Skill {index + 1}</h2>
                <button onClick={() => handleDelete(index)}>
                  <i className="fa-regular fa-trash-can text-red-500 text-xl"></i>
                </button>
              </div>

              {/* Icon Preview */}
              {skill.icon && (
                <img src={skill.icon} alt="icon" className="h-10 mb-3" />
              )}

              {/* Fields */}
              {Object.keys(skill)
                .filter((key) => !excludedFields.includes(key))
                .map((key) => (
                  <div key={key} className="mb-3">
                    <label className="block text-sm font-medium text-gray-400 mb-2 capitalize tracking-wide">
                      {key}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name={key}
                        value={skill[key] || ""}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full bg-[#0f0b1f] border border-[#3a2f5c] rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <i className="fa-solid fa-pen text-sm"></i>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {skillsData.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            No skills found. Click "Add Item" to add one.
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;