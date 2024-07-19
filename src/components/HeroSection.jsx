const HeroSection = () => {
    return (
        <div className="flex sm:h-[90vh] h-[120vw] items-center">
            <div className="flex flex-col gap-4">
                <div className="font-bold flex flex-col">
                    <span className="sm:text-[80px] text-[40px]"> <span className="text-dark-graytextcolor"> I'm</span> Sairam.</span>
                    <span className="sm:text-[80px] text-[40px]"> I'm a <span className="text-dark-graytextcolor">Full Stack Developer.</span></span>
                </div>
                <div className="sm:text-[17px] text-[13px] dark:text-dark-graylighttextcolor text-black font-medium sm:w-4/5 w-full">
                    I am a full stack developer specializing in creating scalable, performant, and efficient applications that solve real-world problems.
                    I bridge the gap between design and functionality, crafting performant and scalable web applications. My passion lies in tackling real-world problems with innovative solutions.
                </div>
                <div className="flex gap-6 sm:pt-4 pt-2">
                    <button className="text-dark-textcolor sm:text-lg text-[13px] px-5 sm:py-3 py-1.5 font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] bg-gradient-to-b from-[#212121] to-[#131313] rounded-lg">See my Resume</button>
                    <button className="px-5 sm:py-3 py-1.5 sm:text-lg text-[13px] font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b from-[#212121] to-[#131313] rounded-lg">Get in Touch</button>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
