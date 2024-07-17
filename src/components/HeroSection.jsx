const HeroSection = () => {
    return (
        <div className="flex h-[90vh] items-center">
            <div className="flex flex-col gap-4">
                <div className="font-bold flex flex-col">
                    <span className="text-[80px]"> <span className="text-dark-graytextcolor"> I'm</span> Sairam.</span>
                    <span className="text-[80px]"> I'm a <span className="text-dark-graytextcolor">Full Stack Developer.</span></span>
                </div>
                <div className="text-[17px] dark:text-dark-graylighttextcolor text-black font-medium w-4/5">
                I am a full stack developer specializing in creating scalable, performant, and efficient applications that solve real-world problems.
                I bridge the gap between design and functionality, crafting performant and scalable web applications. My passion lies in tackling real-world problems with innovative solutions.
                </div>
                <div className="flex gap-6">
                <button className="text-dark-textcolor px-5 py-3 mt-4 font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] bg-gradient-to-b from-[#212121] to-[#131313] rounded-lg">See my Resume</button>
                <button className="px-5 py-3 mt-4 font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b from-[#212121] to-[#131313] rounded-lg">Get in Touch</button>
            </div>
            </div>
            
        </div>
    )
}

export default HeroSection
