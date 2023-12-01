import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import "../styles.css"
import ListaCliente from "./listaCliente"

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        switch (tela) {
            case 'Clientes':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastrar Cliente']} />
                  <ListaCliente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Cliente':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastrar Cliente']} />
                  <FormularioCadastroCliente tema="purple lighten-4" />
                </>
              );
        }
    }

    return (
        construirView()
    )
}