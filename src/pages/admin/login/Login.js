import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../services/contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  // UserContext = { user: user, setUser: setUser }
  //const { user, setUser } = useState({});

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [inputEmailError, setInputEmailError] = useState("");
  const [inputPasswordError, setInputPasswordError] = useState("");

  const handleInputEmail = (e) => {
    // console.log(e.target.value);
    setInputEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    // console.log(e.target.value);
    setInputPassword(e.target.value);
  };

  const clearErrors = () => {
    setInputEmailError("");
    setInputPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //ko tải lại trang khi submit
    clearErrors();

    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    let formValid = true;

    if (!emailRegex.test(inputEmail)) {
      setInputEmailError("Please typing your valid email");
      formValid = false;
    }

    if (!inputPassword) {
      setInputPasswordError("Please typing your password");
      formValid = false;
    }

    if (!formValid) {
      return;
    }

    fetch(
      `https://iv6wjs.sse.codesandbox.io/users?email=${inputEmail}&password=${inputPassword}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 1) {
          // save user info to UserContext. res[0]
          setUser(res[0]);
          navigate("/admin");
        } else {
          alert("Email or password not correct!");
        }
      });
  };

  return (
    <div className="login">
      <h1>Tokyo Deli </h1>
      <h2>Sign in</h2>
      <p>Enter the email and password provided to log in</p>
      <form onSubmit={handleSubmit}>
        <div className={`form-input ${inputEmailError && "form-input-error"} `}>
          <p>
            <label>Email*</label>
            <br></br>
            <input
              type="text"
              placeholder="Email"
              value={inputEmail}
              onChange={handleInputEmail}
            />
          </p>
          <div className="error">{inputEmailError}</div>
        </div>
        <div
          className={`form-input ${inputPasswordError && "form-input-error"} `}
        >
          <p>
            <label>Password*</label>
            <br></br>
            <input
              type="text"
              placeholder="Password"
              value={inputPassword}
              onChange={handleInputPassword}
            />
          </p>
          <div className="error">{inputPasswordError}</div>
        </div>
        <div className="remember">
          <a href="#" title="Style">
            <FontAwesomeIcon icon={faSquareCheck} />
          </a>
          Remember me
        </div>
        <div className="signIn">
          <button type="submit" onClick={handleSubmit}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
