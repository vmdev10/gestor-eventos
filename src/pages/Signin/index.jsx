import "./index.css";

import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";

import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="LargeCardContainer">
      <div className="WelcomeSection">
        <img src="/images/logo.png" alt="" />

        <span>Faça login ou crie uma conta</span>
      </div>

      <div className="LargeCard">
        <form className="FormContainer">
          <h3>Fazer login</h3>

          <div className="FormControl">
            <div className="FormControlInput">
              <label htmlFor="email">E-mail</label>
              <MailIcon className="InputIcon" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="FormControlInput">
              <label htmlFor="password">Senha</label>
              <LockIcon className="InputIcon" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
              />
            </div>
          </div>

          <div className="ContinueButton">
            <Link to={"/home"}>Continuar</Link>
          </div>
        </form>

        <div className="Divider">
          <span>ou</span>
        </div>

        <div className="SocialLoginButtons">
          <div className="SocialLoginButton">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt=""
            />
            <Link to={"/home"}>Continuar com o google</Link>
          </div>

          <div className="SocialLoginButton">
            <img
              src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536394.png?token=exp=1636944791~hmac=ff046eea2989d3eb0595062c186fc09b"
              alt=""
            />
            <Link to={"/home"}>Continuar com o facebook</Link>
          </div>
        </div>

        <div className="SigninOrSignup">
          <span>
            Novo usuário? <Link to={"/signup"}>Crie uma conta</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
