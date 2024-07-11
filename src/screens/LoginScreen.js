import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isValidCredential } from "../validator/form.validator";
import { LocalStorage } from "../utils/localstorage.util";
import { LibraryClient } from "../api/client/LibraryAppClient";
import { loginStudent } from "../api/endpoints/student";

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({
    registrationNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <h1> Login</h1>
        <form
          className="ui form"
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(credentials);
            let credentialToPass = {
              ...credentials,
              registrationNumber: Number(credentials.registrationNumber),
            };
            try {
              const { data: studentData } = await loginStudent(
                credentialToPass
              );
              console.log("Login Success");
              LocalStorage.addToLocalStorage("student", studentData.student);
              LocalStorage.addToLocalStorage("token", studentData.token);
              navigate("/home");
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <div className="field">
            <label>Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              placeholder="Registration Number"
              onChange={handleChange}
              value={credentials.registrationNumber}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={credentials.password}
            />
          </div>

          <button className="ui button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
