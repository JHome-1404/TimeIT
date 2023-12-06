import { useState } from "react";
import { useAuth } from "../../hooks";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function BtnUser() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const userData = Object.keys(user).map((data, index) => (
    <p key={index}>{`${data}: ${user[data]}`}</p>
  ));

  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button onClick={() => setOpen(true)}>
          {user.name} <Icon name="user" />
        </Button>
      }
      onClose={() => setOpen(false)}
    >
      <Header icon="user" content={`Bienvenido ${user.name}`} />
      <Modal.Content>{userData}</Modal.Content>y
    </Modal>
  );
}

export { BtnUser };
