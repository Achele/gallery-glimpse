import styles from "../../styles/Hero.module.css";

const Aside = () => {
  return (
    <section
      className={`${styles.heroBackground} xs:h-1/2 sm:h-2/3 md:h-screen lg:max-h-screen`}
    >
      <div className="text-white w-1/2 my-0 mx-auto py-72 lg:py-96">
        <h1 className="font-semibold">Gallery Glimpse</h1>
        <p>Your one stop shop for amazing photos on the web</p>
      </div>
    </section>
  );
};

export default Aside;
