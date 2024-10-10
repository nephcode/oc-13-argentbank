// IMPORT SCSS
import scssHome from "./home.module.scss";

// IMPORT FEATURE COMPONENT
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";

// PLEASE NEED HELP DIDBUGGING THIS CODE
// NEPHA KEEP CALM AND CODE ON
const Home = () => {
  return (
    <main className={scssHome.home}>
      <Hero />
      <Feature />
    </main>
  );
};

export default Home;
