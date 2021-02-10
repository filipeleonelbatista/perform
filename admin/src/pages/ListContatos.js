import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';

import '../styles/pages/list-contatos.css'
import { FaTrash, FaEdit } from 'react-icons/fa';

import noData from '../assets/no_data.svg'
import api from '../services/api';

function ListContatos() {
    const [contatos, setContatos] = useState([]);

    async function loadContatos() {
        const result = await api.get("/api/v1/contatos");
        setContatos(result.data);

    }
    useEffect(() => {
        loadContatos();
    })
    return (
        <>
            <NavbarComponent />
            {
                contatos.length === 0
                    ? (
                        <div id="contatos-page">
                            <div className="container">
                                <img src={noData} alt="NotFound" />
                                <h2>Não foram registrados nenhum contato até o momento</h2>
                            </div>
                        </div>
                    )
                    : (
                        <div id="contatos-page">
                            <table>
                                <thead className="table-head">
                                    <th>Tipo de Contato</th>
                                    <th>Dados</th>
                                    <th>Data do contato</th>
                                    <th>Retorno do contato</th>
                                    {/* <th>Ações</th> */}
                                </thead>
                                <tbody>
                                    {contatos.map((contato, index) => {
                                        return (
                                            <tr key="index" className="table-row">
                                                <td>{contato.tipoContato}</td>
                                                <td className="data">
                                                    <p>{contato.nome}</p>
                                                    <div className="row-data">
                                                        <p>{contato.email}</p>
                                                        <p>{contato.celular}</p>
                                                    </div>
                                                    <div className="row-data">
                                                        <p>{contato.mensagem}</p>
                                                    </div>
                                                </td>
                                                <td>{new Date(contato.created_at).toLocaleDateString()}</td>
                                                <td>
                                                    {
                                                        contato.feitoContato ? <div className="boolean-data-true"></div> : <div className="boolean-data-false"></div>
                                                    }
                                                </td>
                                                {/* <td className="actions">
                                                    <button><FaTrash size={24} color="#ff4141" /></button>
                                                    <button><FaEdit size={24} color="#0c961e" /></button>
                                                </td> */}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                    )
            }
        </>
    )
}

export default ListContatos;