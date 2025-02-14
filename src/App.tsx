import React from "react";
import EventHighlights from "./EventHighs";
import Registration from "./registration";
import { Typewriter } from "react-simple-typewriter";
import ScrollAnimation from "./scrollAnimation";
import { useEffect, useState, useRef } from "react";
import "./App.css"
import { motion } from "framer-motion";



interface LayoutProps {
  isMenuOpen: boolean;
}

// Separate Timeline component
const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <ScrollAnimation >
          <div className="text-center py-12">
          <motion.h2
  className="text-3xl font-bold text-[#4285f4] mb-10 tracking-wide text-center p-5 inline-block"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Solution Challenge Timeline
  {/* Animated Underline */}
  <motion.div
    className="h-1 bg-[#4285f4] rounded mt-2 w-full"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ transformOrigin: "right" }}
  />
</motion.h2>

      <div className="flex max-w-5xl mx-auto px-6 overflow-x-scroll overflow-y-hidden h-[600px] scrollBar"> 
      <div ref={timelineRef} className=" flex flex-col h-[100%]">
    
    <div className="relative flex items-end">
      {/* Registrations */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">📋</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-600">Registrations</h3>
          <p className="text-gray-700 mt-2">6th Jan - 6th March 2025</p>
        </div>
      </motion.div>

      {/* Virtual Training Sessions */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12 relative top-[300px]"
      >
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">💻</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-green-600">Virtual Training Sessions</h3>
          <p className="text-gray-700 mt-2">13th Jan - 28th Feb 2025</p>
        </div>
      </motion.div>

      {/* Project Submissions */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">📂</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-yellow-600">Project Submissions</h3>
          <p className="text-gray-700 mt-2">20th Feb - 23rd March 2025</p>
        </div>
      </motion.div>

      {/* Project Evaluations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12 relative top-[270px]"
      >
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">📊</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-red-600">Project Evaluations</h3>
          <p className="text-gray-700 mt-2">31st March - 20th April 2025</p>
        </div>
      </motion.div>

      {/* Initial Shortlist Announcement */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">🏆</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-600">Initial Shortlist Announcement (Top 100)</h3>
          <p className="text-gray-700 mt-2">21st April 2025</p>
        </div>
      </motion.div>

      {/* Virtual Mentorship & Prototype Submissions */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12 relative top-[250px]"
      >
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">🔧</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-green-600">Virtual Mentorship & Prototype Submissions</h3>
          <p className="text-gray-700 mt-2">22nd April - 20th May 2025</p>
        </div>
      </motion.div>

      {/* Prototype Submissions */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">🛠️</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-yellow-600">Prototype Submissions</h3>
          <p className="text-gray-700 mt-2">21st April - 25th May 2025</p>
        </div>
      </motion.div>

      {/* Evaluations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12 relative top-[240px]"
      >
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">📌</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-red-600">Evaluations</h3>
          <p className="text-gray-700 mt-2">2nd June - 15th June 2025</p>
        </div>
      </motion.div>

      {/* Final Shortlist Announcement */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">🥇</div>
        <div className="ml-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-600">Final Shortlist Announcement (Top 10)</h3>
          <p className="text-gray-700 mt-2">16th June 2025</p>
        </div>
      </motion.div>
    </div>

    <motion.div
        initial={{ scale: 0,transformOrigin: "left" }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="w-[1705px] h-2 bg-[#EA4335] rounded"></div>
        </motion.div>

      </div>
       {/* Grand Finale */}
       <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-12"
      >
       <div className="flex flex-col items-center relative top-[120px] ml-5">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">🏆</div>
            <div className="ml-6 text-left">
              <h3 className="text-3xl font-bold text-green-600">Grand Finale</h3>
              <p className="text-gray-700 mt-2">2nd Week of July, 2025</p>
            </div>
          </div>
          </motion.div>
    </div>
    </div>

    </ScrollAnimation>
  );
};

// Main Layout component
const Layout: React.FC<LayoutProps> = ({ isMenuOpen }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        

        {/* Main Content */}
        <main className="flex-grow p-6 ">
          {/* Header Section with Typewriter */}
          <div className="flex justify-center items-center py-10 max-w-[80vw] relative sm:left-[10vw] left-0">
            <div 
              className="relative shadow-md bg-white rounded-xl px-4 md:px-8 py-4 text-center border-t-4 border-transparent"
              style={{
                borderImage: "linear-gradient(to right, #ea4335, #fbbc05, #34a853, #4285f4) 1",
                borderImageSlice: 1,
              }}>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold font-mono text-gray-800 p-10">
                <Typewriter
                  words={["Solution Challenge 2025"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h2>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex justify-center items-center gap-0">
      <motion.img
        src="./leftLogo.png"
        alt=""
        className="h-20 w-15"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.h2
        className="text-pretty text-2xl sm:text-4xl text-center p-5 font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <span className="text-[#ea4335]">Innovate. </span>
        <span className="text-[#ea8600]">Connect. </span>
        <span className="text-[#4285f4]">Inspire. </span>
      </motion.h2>

      <motion.img
        src="./rightLogo.png"
        alt=""
        className="h-20 w-15"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
          {/* Description Section */}
          <div className="description">
            <div className="description-1 opacity-0 animate-float-in border m-3 p-x-6 bg-white rounded-2xl shadow-lg border-gray-200 mt-5 md:mt-10 text-center" style={{ animationDelay: "500ms" }}>
            
            <motion.h1
      className="text-3xl text-center p-10 font-bold text-[#ea4335] inline-block"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Innovate for Impact, Code for Change!
      {/* Animated Underline */}
      <motion.div
        className="h-1 bg-[#ea4335] rounded mt-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </motion.h1>
             
              <p className="text-lg/7 text-center ml-2 mr-2 p-1 md:p-x-6">
                Join the Google Developer Student Clubs (GDSC) Solution Challenge 2025, where students worldwide come together to build tech solutions aligned with the United Nations' 17 Sustainable Development Goals (SDGs) using Google technologies. This is your chance to learn, build, and make a difference while competing for exciting prizes & global recognition. With workshops, mentorship, and a community of like-minded developers, you'll have everything you need to bring your ideas to life. Whether you're passionate about education, healthcare, sustainability, or social impact, this challenge is your opportunity to create meaningful solutions.
              </p>
              <h1 className="text-center text-xl font-bold p-6 mt-3">
                Form a team, start building, and be part of the change! 🚀💙
              </h1>
            </div>

            {/* What is Solution Challenge Section */}
            <div className="description-2 m-3 p-1 md:p-6 bg-white rounded-2xl shadow-lg border border-gray-200 text-center">
            <motion.h1
      className="text-center text-3xl font-bold text-[#ea8600] p-5 inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      WHAT IS SOLUTION CHALLENGE?
      {/* Animated Underline */}
      <motion.div
        className="h-1 bg-[#ea8600] rounded mt-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
      />
    </motion.h1>
              
              <p className="p-3 text-lg text-gray-700 leading-relaxed">
                Organized by <span className="font-semibold">GDD on campus</span> in collaboration with 
                <span className="font-semibold"> Hack2skill</span> for student developers from various colleges/universities 
                across India who are part of the <span className="font-semibold">GDG on campus</span> program.
              </p>
              
              <p className="p-3 text-lg text-gray-700 leading-relaxed">
                The Solution Challenge is an opportunity for students to tackle pressing issues 
                like <span className="font-semibold">education, healthcare, sustainability</span>, and more—using 
                <span className="font-semibold"> Google Developer Technologies</span>.
              </p>
              <p className="p-3 text-lg text-gray-700 leading-relaxed">
                Student developers not only gain invaluable skills but also contribute to making a 
                <span className="text-blue-500 font-semibold"> positive impact on society.</span>
              </p>
            </div>
          </div>

          {/* Theme Section */}
          <div className="text-center py-10">
          <motion.h2
  className="text-3xl md:text-4xl font-bold text-[#34a853] mb-8 text-center p-5 inline-block"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Theme for the Solution Challenge
  {/* Animated Underline */}
  <motion.div
    className="h-1 bg-[#34a853] rounded mt-2 w-full"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ transformOrigin: "left" }}
  />
</motion.h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
              {/* Education Card */}
              <ScrollAnimation direction="left">
                <div className="p-6 text-black rounded-2xl border-t-8 border-t-[#ea4335] shadow-lg hover:scale-105 transition">
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className="m-y-2 text-lg">Innovate in learning & accessibility with technology.</p>
                </div>
              </ScrollAnimation>

              {/* Healthcare Card */}
              <ScrollAnimation direction="left">
                <div className="p-6 text-black border-t-8 border-t-[#4285f4] rounded-2xl shadow-lg hover:scale-105 transition">
                  <h3 className="text-2xl font-bold">Healthcare</h3>
                  <p className="m-y-2 text-lg">Improve patient care and health solutions.</p>
                </div>
              </ScrollAnimation>

              {/* Sustainability Card */}
              <ScrollAnimation direction="right">
                <div className="p-6 text-gray-900 rounded-2xl border-t-8 border-t-[#ea8600] shadow-lg hover:scale-105 transition">
                  <h3 className="text-2xl font-bold">Sustainability</h3>
                  <p className="m-y-2 text-lg">Develop solutions for a greener future.</p>
                </div>
              </ScrollAnimation>

              {/* Social Impact Card */}
              <ScrollAnimation direction="right">
                <div className="p-6 text-black border-t-8 border-t-[#34a853] rounded-2xl shadow-lg hover:scale-105 transition">
                  <h3 className="text-2xl font-bold">Social Impact</h3>
                  <p className="m-y-2 text-lg">Use tech to solve global and local challenges.</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Timeline Component */}
          <Timeline />
          {/* Other Components */}
          <EventHighlights />
          <Registration />
        </main>

        {/* Footer */}
        
      </div>
    </>
  );
};

export default Layout;