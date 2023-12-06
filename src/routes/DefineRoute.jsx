import { Routes, Route } from "react-router-dom";
import { Start, Auth, Home, Notes, Alarms, Routines } from "../pages";
import { NotFound, NotAccess } from "../pages/error";
import { loadLayout, ProtectRoute } from "../services";
import { WebLayout } from "../layouts";
import { useAuth } from "../hooks";

function DefineRoute() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route index element={<Start />}></Route>
      <Route path="/auth" element={<Auth />} />
      <Route element={<ProtectRoute user={user} />}>
        <Route path="/home" element={loadLayout(WebLayout, Home)} />
        <Route path="/notes" element={loadLayout(WebLayout, Notes)} />
        <Route path="/alarms" element={loadLayout(WebLayout, Alarms)} />
        <Route path="/routines" element={loadLayout(WebLayout, Routines)} />
      </Route>
      <Route path="/notaccess" element={<NotAccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { DefineRoute };
