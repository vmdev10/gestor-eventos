import "./Navbar.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div className="NavContainer">
      <div className="Navbar">
        <div className="MenuToggle">
          <MenuIcon />
        </div>

        <Link className="Logo" to="/">
          <img src="/images/logo.png" alt="" />
        </Link>

        <div className="SearchIcon">
          <SearchIcon />
        </div>

        <div className="InputSearch">
          <div className="SearchIcon">
            <SearchIcon />
          </div>
          <input
            className="formControl"
            type="search"
            placeholder="Pesquise por eventos, cursos, workshops..."
            aria-label="Search"
          />
        </div>

        <div className="NavLinks">
          <Link className="NavLink" to="categories">
            Participar de evento
          </Link>

          <Link className="NavLink" to="login">
            Entrar
          </Link>

          <Link className="NavLink Contrast" to="signup">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
