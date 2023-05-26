import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {
  const [error, setError] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setError(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      {error.email && <p>{error.email}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {error.password && <p>{error.password}</p>}
      <button>Submit</button>
    </form>
  );
};
export default Form;
