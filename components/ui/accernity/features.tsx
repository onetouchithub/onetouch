import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  CloudCog,
  CodeXml,
  Laptop,
  Network,
  Server,
  ShieldAlert,
  UserCog,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Network",
      description:
        "Cloud services are network dependent, which is why One Touch network management and monitoring services have become critical to IT.",
      icon: <Network />,
      image: "/images/services1/network.jpeg",
    },
    {
      title: "Service desk",
      description:
        "One Touch 24/7 support is about maximising service efficiency, resolving problems and driving continuous service improvement.",
      icon: <UserCog />,
      image: "/images/services1/support.jpg",
    },
    {
      title: "Infrastructure",
      description:
        "One Touch Technology ensures your IT infrastructure is always optimised to support the stable and highly available services organisations demand.",
      icon: <Laptop />,
      image: "/images/services1/infra.jpeg",
    },
    {
      title: "Endpoint management",
      description:
        "Client and server endpoints are managed as one estate, ensuring security and stability while maximising uptime and employee productivity.",
      icon: <Server />,
      image: "/images/services1/endpoint.jpg",
    },
    {
      title: "Managed services plus",
      description:
        "One Touch provides advanced management tools to clients who want to take their IT Service Management to a higher level.",
      icon: <IconRouteAltLeft />,
      image: "/images/services1/ms.jpg",
    },
    {
      title: "Applications",
      description:
        "One Touch supports Software as well as on-premise deployments, ensuring applications are always optimised for the best possible user experience.",
      icon: <CodeXml />,
      image: "/images/services1/app.jpg",
    },
    {
      title: "Disaster Recovery",
      description:
        "One Touch ensures quick recovery from disruptions, minimizing downtime and protecting critical operations with effective disaster recovery planning.",
      icon: <ShieldAlert />,
      image: "/images/services1/dr.png",
    },
    {
      title: "Cloud Management",
      description:
        "One Touch optimizes your cloud environment for better performance, cost control, and seamless integration with your IT systems.",
      icon: <CloudCog />,
      image: "/images/services/cloud.jpg",
    },
  ];
  return (
    <div className="gap- relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  image,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative  flex  flex-col py-10 dark:border-neutral-800 lg:border",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border",
        index < 4 && "dark:border-neutral-800 lg:border",
      )}
      style={{
        backgroundImage: `url(${image})`, // Use the image from data
        backgroundSize: "cover",
        // objectPosition: "center",
      }}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-black from-neutral-100 to-transparent opacity-85 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-black from-neutral-100 to-transparent opacity-85 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block  transition duration-200 group-hover/feature:translate-x-2 text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-300">
        {description}
      </p>
    </div>
  );
};
