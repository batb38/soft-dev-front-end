import React from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import AuthService from "../services/auth.service";
import history from "../assets/history";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  if (currentUser === null) {
    console.log(currentUser);
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <button
        className="btn btn-primary btn-block"
        onClick={() => {
          axios
            .get("http://localhost:8081/api/auth/logout")
            .then((result) => {
              console.log(result);
              history.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
        }}
      >
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default Profile;
