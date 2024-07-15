import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context as StudentContext } from "../contexts/StudentContext";

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({
    registrationNumber: "",
    password: "",
  });

  const {
    state: { student },
    signInStudent,
  } = useContext(StudentContext);

  useEffect(() => {
    if (!student) {
      return;
    }
    redirectToStudentPortal();
  }, [student]);

  const navigate = useNavigate();

  const redirectToStudentPortal = () => navigate("/home");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <h1>Login {student?.firstName}</h1>
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
              await signInStudent(credentialToPass);
              redirectToStudentPortal();
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
