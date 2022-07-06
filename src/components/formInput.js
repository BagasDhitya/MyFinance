import React from "react";
import { Link } from "react-router-dom";
import "../themes/login.css";

const formInput = (props) => {
  return (
    <div>
      {props.login ? (
        <form>
          <h3 className="title">Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={props.email}
              onChange={props.handleEmail}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={props.password}
              onChange={props.handlePassword}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.onClick}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      ) : (
        <>
          {props.register && (
            <form>
              <h3 className="title">My Finance</h3>
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  className="form-control"
                  placeholder="Enter fullname"
                  value={props.fullname}
                  onChange={props.handleFullname}
                />
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={props.email}
                  onChange={props.handleEmail}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={props.password}
                  onChange={props.handlePassword}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={props.onClick}
                >
                  Register
                </button>
              </div>
              <p className="forgot-password text-right">
                Already have an account? <Link to="login">Sign in here!</Link>
              </p>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default formInput;
