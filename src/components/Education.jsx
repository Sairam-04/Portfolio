import React from "react";
const experiences = [
  {
    name: "Vidya Jyothi Institute of Technology, Hyderabad",
    edu: "B.Tech in Artificial Intelligence Engineering",
    date: "Aug 2019 - July 2023",
    cgpa: `CGPA: 8.88`  
},
{
    name: "Sri Chaitanya Junior College, Hyderabad",
    edu: "Intermediate (MPC)",
    date: "May 2017 - April 2019",
    cgpa: `Percentage: 88.9`  
},
{
    name: "Rao's High School, Hyderabad",
    edu: "SSC",
    date: "2016 - 2017",
    cgpa: `CGPA: 8.88`  
},
];

const Education = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="absolute w-3 h-3 bg-[gray] rounded-full -left-1.5 mt-1.5"></span>
            <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white">
              {experience.name}
            </h3>
            <p className="block mb-2 text-sm font-semibold leading-none text-dark-graytextcolor dark:text-gray-400">
              {experience.edu}
            </p>
            <p className="block mb-2 text-sm font-semibold leading-none text-dark-graytextcolor dark:text-gray-400">
              {experience.date}
            </p>
            <p className="mb-4 text-base font-light text-gray-700 dark:text-gray-300">
              {experience.cgpa}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
