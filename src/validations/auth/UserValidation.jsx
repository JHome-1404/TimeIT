import * as Yup from "yup";

function UserValues() {
  return {
    name: "",
    age: "",
    country: "",
    city: "",
    email: "",
    phone: "",
    password: "",
  };
}

function UserValitations() {
  return Yup.object({
    name: Yup.string().max(30, "Maximo de Caracteres 30"),
    age: Yup.number().min(12, "Edad menor a 12").max(99, "Edad mayor a 99"),
    country: Yup.string().max(30, "Maximo de Caracteres 30"),
    city: Yup.string().max(30, "Maximo de Caracteres 30"),
    email: Yup.string()
      .email("El email no es valido")
      .max(30, "Maximo de Caracteres 30"),
    phone: Yup.number().max(9999999999, "Maximo de Caracteres 10"),
    password: Yup.string(),
  });
}

export { UserValues, UserValitations };
