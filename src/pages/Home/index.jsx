//============================================= ARGENTBANK ===========//
// _HOME =============================================================//
//==================================== By NEPHELIM ============ 2024 =//

// IMPORT FEATURE COMPONENT ==========================================//
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";

// IMPORT SCSS =======================================================//
import scssHome from "./home.module.scss";

// HOME COMPONENT ====================================================//
const Home = () => {
  return (
    <main className={scssHome.home}>
      <Hero />
      <Feature />
    </main>
  );
};
export default Home;
// End of Home component ============================================//
