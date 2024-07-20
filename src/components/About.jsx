const About = () => {
  return (
    <div className="flex flex-col gap-8 py-5 w-full px-2">
      <div className="flex flex-col pb-6 pt-20 gap-3">
        <div className="dark:text-dark-textcolor text-light-textcolor text-4xl sm:text-[52px] font-semibold">
          A little bit about me
        </div>
        <div className="text-lg text-dark-graytextcolor">
          Who I am and what I do
        </div>
      </div>
      <hr className="text-dark-graytextcolor" />
      <div className="flex w-full">
        <div className="w-full sm:w-3/5 flex flex-col gap-4 font-light">
          <div className="flex flex-col gap-3">
            <div className="dark:text-dark-textcolor text-light-textcolor font-semibold">
              Who I am
            </div>
            <div className="dark:text-dark-graylighttextcolor text-dark-graytextcolor">
              I am{" "}
              <span className="font-semibold text-light-textcolor dark:text-dark-textcolor">SaiRam</span>,
              a dedicated and passionate Full Stack Web Developer based in
              Hyderabad, Telangana, India.
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="dark:text-dark-textcolor font-semibold">
              What I do
            </div>
            <p className="dark:text-dark-graylighttextcolor text-dark-graytextcolor">
              I am a Full Stack Web Developer with over 1.2 years of experience
              in building scalable, highly performant, and efficient web
              applications using the MERN stack (MongoDB, Express.js, React.js,
              and Node.js). My expertise lies in both frontend and backend
              development, allowing me to create seamless and user-friendly
              interfaces while ensuring robust and reliable server-side
              functionalities. Currently, I am working at Brane Enterprises in
              Hyderabad as a Full Stack Developer. In this role, I lead a team
              of frontend developers, focusing on enhancing user experience
              through effective UI/UX design and smooth API integration. My
              responsibilities include:
              <ol className="list-disc py-3 pl-5">
                <li className="my-2">
                  <span className="dark:text-dark-textcolor font-semibold">
                    Frontend Development:
                  </span>{" "}
                  Designing and implementing interactive and responsive web
                  interfaces using React.js, HTML, CSS, and JavaScript.
                </li>
                <li className="my-2">
                  <span className="dark:text-dark-textcolor font-semibold">
                    Backend Development:
                  </span>{" "}
                  Developing RESTful APIs and server-side logic with Node.js and
                  Express.js, ensuring efficient data management and secure
                  communication between the client and server.
                </li>
                <li className="my-2">
                  <span className="dark:text-dark-textcolor font-semibold">
                    Database Management:
                  </span>{" "}
                  Using MongoDB for efficient data storage and retrieval,
                  optimizing database performance, and ensuring data integrity.
                </li>
              </ol>
            </p>
          </div>
          <div>
            <button className="px-5 sm:py-3 py-1.5 sm:text-lg text-[13px] font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b from-[#212121] to-[#131313] rounded-lg">
              Get in Touch
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
