import { NavLink } from "react-router-dom";
import { BtnUser } from "./BtnUser";

function HeaderNav() {
  return (
    <nav className="navbar">
      <h2>Nabvar</h2>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Inicio
      </NavLink>

      <NavLink
        to="/alarms"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Recordatorios
      </NavLink>
      <NavLink
        to="/notes"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Notas
      </NavLink>
      <NavLink
        to="/routines"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Hábitos
      </NavLink>
      <BtnUser />
    </nav>
  );
}

export { HeaderNav };
