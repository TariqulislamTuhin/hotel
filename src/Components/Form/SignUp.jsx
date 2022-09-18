import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const {
    user,
    handleSignUp,
    handleSubmit,
    name,
    email,
    password,
    confirmPassword,
    register,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setRegister,
    loading,
    setLoading,
    handleGoogleSignUp,
  } = props;
  return (
    <div>
      {window.localStorage.getItem("user")}
      <form onSubmit={(e) => (register ? handleSignUp(e) : handleSubmit(e))}>
        {register && (
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="email"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
            />
          </div>
        )}

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control"
          />

          {register && (
            <div className="col-md-12">
              <label htmlFor="confirmPassword" className="form-label">
                Password
              </label>
              <input
                value={confirmPassword}
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                id="confirmPassword"
              />
              {confirmPassword && password !== confirmPassword && (
                <span className="text-danger">Invalid Password</span>
              )}
            </div>
          )}

          <div className="text-end mt-2">
            <span>
              {!register ? "Create New Account " : "Already Member "}
              <span
                className="btn btn-primary"
                onClick={() => setRegister(!register)}
              >
                {!register ? "Register" : "SignIn"}
              </span>
            </span>
          </div>
        </div>
        <div className="form-outline mb-4 text-center">
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4"
            disabled={loading}
          >
            {register ? "Register " : "Sign in"}
          </button>

          <br />
          <b>{register ? "Sign up with" : "Sign in with"}</b>
          <div className="d-flex-">
            <FontAwesomeIcon
              icon={faGoogle}
              size="3x"
              role="button"
              title="sign in with google"
              onClick={handleGoogleSignUp}
              style={{ marginLeft: "10px", color: "#79AACB" }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
