import loader from "./../../assets/loader.png";
import heroImage from "./../../assets/hero.jpg";

const Loader = (props) => <img src={loader} alt="loading Icon" {...props} />;
const HeroImage = (props) => (
  <img src={heroImage} alt="Close Icon" {...props} />
);

export { Loader, HeroImage };
