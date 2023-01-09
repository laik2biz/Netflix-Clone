import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const geEmail = "netflix@netflix.com";
  const gePassword = "netflix";

  const handleLogin = () => {
    if (email === "" && password === "") {
      return alert("Please enter a valid email and password");
    } else if (email === geEmail && password === gePassword) {
      return navigate("/Landing");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <div className="titleflick">
        <center>
          <span id="L">N</span>
          <span id="I">I</span>
          <span id="G">G</span>
          <span id="H">H</span>
          <span id="T">T</span>
          <span id="L">F</span>
          <span id="I">L</span>
          <span id="G">I</span>
          <span id="H">X</span>
        </center>
      </div>
      <center>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-character">
                DRAMA | COMEDY | HORROR | ACTION | DOCUMENTARIES | & MORE!
              </h3>
            </div>
            <br />
          </div>
        </div>
      </center>
      <center>
        <br />
        <br />
        <div className="container1">
          <h1 className="ready">Ready To</h1>
          <h1>
            <strong className="n-text">Nightflix </strong>
            <span className="and">&{"  "}</span>

            <strong className="chill">
              C{""}h{""}i{""}l{""}l?
            </strong>
          </h1>
        </div>
      </center>
      <br />
      <br />
      <div>
        <center>
          <h2 className="desc">Join millions of users who are watching NOW!</h2>
        </center>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <center>
              <img
                height="200"
                className="n-logo"
                alt="netflix"
                src="https://logosandtypes.com/wp-content/uploads/2020/07/netflix.svg"
              />
            </center>
            <br />
            <center>
              <div className="form-group mt-3">
                <input
                  onChange={handleEmail}
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email or phone number"
                />
              </div>
              <br />
              <div className="form-group mt-3">
                <input
                  onChange={handlePassword}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
            </center>
            <br />
            <center>
              <div className="d-grid gap-2 mt-3">
                <button
                  onClick={handleLogin}
                  type="submit"
                  className="btn btn-primary"
                >
                  SIGN IN
                </button>
              </div>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
