import { useFormikForm, useAuth } from "../../hooks";
import { Form } from "semantic-ui-react";
import { LoginValues, LoginValitations } from "../../validations";
import { Auth } from "../../data";
import { useNavigate } from "react-router-dom";

const authController = new Auth();

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmitLogin = async (formValues, setRes) => {
    const data = await authController.login(formValues);
    if (typeof data !== "object") {
      setRes(data);
      return;
    }
    login(data);
    navigate("/home");
  };

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    res,
    loading,
  } = useFormikForm(LoginValues, LoginValitations, onSubmitLogin);

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
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
      <Form.Button type="submit" fluid disabled={loading}>
        {loading ? "Iniciando..." : "Iniciar Sesion"}
      </Form.Button>
      {res && <p className="res">{res}</p>}
    </Form>
  );
}

export { LoginForm };
