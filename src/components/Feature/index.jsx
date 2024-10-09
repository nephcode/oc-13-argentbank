// import {} ==========================================//
//import { React } from 'react';
//import { Link } from "react-router-dom";
// Import SocialBar styles ============================//
import scssFeature from "./feature.module.scss";
//import data =========================================//
import featureData from "./feature_fr.json";

// FeatureBar component ================================//
const featureBar = () => {
  return (
    <section
      className={scssFeature.features}
      role="complementary"
      aria-label="Liens vers les réseaux professionels"
    >
      <h2 className={scssFeature.only}>Features</h2>
      {featureData.map((feat) => (
        <div
          key={feat.id}
          data-id={feat.id}
          className={scssFeature.featureitem}
        >
          <img
            src={feat.image_url}
            alt=""
            aria-hidden="true"
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feat.hn}</h3>
          <p>{feat.text}</p>
        </div>
      ))}
    </section>
  );
};
export default featureBar;
// End of features component ========================//
