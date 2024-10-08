import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, signout } from "../../app/userSlice";

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)


  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src="src/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {
          user ?
            <>
              <Link className="main-nav-item" to={"/profile"}>
                <i className="fa fa-user-circle"></i>
                &nbsp;
                {user?.firstName}
              </Link>
              <Link className="main-nav-item" to={"/"} onClick={() => dispatch(signout())}>
                <i className='fa fa-sign-out'></i>
                &nbsp;
                Sign Out
              </Link>
            </>
            : <Link className="main-nav-item" to={"/sign-in"}>
              <i className="fa fa-user-circle"></i>
              &nbsp;
              Sign In
            </Link>
        }
      </div>
    </nav>
  );
};

export default Header;
