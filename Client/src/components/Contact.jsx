import react from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useRef } from "react";
const Contact=({userData})=>{
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();
 const formData = new FormData(form.current);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    Swal.fire({
      icon: "error",
      title: "Fields Required",
      text: "All fields are required !",
      background: "#23233a",
  color: "#ffffff",
  confirmButtonColor: "#8b5cf6"

    });
    return;
  }
  emailjs
    .sendForm(
      "service_znn3g4s",
      "template_bcnhhw8",
      form.current,
      "IfCm46A2a8-zO7bEb"
    )
    .then(
      () => {
        Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Thanks! I will get back to you soon.",
      background: "#23233a",
  color: "#ffffff",
  confirmButtonColor: "#8b5cf6"
    });
        form.current.reset(); 
      },
      (error) => {
        
        Swal.fire({
      icon: "error",
      title: "Failed",
      text: "Something went wrong, try again!",
      background: "#23233a",
  color: "#ffffff",
  confirmButtonColor: "#8b5cf6"

    });
      }
    );
};
    return (
        <div className="pt-20 text-center " id="contact">
             <h1 className="text-white font-bold mb-2 md:text-5xl text-2xl">
        Get In 
 <span className="text-[#05dfeb]"> Touch</span>
      </h1>
       <p className="text-gray-400 md:text-2xl text-md mb-10 font-Bubblegum">
Let's collaborate and build something amazing together


      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-10">

  {/* First Div */}
  <div className="w-full flex flex-col gap-6 h-full pt-5">

    {/* Email Box */}
    <div
      className="bg-[#23233a]/80 backdrop-blur-xl
                 border border-purple-500/20
                 rounded-3xl p-5
                 shadow-xl hover:shadow-purple-500/20
                 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center text-start gap-5">

        <div
          className="min-w-[50px] h-[50px]
                     rounded-2xl
                     bg-gradient-to-br from-purple-500 to-pink-500
                     flex items-center justify-center
                     shadow-lg shadow-purple-500/30"
        >
          <i className="fa-solid fa-envelope text-white text-3xl"></i>
        </div>

        <div className="overflow-hidden">
          <h5
            className="text-sm uppercase tracking-[2px]
                       text-purple-300 font-semibold mb-0"
          >
            Email Address
          </h5>

          <h2
            className="text-white text-lg font-bold
                       break-words"
          >
            {userData?.email}
          </h2>

         
        </div>

      </div>
    </div>

    {/* Phone Box */}
    <div
      className="bg-[#23233a]/80 backdrop-blur-xl
                 border border-cyan-500/20
                 rounded-3xl p-5
                 shadow-xl hover:shadow-cyan-500/20
                 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex text-center items-center gap-5">

        <div
          className="min-w-[50px] h-[50px]
                     rounded-2xl
                     bg-gradient-to-br from-cyan-500 to-blue-500
                     flex items-center justify-center
                     shadow-lg shadow-cyan-500/30"
        >
          <i className="fa-solid fa-phone text-white text-3xl"></i>
        </div>

        <div className="overflow-hidden">
          <h5
            className="text-sm uppercase tracking-[2px]
                       text-cyan-300 font-semibold mb-0"
          >
            Phone Number
          </h5>

          <h2
            className="text-white text-lg font-bold
                       break-words"
          >
            {userData?.phone}
          </h2>

         
        </div>

      </div>
    </div>

    {/* Location Box */}
    <div
      className="bg-[#23233a]/80 backdrop-blur-xl
                 border border-orange-500/20
                 rounded-3xl p-5
                 shadow-xl hover:shadow-orange-500/20
                 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center text-start  gap-5">

        <div
          className="min-w-[50px] h-[50px]
                     rounded-2xl
                     bg-gradient-to-br from-orange-500 to-red-500
                     flex items-center justify-center
                     shadow-lg shadow-orange-500/30"
        >
          <i className="fa-solid fa-location-dot text-white text-3xl"></i>
        </div>

        <div className="overflow-hidden ">
          <h5
            className="text-sm uppercase tracking-[2px]
                       text-orange-300 font-semibold mb-0"
          >
            Location
          </h5>

          <h2
            className="text-white  text-lg font-bold
                       break-words"
          >
            {userData?.location}
          </h2>

         
        </div>

      </div>
    </div>
<div
  className="bg-[#23233a]/70 backdrop-blur-xl text-white
  border border-gray-500/20 rounded-3xl p-6 shadow-xl"
>
  <h2 className="text-xl font-bold text-start mb-6 tracking-wide">
    Connect With Me 
  </h2>

  <div className="flex items-center gap-4">

    <a
      href={userData?.linkedin}
      target="_blank"
      rel="noreferrer"
      className="w-14 h-14 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-blue-500/20
      hover:border-blue-400/40 hover:text-blue-400
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-linkedin text-2xl"></i>
    </a>

    <a
      href={userData?.instagram}
      target="_blank"
      rel="noreferrer"
      className="w-14 h-14 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-pink-500/20
      hover:border-pink-400/40 hover:text-pink-400
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-instagram text-2xl"></i>
    </a>

    <a
      href={userData?.github}
      target="_blank"
      rel="noreferrer"
      className="w-14 h-14 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-gray-400/20
      hover:border-gray-300/40 hover:text-gray-300
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-github text-2xl"></i>
    </a>

    <a
      href={userData?.twitter}
      target="_blank"
      rel="noreferrer"
      className="w-14 h-14 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-sky-500/20
      hover:border-sky-400/40 hover:text-sky-400
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-x-twitter text-2xl"></i>
    </a>

  </div>
</div>
  </div>

  {/* Second Div */}
 <div
  className="w-full bg-[#23233a]/80 backdrop-blur-xl
  rounded-3xl border border-gray-700/40 p-6 md:p-8 text-start"
>
  <form className="flex flex-col gap-5"   ref={form}
  onSubmit={sendEmail}>

    <div>
      <label className="text-gray-300 text-sm mb-2 block px-2">
        Your Name
      </label>

      <input
        type="text"
        placeholder="Enter your name"
        className="w-full bg-[#2d2d4d]/70 text-white
        border border-white/10 rounded-2xl
        px-5 py-4 outline-none
        focus:border-purple-500 transition" name="name"
      />
    </div>

    <div>
      <label className="text-gray-300 text-sm px-2 mb-2 block">
        Email Address
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-[#2d2d4d]/70 text-white
        border border-white/10 rounded-2xl
        px-5 py-4 outline-none
        focus:border-purple-500 transition" name="email"
      />
    </div>

    <div>
      <label className="text-gray-300 text-sm px-2 mb-2 block">
        Message
      </label>

      <textarea
        rows="5"
        placeholder="Write your message..."
        className="w-full bg-[#2d2d4d]/70 text-white
        border border-white/10 rounded-2xl
        px-5 py-4 outline-none resize-none
        focus:border-purple-500 transition" name="message"
      ></textarea>
    </div>

    <button
      className="bg-gradient-to-r from-purple-500 to-indigo-500
      hover:scale-[1.02] transition-all duration-300
      text-white font-semibold py-4 rounded-2xl" type="submit"
    >
      Submit
    </button>

  </form>
</div>

</div>
        </div>
    )
}
export default Contact;