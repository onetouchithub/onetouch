import { Feature } from "@/types/feature";
import { CardSpotlight } from "../ui/card-spot-light";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    // <CardSpotlightDemo/>
    <CardSpotlight cardImage={feature.image}>
      <div className="w-ful relative z-20 cursor-pointer">
        <div className="">
          <div className="z-20 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md  text-primary">
            {icon}
          </div>
          <h3 className="mb-5 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default SingleFeature;
