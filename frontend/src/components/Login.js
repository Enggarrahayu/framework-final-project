import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginUser } from "../actions/LoginUser";
import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const styles = {
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "# f50057",
  },
  form: {
    marginTop: 1,
  },
  errorText: {
    color: "# f50057",
    marginBottom: 5,
    textAlign: "center",
  },
};

class Login extends Component {
  state = { email: "", password: "" };
  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };
  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };
  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(LoginUser(email, password));
  };
  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/cart" />;
    } else {
      return (
        <div>
          <div className="products-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="title-all text-center"
                    style={{
                      border: "1px solid #010101",
                      width: "500px",
                      margin: "auto",
                      background: "#ffffff",
                    }}
                  >
                    <h2>
                      {" "}
                      <b> OOps, Login First Brou </b>
                    </h2>
                    <div>
                      <h5>
                        <a
                          data-toggle="collapse"
                          href="#formLogin"
                          role="button"
                          aria-expanded="false"
                        >
                          Click here to Login
                        </a>
                      </h5>
                      <form
                        className="mt-3 collapse review-form-box"
                        id="formLogin"
                      >
                        <div
                          className="form-row"
                          style={{ width: "400px", margin: "auto" }}
                        >
                          <div
                          className="form-row"
                          style={{ width: "400px", margin: "auto" }}
                        >
                          <label htmlFor="InputEmail" className="mb-0">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            placeholder="Enter Email"
                            name="email"
                            onChange={this.handleEmailChange}
                          />
                        </div>
                        <div
                          className="form-row"
                          style={{ width: "400px", margin: "auto" }}
                        >
                          <label htmlFor="InputPassword" className="mb-0">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="InputPassword"
                            placeholder="Password"
                            name="password"
                            onChange={this.handlePasswordChange}
                          />
                        </div>
                        <div
                          style={{
                            width: "400px",
                            margin: "auto",
                            padding: "15px",
                          }}
                        >
                        {loginError && (
                            <Typography component="p" className={classes.errorText}>
                                Incorrect email or password.
                            </Typography>
                        )}
                        <button
                            type="button"
                            variant="contained"
                            className="btn hvr-hover"
                            onClick={this.handleSubmit}
                        >
                            Sign In
                        </button>
                        </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}
export default withStyles(styles)(connect(mapStateToProps)(Login));
