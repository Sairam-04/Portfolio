import { useState } from "react";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DB_URL } from "../utils/constants";
const Contact = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const res = await fetch(DB_URL, options);
    setIsLoading(false);
    if (res || res?.ok) {
      setuserData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } else {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };
  return (
    <div className="flex flex-col gap-8 py-5 w-full px-2">
      <div className="pb-6 pt-20">
        <div className="dark:text-dark-textcolor text-light-textcolor text-4xl sm:text-[52px] font-semibold">
          Get in Touch
        </div>
      </div>
      <hr className="text-dark-graytextcolor" />
      <div className="w-[90%] border-[0.5px] border-[#808080] rounded-lg flex flex-col mx-auto dark:bg-dark-bgcolor bg-light-skillscardbg">
        <div className="header flex justify-between items-center py-2 px-2">
          <div className="flex gap-2 items-center">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F63636]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#F6C136]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#68F636]"></span>
          </div>
          <div className="font-semibold text-lg">New Message</div>
          <div className="invisible">Rightmenu</div>
        </div>
        <hr className="text-dark-graytextcolor" />

        <form className="flex flex-col gap-5 px-4 py-4" onSubmit={submitForm}>
          <div className="fields">
            <div className="inpfield">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="inpfield-inp"
                onChange={handleChange}
                value={userData.email}
              />
            </div>
            <hr className="text-dark-graytextcolor" />
          </div>
          <div className="fields">
            <div className="inpfield">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="inpfield-inp"
                onChange={handleChange}
                value={userData.name}
              />
            </div>
            <hr className="text-dark-graytextcolor" />
          </div>
          <div className="fields">
            <div className="inpfield">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter Subject"
                className="inpfield-inp"
                onChange={handleChange}
                value={userData.subject}
              />
            </div>
            <hr className="text-dark-graytextcolor" />
          </div>
          <div className="w-full">
            <textarea
              name="message"
              id="msg"
              placeholder="Write your message"
              onChange={handleChange}
              value={userData.message}
              className="w-[100%] h-52 dark:bg-[#231e1ef1] p-4 shadow-inner rounded-xl focus:outline-none"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="relative flex items-center justify-center gap-3 px-5 sm:py-3 py-1.5 sm:text-lg text-[13px] font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b from-[#212121] to-[#131313] rounded-lg"
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading && (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                </div>
              )}
              <div>Send</div>
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
