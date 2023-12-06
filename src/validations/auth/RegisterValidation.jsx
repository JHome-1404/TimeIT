import * as Yup from "yup";

function RegisterValues() {
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

function RegisterValitations() {
  return Yup.object({
    name: Yup.string()
      .max(30, "Maximo de Caracteres 30")
      .required("Campo Obligatorio"),
    age: Yup.number()
      .min(12, "Edad menor a 12")
      .max(99, "Edad mayor a 99")
      .required("Campo Obligatorio"),
    country: Yup.string()
      .max(30, "Maximo de Caracteres 30")
      .required("Campo Obligatorio"),
    city: Yup.string()
      .max(30, "Maximo de Caracteres 30")
      .required("Campo Obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .max(30, "Maximo de Caracteres 30")
      .required("Campo Obligatorio"),
    phone: Yup.number()
      .max(9999999999, "Maximo de Caracteres 10")
      .required("Campo Obligatorio"),
    password: Yup.string().required("Campo Obligatorio"),
  });
}

export { RegisterValitations, RegisterValues };
// ? TAREA : crear el sistema de validacion con .matches()
