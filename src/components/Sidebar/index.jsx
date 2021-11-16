import './index.css'

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import React, { useState } from "react";


function Sidebar() {
  const [state, setState] = useState({
    left: false,
  });

  const anchor = "left";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="SidebarContainer">
      <Button onClick={toggleDrawer(anchor, true)}>{<MenuIcon />}</Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <div className="NavlinksMobile">
            <Link className="NavLinkMobile" to="/categories">
              Participar de evento
            </Link>
            <Link className="NavLinkMobile" to="/signin">
              Entrar
            </Link>
            <Link className="NavLinkMobile Contrast" to="/signup">
              Cadastre-se
            </Link>
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;
