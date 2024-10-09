// IMPORT SCSS MODULE ========================================//
import scssHero from "./hero.module.scss";

// Hero component ============================================//
const Hero = () => {
  <div className={scssHero.hero}>
    <section className={scssHero.herocontent}>
      <h2 className={scssHero.only}>Promoted Content</h2>
      <p className={scssHero.subtitle}>No fees.</p>
      <p className={scssHero.subtitle}>No minimum deposit.</p>
      <p className={scssHero.subtitle}>High interest rates.</p>
      <p className={scssHero.text}>
        Open a savings account with Argent Bank today!
      </p>
    </section>
  </div>;
};
export default Hero;
// End of Hero component ======================================//
