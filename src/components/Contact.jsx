const Contact = () => {
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

        <div className="flex flex-col gap-5 px-4 py-4">
          <div className="fields">
            <div className="inpfield">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="inpfield-inp"
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
              />
            </div>
            <hr className="text-dark-graytextcolor" />
          </div>
          <div className="w-full">
            <textarea name="message" id="msg" placeholder="Write your message"
              className="w-[100%] h-52 dark:bg-[#231e1ef1] p-4 shadow-inner rounded-xl focus:outline-none"
            ></textarea>
          </div>
          <div className="flex justify-end">
          <button className="px-5 sm:py-3 py-1.5 sm:text-lg text-[13px] font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b from-[#212121] to-[#131313] rounded-lg">Send</button>

          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
