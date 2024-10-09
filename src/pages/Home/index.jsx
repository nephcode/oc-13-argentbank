// IMPORT SCSS
import scssHome from "./home.module.scss";

// IMPORT FEATURE COMPONENT
import Feature from "../../components/Feature";

// PLEASE NEED HELP DIDBUGGING THIS CODE
// NEPHA KEEP CALM AND CODE ON
const Home = () => {
  return (
    <main>
      <div className={scssHome.hero}>
        <section className={scssHome.herocontent}>
          <h2 className={scssHome.only}>Promoted Content</h2>
          <p className={scssHome.subtitle}>No fees.</p>
          <p className={scssHome.subtitle}>No minimum deposit.</p>
          <p className={scssHome.subtitle}>High interest rates.</p>
          <p className={scssHome.text}>
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>

      <Feature />
    </main>
  );
};

export default Home;
