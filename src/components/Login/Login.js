import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../home/Home";
import Registration from "../Registration/Registration";



function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);
    const [registration, setRegistration] = useState(true);
    const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("SubmissionPassword").replace(/"/g, "");
    let mail = localStorage.getItem("SubmissionEmail").replace(/"/g, ""); // .replace(/"/g,"") is used to remove the double quotes for the string

      
      
    if (!emaillog || !passwordlog) {
      setFlag(true);
        console.log("EMPTY");
        setRegistration(!registration);
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
    }
    
    function handleClick() {
      setRegistration(!registration);
    }

  return React.createElement(
    "div",
    null,
    home
      ? React.createElement(
          "form",
          {
            onSubmit: handleLogin,
          },
          React.createElement("h3", null, "LogIn"),
          React.createElement(
            "div",
            {
              className: "form-group",
            },
            React.createElement("label", null, "Email"),
            React.createElement("input", {
              type: "email",
              className: "form-control",
              placeholder: "Enter email",
              onChange: (event) => setEmaillog(event.target.value),
            })
          ),
          React.createElement(
            "div",
            {
              className: "form-group",
            },
            React.createElement("label", null, "Password"),
            React.createElement("input", {
              type: "password",
              className: "form-control",
              placeholder: "Enter password",
              onChange: (event) => setPasswordlog(event.target.value),
            })
          ),
          React.createElement(
            "button",
            {
              type: "submit",
              className: "btn btn-dark btn-lg btn-block",
            },
            "Login"
          ),
          React.createElement(
            "p",
            {
              className: "forgot-password text-right",
            },
            "Not registered ?",
            React.createElement(
              "a",
              {
                href: "#",
                onClick: handleClick,
              },
              "Signup"
            )
          ),
          flag &&
            React.createElement(
              Alert,
              {
                color: "primary",
                variant: "warning",
              },
              "Fill correct Info else keep trying."
            )
        )
      : React.createElement(Home, null)
  );
}

export default Login;