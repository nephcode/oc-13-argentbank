// IMPORT MODULES ==============================================//
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, signout } from "../../app/userSlice";

// IMPORT SCSS ================================================//
import scssHeader from "./header.module.scss";

// COMPONENTS HEADER ==========================================//
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <header className={scssHeader.header}>
      <div className={scssHeader.logo}>
        <Link className={scssHeader.logo} to={"/"}>
          <img
            className={scssHeader.logoImage}
            src="src/assets/argentBankLogo.svg"
            alt="Argent Bank Logo"
          />
        </Link>
      </div>
      <div className={scssHeader.connect}>
        {user ? (
          <>
            <Link className={scssHeader.connect} to={"/profile"}>
              <i className="fa fa-user-circle"></i>
              &nbsp;
              {user?.firstName}
            </Link>
            <Link
              className={scssHeader.connect}
              to={"/"}
              onClick={() => dispatch(signout())}
            >
              <i className="fa fa-sign-out"></i>
              &nbsp; Déconnexion
            </Link>
          </>
        ) : (
          <Link className={scssHeader.connect} to={"/login"}>
            <i className="fa fa-user-circle"></i>
            &nbsp; Connexion
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
// End of Header component ===================================//
