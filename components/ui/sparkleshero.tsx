"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function SparklesPreview() {
  const { theme } = useTheme();
  console.log({ theme });

  return (
    <div className="flex h-[35rem] w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="relative z-20 text-center text-3xl font-bold  dark:text-white md:text-7xl lg:text-9xl">
        Connect with us
      </h1>
      <div className="relative h-40 w-[40rem]">
        {/* Gradients */}
        <div
          // style={{color:'#000000'}}
          className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
        />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor={theme === "dark" ? "#fff" : "#000"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className={cn(
            theme === "dark" ? "bg-slate-950" : "bg-white",
            "absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]",
          )}
        ></div>
      </div>
    </div>
  );
}
