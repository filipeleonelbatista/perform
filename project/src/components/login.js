import React, { useState, useEffect } from 'react';
import {
    FaWhatsapp
} from 'react-icons/fa';

import logoDark from '../assets/logo-dark.svg';

export default function Login() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    return (
        <div className="login-page">
            <div className="login-img">
                <div className="login-form">
                    <div className="form-group">
                        <div className="form-header">
                            <img src={logoDark} />
                            <h2>Bem vindo novamente</h2>
                        </div>
                        <div className="form-body">
                            <div className="form-body-error"></div>
                            <div className="form-body-input-group">
                                <label htmlFor="usuario">Usuário</label>
                                <input type="text" id="usuario" />
                            </div>

                            <div className="form-body-input-group">
                                <label htmlFor="password">Senha</label>
                                <div className="input-password-group">
                                    <input type="password" id="password" />
                                    <button className="password-button">
                                        <FaWhatsapp />
                                    </button>
                                </div>
                            </div>

                            <div className="remember">
                                <input type="checkbox" id="lembrar" name="lembrar" />
                                <label for="lembrar"> Lembrar minha senha?</label>
                            </div>
                            <button className="submit-button">
                                Entrar
                            </button>
                        </div>
                        <div className="form-footer">
                            Recuperar a senha
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
