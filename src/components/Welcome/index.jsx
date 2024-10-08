// IMPORTS ==============================================//

import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectIsEditing,
  setUser,
  selectToken,
  setIsEditing,
} from "../../app/userSlice";
import { useRef } from "react";
import { putUser } from "../../app/userApi";

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
    <div className="header">
      {isEditing ? (
        <>
          <h1>La bienvenue</h1>
          <form id="changeUserData" ref={form} onSubmit={(e) => updateUser(e)}>
            <div className="input-wrapper">
              <input type="text" id="firstname" placeholder={user?.firstName} />
              <input type="text" id="lastname" placeholder={user?.lastName} />
            </div>
            <div className="input-wrapper">
              <button className="sign-in-button" type="submit">
                Sauver
              </button>
              <button
                className="sign-in-button"
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
            className="edit-button"
            onClick={() => dispatch(setIsEditing(true))}
          >
            Editer le profil
          </button>
        </>
      )}
    </div>
  );
};

export default Welcome;
// END COMPONENTS WELCOME ===================================//
