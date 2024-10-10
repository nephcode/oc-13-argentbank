// IMPORT MODULES ==============================================//
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// IMPORT API ================================================//
import { postLogin } from "../../app/userApi";
import { setToken } from "../../app/userSlice";

// IMPORT SCSS ================================================//
import scssLogin from "./login.module.scss";

// COMPONENTS LOGIN ============================================//

const Login = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const userInfo = {
      email: form.current[0].value,
      password: form.current[1].value,
    };

    postLogin(userInfo)
      .then((data) => {
        if (data.body) {
          dispatch(setToken(data.body.token));
          navigate("/profile");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => setError(err.message || err));
  };

  return (
    <main className={scssLogin.login}>
      <section className={scssLogin.loginContent}>
        <i className={`${scssLogin.loginIcon} fa fa-user-circle`}></i>
        <h1>Connexion</h1>
        <form ref={form} onSubmit={(e) => submitForm(e)}>
          <div className={scssLogin.inputWrapper}>
            <label htmlFor="username">Login</label>
            <input type="text" id="username" />
          </div>
          <div className={scssLogin.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={scssLogin.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={scssLogin.loginButton} type="submit">
            Sign In
          </button>
        </form>
        <p>{error}</p>
      </section>
    </main>
  );
};

export default Login;
// END COMPONENTS LOGIN ========================================//
