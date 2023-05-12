import { useState } from "react";
import style from "./formulario.module.css";
import { validacion } from "./validacion";
const Form = ({ login, EMAIL, PASSWORD }) => {
  const [userData, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange = (event) => {
    const propiedad = event.target.name;
    const value = event.target.value;

    setForm({ ...userData, [propiedad]: value });
    const updateForm = { ...userData, [propiedad]: value };

    setErrors(validacion(updateForm));
  };

  const sendForm = (event) => {
    event.preventDefault();
    login(userData, EMAIL, PASSWORD);
  };

  return (
    <div className={style.head}>
      <form className={style.formhead} onSubmit={sendForm}>
        <div>
          <label htmlFor="email" className={style.labelform}>
            Email:{" "}
          </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handlechange}
            className={style.inputform}
          />
          <span className={style.span}>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password" className={style.labelform}>
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handlechange}
            className={style.inputform}
          />
          <span className={style.span}>{errors.password}</span>
        </div>
        <button type="submit" className={style.boton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
