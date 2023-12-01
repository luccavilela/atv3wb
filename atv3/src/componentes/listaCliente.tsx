import React from "react";

interface ListaClienteProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaCliente(props: ListaClienteProps) {
        console.log(props.seletorView);
        return (
            <div className="collection">
                <h2> Lista de todos os clientes </h2>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Cadastrar Cliente", e)}>
                    Cadastrar um cliente
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar 10 clientes que mais consumiram", e)}
                >
                    Listar 10 clientes que mais consumiram
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar 10 clientes que menos consumiram", e)}
                >
                    Listar 10 clientes que menos consumiram
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar 5 clientes que mais gastaram", e)}
                >
                    Listar 5 clientes que mais gastaram
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar clientes masculinos", e)}
                >
                    Listar clientes masculinos
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar clientes femininas", e)}
                >
                    Listar clientes femininas
                </button>
                <div className="collection-item">
                    Cliente 1 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 2 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 3 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 4 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
