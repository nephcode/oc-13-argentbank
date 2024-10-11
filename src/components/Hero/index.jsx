//============================================= ARGENTBANK ===========//
// _HERO =============================================================//
//==================================== By NEPHELIM ============ 2024 =//

// IMPORT SCSS MODULE ========================================//
import scssHero from "./hero.module.scss";

// Hero component ============================================//
const Hero = () => {
  return (
    <section className={scssHero.hero}>
      <div className={scssHero.heroSquare}>
        <p className={scssHero.subtitle}>Pas de frais.</p>
        <p className={scssHero.subtitle}>Aucun dépôt minimum.</p>
        <p className={scssHero.subtitle}>Taux d'intérêt élevés.</p>
        <p className={scssHero.text}>
          Ouvrez un compte épargne chez Argent Bank dès aujourd'hui !
        </p>
      </div>
    </section>
  );
};
export default Hero;
// End of Hero component ======================================//
