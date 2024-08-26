"use client";

import React, { useState } from "react";
import { HeroHighlight, Highlight } from "./hero";
import { motion } from "framer-motion";

const MyHero = () => {
  return (
    <HeroHighlight>
      {/* <Modal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        title="Contact us"
      >
        <ContactForm handleClose={() => setOpenModal(false)} />
      </Modal> */}
      <div
        className="wow fadeInUp mx-auto max-w-[800px] text-center"
        data-wow-delay=".2s"
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto  max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug "
        >
          {/* Dubai's expert in <br />
          <Highlight className="text-black dark:text-white text-nowrap">
            network installation & configuration
          </Highlight> */}
          One Touch is your trusted source of <br />
          <Highlight className="text-nowrap text-black dark:text-white">
            IT services and support.
          </Highlight>
        </motion.h1>
        {/* <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
            Startup is free Next.js template for startups and SaaS business
            websites comes with all the essential pages, components, and
            sections you need to launch a complete business website, built-with
            Next 13.x and Tailwind CSS.
          </p> */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          {/* <Link
            href="https://nextjstemplates.com/templates/saas-starter-startup"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            🔥 Get Pro
          </Link>
          <Link
            href="https://github.com/NextJSTemplates/startup-nextjs"
            className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
          >
            Star on GitHub
          </Link> */}
        </div>
      </div>
    </HeroHighlight>
  );
};

export default MyHero;
