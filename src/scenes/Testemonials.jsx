import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

export default function Testemonials() {
  const testemonialsStyles = `mx-auto relative  max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
  before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2
    `;
  return (
    <section id="testemonials" className="pt-32 pb-16">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView={`visible`}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, scale:0.8 },
            visible: { opacity: 1, scale:1 },
          }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          tempore, nobis itaque enim impedit fugit molestiae a error magnam
          blanditiis. Similique quo placeat ut sunt aspernatur quam excepturi
          facilis saepe.
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testemonialsStyles} before:content-person1`}
          initial="hidden"
          whileInView={`visible`}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale:0.8 },
            visible: { opacity: 1, scale:1 },
          }}
        >
         <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              
            </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testemonialsStyles} before:content-person2`}
          initial="hidden"
          whileInView={`visible`}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale:0.8 },
            visible: { opacity: 1, scale:1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            
            </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testemonialsStyles} before:content-person3`}
          initial="hidden"
          whileInView={`visible`}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.4,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale:0.8 },
            visible: { opacity: 1, scale:1 },
          }}
        >
         <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            
            </p>
        </motion.div>
      </div>
    </section>
  );
}
