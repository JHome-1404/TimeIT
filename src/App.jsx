import { BrowserRouter as Router } from "react-router-dom";
import { DefineRoute } from "./routes";

function App() {
  return (
    <>
      <Router>
        <DefineRoute />
      </Router>
    </>
  );
}

export { App };
