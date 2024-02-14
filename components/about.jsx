// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
        After passing out my <b className="font-medium">bachelor's degree</b>, I
        decided to pursue my passion for software development. I enrolled in a M.Tech in IIITA
        and joined in bootcamps and online courses to learn{" "}
        <b className="font-medium">full-stack web development</b>.{" "}
        <i className="italic">My favorite part of programming</i> is the
        problem-solving aspect. I <u className="underline">love</u> the feeling
        of finally figuring out a solution to a problem. My core stack is{" "}
        <b className="font-medium">React, Next.js, Node.js, and MongoDB</b>. I
        am also interested in competitive programming using c++ and python.I am also a machine learning and deep learning enthusiast I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <b className="font-medium">full-time position</b> as a software
        developer.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        <i className="italic">When I'm not coding</i>, I enjoy playing video
        games, watching movies, reading books(particulary Science fiction and fantasy genre). I also enjoy{" "}
        <b className="font-medium">learning new things</b>. I am currently
        learning about <b className="font-medium">Greek Mythology</b>.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
