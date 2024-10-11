// IMPORTS REACT ===========================================//
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// IMPORT APP ===========================================//
import {
  selectUser,
  selectIsEditing,
  setUser,
  selectToken,
  setIsEditing,
} from "../../app/userSlice";
import { putUser } from "../../app/userApi";

// IMPORT SCSS ===========================================//
import scssWelcome from "./welcome.module.scss";

// COMPONENTS WELCOME ===================================//
const Welcome = () => {
  const user = useSelector(selectUser);
  const isEditing = useSelector(selectIsEditing);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const form = useRef();

  const updateUser = (event) => {
    event.preventDefault();

    const userInfo = {
      firstName: form.current[0].value,
      lastName: form.current[1].value,
    };

    putUser(token, userInfo).then((data) => dispatch(setUser(data.body)));
    dispatch(setIsEditing(false));
  };

  return (
    <section className={scssWelcome.welcome}>
      {isEditing ? (
        <>
          <h1>La bienvenue</h1>
          <form id="changeUserData" ref={form} onSubmit={(e) => updateUser(e)}>
            <div className={scssWelcome.inputWrapper}>
              <input type="text" id="firstname" placeholder={user?.firstName} />
              <input type="text" id="lastname" placeholder={user?.lastName} />
            </div>
            <div className={scssWelcome.inputWrapper}>
              <button className={scssWelcome.loginButton} type="submit">
                Sauver
              </button>
              <button
                className={scssWelcome.loginButton}
                type="reset"
                onClick={() => dispatch(setIsEditing(false))}
              >
                Annuler
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>
            La bienvenue
            <br />
            {user?.firstName} {user?.lastName}!
          </h1>
          <button
            className={scssWelcome.buttonEdit}
            onClick={() => dispatch(setIsEditing(true))}
          >
            Editer le profil
          </button>
        </>
      )}
    </section>
  );
};

export default Welcome;
// END COMPONENTS WELCOME ===================================//
