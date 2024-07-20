import React from "react";
const experiences = [
  {
    title: "Full Stack Developer",
    company: "Brane Enterprises Pvt Ltd.",
    date: "July 2024 - Present",
    description: `
I currently work as a Full Stack Developer specializing in the MERN stack within the EdTech domain. My role primarily involves handling frontend tasks, including optimizing the application for performance and user experience.    `,
  },
  {
    title: "SDE Intern",
    company: "Brane Enterprises Pvt Ltd.",
    date: "May 2023 - July 2024",
    description: `
        My role has involved developing scalable and efficient applications using the MERN stack, emphasizing high performance and robust architecture.
         I have been deeply involved in both frontend and backend development, focusing on creating responsive and dynamic user interfaces using React.js to ensure a seamless and engaging user experience. I have collaborated closely with backend teams to integrate RESTful APIs, enhancing the overall functionality and performance of our web applications.
    `,
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="absolute w-3 h-3 bg-[gray] rounded-full -left-1.5 mt-1.5"></span>
            <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="block mb-2 text-sm font-semibold leading-none text-dark-graytextcolor dark:text-gray-400">
              {experience.company} - {experience.date}
            </p>
            <p className="mb-4 text-base font-light text-gray-700 dark:text-gray-300">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
