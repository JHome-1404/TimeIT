import { useState } from "react";
import { useAuth } from "../../hooks";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { UserForm } from "../auth";
import { User } from "../../data";
import { useNavigate } from "react-router-dom";

const userController = new User();

function BtnUser() {
  const { user, logout, deleteUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const data = await userController.logoutUser();
    if (typeof data !== "object") {
      alert(data);
      return;
    }
    const { msg } = data;
    alert(msg);
    await logout();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  const handleDelete = async () => {
    const data = await userController.deleteUser();
    if (typeof data !== "object") {
      alert(data);
      return;
    }
    const { msg } = data;
    alert(msg);
    await deleteUser();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        {user.name} <Icon name="user" />
      </Button>

      <Modal closeIcon open={open} onClose={() => setOpen(false)}>
        <Header icon="user" content={`Bienvenido ${user.name}`} />
        <Modal.Content scrolling>
          <Header icon="info" content="Tu Informacion" />
          <p>ID: {user._id}</p>
          <p>Nombre: {user.name}</p>
          <p>Edad: {user.age}</p>
          <p>Ciudad: {user.city}</p>
          <p>Pais: {user.country}</p>
          <p>Telefono: {user.phone}</p>
          <p>Email: {user.email}</p>
          <p>Passoword: {user.password}</p>
        </Modal.Content>

        <Modal.Actions>
          <Button color="blue" inverted onClick={() => setSecondOpen(true)}>
            <Icon name="exchange" /> Cambiar Datos
          </Button>
          <Button color="purple" inverted onClick={handleDelete}>
            <Icon name="trash" /> Borrar Usuario
          </Button>
          <Button color="red" inverted onClick={handleLogout}>
            <Icon name="remove" /> Cerrar Sesion
          </Button>
        </Modal.Actions>

        <Modal
          closeIcon
          open={secondOpen}
          onClose={() => setSecondOpen(false)}
          size="large"
        >
          <Header icon="edit" content="Formulario de Datos" />
          <Modal.Content>
            Por favor ingresa los datos que deseas actualizar y procura no
            enviar el formulario vacio
          </Modal.Content>
          <Modal.Content scrolling>
            <UserForm></UserForm>
          </Modal.Content>
        </Modal>
      </Modal>
    </>
  );
}

export { BtnUser };
