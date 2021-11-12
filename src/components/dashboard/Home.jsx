import "./Home.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="NavContainer">
        <div className="Navbar">
          <div className="MenuToggle">
            <MenuIcon />
          </div>

          <div className="Logo">
            <img src="/images/logo.png" alt="" />
          </div>

          <div className="SearchIcon">
            <SearchIcon/>
          </div>

          <div class="InputSearch">
              <div className="SearchIcon">
              <SearchIcon/>
              </div>
              <input className="formControl" type="search" placeholder="Pesquise por eventos, cursos, workshops..." aria-label="Search" />
              {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
          </div>

          <div className="NavLinks">
            <a href="" className="NavLink">
              <button>Participar de evento</button>
            </a>

            <a href="" className="NavLink">
              <button>Entrar</button>
            </a>

            <a href="" className="NavLink">
              <button className="Contrast">Cadastre-se</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
