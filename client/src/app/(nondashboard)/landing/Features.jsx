"use client";
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./mini-components/FeatureCard";
import featureCardsData from '../../../utils/featureCardsData.js'
const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function Features() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariant}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
        >
          Find a home that fits your lifestyle
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          
          {featureCardsData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                {...item}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
