import * as Yup from "yup";

function LoginValues() {
  return {
    email: "",
    password: "",
  };
}

function LoginValitations() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es valido")
      .max(30, "Maximo de Caracteres 30")
      .required("Campo Obligatorio"),
    password: Yup.string().required("Campo Obligatorio"),
  });
}

export { LoginValues, LoginValitations };
// ? TAREA : crear el sistema de validacion con .matches()
