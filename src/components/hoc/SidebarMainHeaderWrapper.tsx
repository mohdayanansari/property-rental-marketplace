"use client";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";

const SidebarMainHeaderWrapper = (Component: any, idName: any) =>
  function HOC() {
    return (
      <motion.section
        //@ts-ignore
        variants={slideIn()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={``}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SidebarMainHeaderWrapper;
