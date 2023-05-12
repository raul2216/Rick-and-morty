export const validacion = (userData, EMAIL, PASSWORD) => {
  const errors = {};
  ///Email
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (!userData.email) {
    errors.email = "debe ingresar un Email";
  } else if (userData.email.length > 35) {
    errors.email = "No puede tener más de 35 caracteres.";
  } else if (!emailRegex.test(userData.email)) {
    errors.email = "Email Invalido";
  } else {
    errors.email = "";
  }

  ///password
const numero =  /^(?=.*\d).+$/
 
 if (!numero.test(userData.password)) {
  errors.password = "la contraseña tiene que tener al menos un número.";
   } 
  else  if (userData.password.length < 6 ||  userData.password.length > 10) {
      errors.password =  "la contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
    } else {
    errors.password = "";
  }




  return errors;
};
