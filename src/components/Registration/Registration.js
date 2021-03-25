import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from '../Login/Login'

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info] = useState(true);
  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("SubmissionEmail", JSON.stringify(email));
      localStorage.setItem("SubmissionPassword", JSON.stringify(password));
      localStorage.setItem("name", JSON.stringify(name));
      console.log("Saved in Local Storage");
      setLogin(!login);
    }
    }

  // Directly to the login page
  function handleClick() {
    setLogin(!login);
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("nav", {
      className: "navbar navbar-light",
    }),
    info
      ? React.createElement(
          "div",
          null,
          " ",
          login
            ? React.createElement(
                "form",
                {
                  onSubmit: handleFormSubmit,
                },
                React.createElement("h3", null, "Register"),
                React.createElement(
                  "div",
                  {
                    className: "form-group",
                  },
                  React.createElement("label", null, "Name"),
                  React.createElement("input", {
                    type: "name",
                    className: "form-control",
                    placeholder: "Enter Full Name",
                    name: "name",
                    onChange: (event) => setName(event.target.value),
                  })
                ),
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
                    onChange: (event) => setEmail(event.target.value),
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
                    onChange: (event) => setPassword(event.target.value),
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "form-group",
                  },
                  React.createElement("label", null, "Phone No."),
                  React.createElement("input", {
                    type: "Phone",
                    className: "form-control",
                    placeholder: "Enter contact no",
                    onChange: (event) => setPhone(event.target.value),
                  })
                ),
                React.createElement(
                  "button",
                  {
                    type: "submit",
                    className: "btn btn-dark btn-lg btn-block",
                  },
                  "Register"
                ),
                React.createElement(
                  "p",
                  {
                    className: "forgot-password text-right",
                  },
                  "Already registered ",
                  React.createElement(
                    "a",
                    {
                      href: "#",
                      onClick: handleClick,
                    },
                    "log in?"
                  )
                ),
                flag &&
                  React.createElement(
                    Alert,
                    {
                      color: "primary",
                      variant: "danger",
                    },
                    "I got it you are in hurry! But every Field is important!"
                  )
              )
            : React.createElement(Login, null)
        )
      : ""
  );
}

export default Registration;
