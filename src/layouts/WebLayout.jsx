import { HeaderNav } from "../components";

function WebLayout(props) {
  const { children } = props;
  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="home-main">{children}</div>
    </>
  );
}

export { WebLayout };
