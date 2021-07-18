import { useState } from "react";
import "./LoginPage.css";

export const LoginPage = ({ setIsLoggedIn, history, setUserName }) => {

  const [login, setLogin] = useState('');
  const [, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userName', login)
    setUserName(login);
    setIsLoggedIn(true);
    history.push('/');
  }

  return (
    <main className="background">

      <form className="loginForm"
        onSubmit={handleLogIn}
      >
        <h2>Sign In</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            placeholder="Login"
            onChange={handleLoginChange}
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button className="blackBtn" type="submit">
            Sign In
          </button>
        </div>
      </form>

    </main>
  );
};
