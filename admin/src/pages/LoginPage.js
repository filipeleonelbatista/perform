import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../styles/pages/login-page.css';

import logo from '../assets/logo-dark.svg';
import api from "../services/api";

function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");

    async function handleOnSubmit(event) {
        event.preventDefault();
        if ((email === "") || (password === "")) {
            setError("Opa, faltou alguma informação!");
            return;
        }
        let result;
        
        try {
            result = await api.get("/api/v1/login", {
                params: {
                    email,
                    password
                }
            });
        } catch (error) {
            setError("Houve um problema ao comunicar com o servidor, tente mais tarde!");
            return;
        }

        if (result.data.success) {
            if (remember) {
                const data = JSON.stringify({
                    email,
                    password: result.data.usuario[0].password,
                    validade: 7,
                    loginDate: Date.now()
                })
                localStorage.setItem("login", data);
            } else {
                const data = JSON.stringify({
                    email,
                    password: result.data.usuario[0].password,
                    validade: 1,
                    loginDate: Date.now()
                })
                localStorage.setItem("login", data);

            }
            history.push("/admin/contatos");
        } else {
            setError("Usuario ou senha inválidos!");
            return;
        }


    }
    return (
        <div id="login-page">
            <div className="image-container">

            </div>
            <div className="login-form">
                <img src={logo} alt="Perform" width="270" />
                <h1>Bem vindo novamente</h1>
                <p>Entre para continuar usando o sistema</p>
                <form onSubmit={(e)=>{
                    handleOnSubmit(e)
                }}>
                    <div className="error">
                        {error}Erro
                    </div>
                    <div className="input-container">
                        <input id="email" type="text"
                            value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-container">
                        <input id="password" type="password" 
                            value={password} onChange={(e) => {setPassword(e.target.value)}} />
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="input-group">
                        <div className="remember">
                            <input id="check" type="checkbox"
                                value={remember} onChange={(e) => {setRemember(e.target.value)}} />
                            <label htmlFor="check">Manter conectado</label>
                        </div>
                        <Link to="/admin/login">Esquecceu sua senha?</Link>
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;