import "./index.css";

import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

import React from "react";

function Signin() {
  return (
    <div className="LargeCardContainer">
      <div className="LargeCard">
        <form className="FormContainer">
          <h3>Fazer login</h3>

          <div className="FormControl">
            <div className="FormControlInput">
              <label htmlFor="email">E-mail</label>
              <MailIcon  className="InputIcon"/>
              <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
            </div>

            <div className="FormControlInput">
              <label htmlFor="password">Senha</label>
              <LockIcon className="InputIcon" />
              <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
            </div>
          </div>
        </form>

        <div className="Divider">
          <span>ou</span>
        </div>

        <div className="SocialLoginButtons">
          
        </div>
      </div>
    </div>
  );
}

export default Signin;
