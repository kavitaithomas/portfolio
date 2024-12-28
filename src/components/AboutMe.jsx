import React from "react";
import headshot from "../assets/headshot.png";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:mt-32 md:flex-row justify-center items-center md:items-start md:space-x-10">
      {/* Headshot */}
      <div className="md:mr-8 rounded-full w-96 h-96 overflow-hidden">
        <img
          src={headshot}
          alt="Kavita Thomas Headshot"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Me text */}
      <div className="text-my-gray max-w-lg text-left md:text-xl">
        <p className="my-4">
          I am a fourth year computing student graduating in Spring 2025 at
          Queen’s University in Kingston, Ontario. I have a specific interest in
          front-end and full-stack development, along with web and UI/UX design.{" "}
        </p>
        <p>
          I am passionate about combining my love for art and technology to
          build user-focused designs and tools that will help people and
          businesses thrive. My goal is to break through barriers in technology
          and make tech accessible to women and marginalized peoples, which I
          practice as a member of Queen’s Women in Computing, a student-run
          organization dedicated to exploring technology and embracing
          empowerment.
        </p>
        <p className="my-4">
          Outside of my work in tech, you can often find me channeling my love
          for design through other mediums such as crochet, or going outside for
          a run or hike!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
