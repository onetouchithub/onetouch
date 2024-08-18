import SectionTitle from "../Common/SectionTitle";
import { FeaturesSection } from "../ui/accernity/features";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Meet our services"
            paragraph="We offer you all professional IT services"
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
          <FeaturesSection />
        </div>
      </section>
    </>
  );
};

export default Features;
