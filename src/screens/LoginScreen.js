import { useState } from "react";

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({
    registrationNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(credentials);
          // The default behavior of a Form Submit in HTML is a GET API call which causes the page to refresh
          // And it redirects to the URL appended with values in the form as Query Params
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
    </>
  );
};

export default LoginScreen;
