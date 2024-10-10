// IMPORT MODULES ==============================================//
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// IMPORT COMPONENTS ==========================================//
import Welcome from "../../components/Welcome";
import accountData from "./account_fr.json";
// IMPORT REDUX ===============================================//
import { selectToken, setUser } from "../../app/userSlice";
import { postUser } from "../../app/userApi";

// IMPORT SCSS ================================================//
import scssProfile from "./profile.module.scss";

// COMPONENTS PROFILE =========================================//
const Profile = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      postUser(token).then((data) => dispatch(setUser(data.body)));
    }
  }, [dispatch, navigate, token]);

  return (
    <main className={scssProfile.profile}>
      <Welcome />
      <section>
        {accountData.map((account) => (
          <article
            key={account.id}
            data-id={account.id}
            className={scssProfile.account}
          >
            <div className={scssProfile.accountWrapper}>
              <h3 className={scssProfile.accountTitle}>{account.account}</h3>
              <p className={scssProfile.accountAmount}>{account.amount}</p>
              <p className={scssProfile.accountDescription}>Solde Disponible</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className={scssProfile.transaction}>
                Voir l'opération
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Profile;
// End of Profile component ===================================//
