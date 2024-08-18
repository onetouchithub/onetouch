import dynamic from "next/dynamic";

const DynamicWorld = dynamic(() => import("./globe").then((mod) => mod.World), {
  ssr: false,
});

export default DynamicWorld;
