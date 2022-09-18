import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/UserProvider";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, setUser] = useContext(userContext);
  const navigate = useNavigate();
  const signOut = ()=>{
    setUser({ isAuthenticated: false, name: null, email: null });
    window.localStorage.removeItem("user")
    navigate('/login');
  }
  return (
    <div>
      <div className="header-background">
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
          </li>          
          
          <li>
            <NavLink
              to={{ pathname:"/book",state:{prevPath:'/book'} }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Book
            </NavLink>
          </li>
          {
          user && !user.isAuthenticated ? (
            <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Login
            </NavLink>
          </li>
           ) :(
            <li >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              title="logout"
              onClick={signOut}
              type="button"
              className="logout"
            >
              Logout
            </FontAwesomeIcon>
          </li>
           )
          }
        </ul>
        <h1 className="text-center">Burj Al Arab</h1>
        <h3 className="text-center">A global icon of Arabian Luxury</h3>
      </div>
    </div>
  );
};

export default Header;
