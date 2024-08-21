import React from "react";
import SingleFeature from "../Features/SingleFeature";
import { Feature } from "@/types/feature";
import { BarChart, Cloud, CodeIcon, LifeBuoy, Lock } from "lucide-react";

const features: Feature[] = [
  {
    id: 1,
    icon: <Cloud size={40} />,
    title: "Cloud Computing",
    image: "cloud.jpg",
    paragraph:
      "Leveraging cloud technology to provide scalable, flexible, and cost-effective solutions for your business operations and data management.",
  },
  {
    id: 2,
    icon: <Lock size={40} />,
    title: "Cybersecurity",
    image: "cyber.jpg",
    paragraph:
      "Protecting your business from digital threats with advanced security measures, including risk assessments, threat detection, and incident response.",
  },
  {
    id: 3,
    icon: <BarChart size={40} />,
    title: "Data Analytics",
    image: "data.jpeg",
    paragraph:
      "Transforming your data into actionable insights through advanced analytics, data visualization, and strategic data-driven decision-making.",
  },
  {
    id: 4,
    icon: <LifeBuoy size={40} />,
    title: "IT Support",
    image: "it.jpg",
    paragraph:
      "Providing reliable IT support to ensure your systems run smoothly with troubleshooting, maintenance, and technical assistance when you need it.",
  },
];

const Achievements = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">

        {/* <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center  gap-2">
          {achievements.map((x) => (
            <GlareCard className="flex flex-col items-center justify-center">
              <h1>{x}</h1>
            </GlareCard>
          ))}
        </div> */}

        <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
          {features.map((x ) => (
            <SingleFeature key={x.id} feature={x} />
          ))}
          {/* <div className="border-1 w-full border h-40 rounded-lg border-slate-700"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
