// IMPORT MODULES ==============================================//
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// IMPORT COMPONENTS ==========================================//
import Welcome from "../../components/Welcome";
import Account from "../../components/Account";

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
      <Account />
    </main>
  );
};

export default Profile;
// End of Profile component ===================================//
