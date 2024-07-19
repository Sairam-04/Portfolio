import { skillsJson } from "../data/jsonData";

const SkillCard = ({ data }) => {
    const { icon, title, tag } = data;
    return (
        <div className="dark:bg-dark-skillscardbg bg-light-skillscardbg shadow-md flex sm:flex-col gap-3 w-full sm:w-[14vw] sm:h-52 h-20 min-w-fit p-3 border-[.1px] border-[#808080] sm:justify-between items-center rounded-2xl">
            <div className="flex justify-center items-center h-[80%]">
                <img src={icon} alt={title} className="h-20 w-20 object-contain" />
            </div>
            <div className="flex justify-center items-center w-full text-center">
                <div className="text-[16px] text-white font-semibold">{title}</div>
            </div>
        </div>
    );
}

const Skills = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="text-4xl text-light-skillscardtext dark:text-dark-skillscardtext font-bold pt-2">Skills</div>
            <div className="flex gap-5 py-2 flex-wrap">
                {skillsJson.map((item, index) => (
                    <SkillCard key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
