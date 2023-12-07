import { HeaderNav } from "../components";
import { Aside } from "../components";
import { useLocation } from "react-router-dom";

function WebLayout(props) {
  const { children } = props;
  let location = useLocation();
  console.log(location);

  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="main">
        <Aside></Aside>
        {children}
      </div>
    </>
  );
}

export { WebLayout };
