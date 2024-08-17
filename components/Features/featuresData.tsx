import { Feature } from "@/types/feature";
import { Cloud, Lock, BarChart, LifeBuoy, Code,  } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Cloud size={40} />,
    title: "Cloud Computing",
    paragraph:
      "Leveraging cloud technology to provide scalable, flexible, and cost-effective solutions for your business operations and data management.",
  },
  {
    id: 2,
    icon: <Lock size={40} />,
    title: "Cybersecurity",
    paragraph:
      "Protecting your business from digital threats with advanced security measures, including risk assessments, threat detection, and incident response.",
  },
  {
    id: 3,
    icon: <BarChart size={40} />,
    title: "Data Analytics",
    paragraph:
      "Transforming your data into actionable insights through advanced analytics, data visualization, and strategic data-driven decision-making.",
  },
  {
    id: 4,
    icon: <LifeBuoy size={40} />,
    title: "IT Support",
    paragraph:
      "Providing reliable IT support to ensure your systems run smoothly with troubleshooting, maintenance, and technical assistance when you need it.",
  },
  {
    id: 5,
    icon: <Code size={40} />,
    title: "Software Development",
    paragraph:
      "Creating custom software solutions tailored to your business needs, including application development, integration, and ongoing support.",
  },
  {
    id: 6,
    icon: <Code size={40} />,
    title: "Digital Transformation",
    paragraph:
      "Guiding your organization through digital transformation to enhance efficiency, improve customer experiences, and stay competitive in a rapidly evolving digital landscape.",
  },
];

export default featuresData;
