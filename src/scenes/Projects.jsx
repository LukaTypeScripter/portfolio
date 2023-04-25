import LineGradient from "../components/LineGradient";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const container = {
    hiddenn: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const Project = ({ title }) => {
    const overlatStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-gray z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue
        `;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    console.log(projectTitle);
    return(
      <motion.div variants={projectVariant} className="relative">
        <div className={overlatStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
          </p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </motion.div>
    );
  };
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView={`visible`}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            MY <span className="text-red">PRO</span> JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc.
        </p>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView={`visible`}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px]
            max-h-[400px] text-2xl font-playfair font-semibold
            "
          >
            BEATIFUL AI
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />


          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />


          <Project title="Project 6" />
          <Project title="Project 7" />


          <div
            className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px]
            max-h-[400px] text-2xl font-playfair font-semibold
            "
          >
            SMOOTH AI
          </div>
        </motion.div>
      </div>
    </section>
  );
}
