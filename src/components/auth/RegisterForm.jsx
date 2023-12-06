import { useFormikForm } from "../../hooks";
import { Form } from "semantic-ui-react";
import { RegisterValues, RegisterValitations } from "../../validations";
import { Auth } from "../../data/Auth";
import PropTypes from 'prop-types';

const authController = new Auth();

function RegisterForm({ openLogin }) {
  const onSubmitForm = async (formValues, setRes) => {
    const data = await authController.register(formValues);
    if (typeof data !== "object") {
      setRes(data);
      return;
    }
    const { msg } = data;
    setRes(msg);
    setTimeout(() => {
      openLogin();
    }, 4000);
  };

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    res,
    loading,
  } = useFormikForm(RegisterValues, RegisterValitations, onSubmitForm);

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Nombre:</label>
          <Form.Input
            name="name"
            type="text"
            placeholder="Nombre"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 error">{errors.name}</p>}
        </Form.Field>
        <Form.Field required>
          <label>Edad:</label>
          <Form.Input
            name="age"
            type="number"
            placeholder="Edad"
            value={values.age}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.age && <p className="text-red-500 error">{errors.age}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Pais:</label>
          <Form.Input
            name="country"
            type="text"
            placeholder="Pais"
            value={values.country}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.country && (
            <p className="text-red-500 error">{errors.country}</p>
          )}
        </Form.Field>
        <Form.Field required>
          <label>Ciudad:</label>
          <Form.Input
            name="city"
            type="text"
            placeholder="Ciudad"
            value={values.city}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.city && <p className="text-red-500 error">{errors.city}</p>}
        </Form.Field>
      </Form.Group>
      <Form.Field required>
        <label>Telefono:</label>
        <Form.Input
          name="phone"
          type="number"
          placeholder="Telefono"
          value={values.phone}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 error">{errors.phone}</p>}
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Email:</label>
          <Form.Input
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            autoComplete="username"
          />
          {errors.email && <p className="text-red-500 error">{errors.email}</p>}
        </Form.Field>
        <Form.Field required>
          <label>Contraseña:</label>
          <Form.Input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            autoComplete="current-password"
          />
          {errors.password && (
            <p className="text-red-500 error">{errors.password}</p>
          )}
        </Form.Field>
      </Form.Group>
      <Form.Button type="submit" fluid disabled={loading}>
        {loading ? "Registrando..." : "Registrarse"}
      </Form.Button>
      {res && <p className="res">{res}</p>}
    </Form>
  );
}

RegisterForm.propTypes = {
  openLogin: PropTypes.func.isRequired,
};

export { RegisterForm };
// ? TAREA : crear el sistema de validacion individual de cada input del formulario
