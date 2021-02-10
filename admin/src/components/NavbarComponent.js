import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import '../styles/components/navbar-component.css';

import logo from '../assets/logo-dark.svg';
import api from '../services/api';

function NavbarComponent() {
    const history = useHistory()
    const [load, setLoad] = useState(true);
    const [currentUser, setCurrentUser] = useState([]);

    async function validateLogin(){
        const data = JSON.parse(localStorage.getItem("login"));

        // valida login
        let result;
        try {
            result = await api.get("/api/v1/loginValidate", {
                params: {
                    email: data.email,
                    password: data.password
                }
            });
            
        } catch (error) {
            alert("Sua sessão expirou!");
            localStorage.clear();
            history.push("/admin");
            return;
        }
        
        
        if((data.loginDate - Date.now) > (data.validade * 86400000 )){            
            alert("Sua sessão expirou!");
            localStorage.clear();
            history.push("/admin");
            return;
        }
        
        setCurrentUser(result.data);
        setLoad(false);
        return;
    }

    useEffect(() => {
        validateLogin();
    }, [])

    if(!load){
        return (
            <ul id="navbar-component">
                <li className="navbrand">                
                    <img src={logo} alt="Perform" />
                </li>
                <li>                
                    <div className="text">
                        Olá, {currentUser[0].name}
                    </div>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/contatos" exact>Contatos</NavLink>
                </li>
                <li>
                    <NavLink to="/admin" exact>Sair</NavLink>
                </li>
            </ul>
        )
    }else{
        return (<h1>Carregando....</h1>)
    }
    
}

export default NavbarComponent;