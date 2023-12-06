import { useState } from "react";
import { LoginForm, RegisterForm } from "../../components";
import { Tab } from "semantic-ui-react";

function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);

  const openLogin = () => {
    setActiveIndex(0);
  };

  const panes = [
    {
      menuItem: "Login",
      render: () => (
        <Tab.Pane>
          <div className="icon">Icon</div>
          <LoginForm openLogin={openLogin} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Register",
      render: () => (
        <Tab.Pane>
          <div className="icon">Icon</div>
          <RegisterForm openLogin={openLogin} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="auth-container p-10 ">
      <Tab
        panes={panes}
        className="auth-tab"
        activeIndex={activeIndex}
        onTabChange={(_, data) => {
          setActiveIndex(data.activeIndex);
        }}
      />
    </div>
  );
}

export { Auth };
