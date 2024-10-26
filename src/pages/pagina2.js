import * as React from "react"
import Layout from "../components/layout"
import Ufs from "../components/Ufs"
import Municipios from "../components/Municipios"
import { useState, useEffect } from "react"

export default function Pagina2() {

    const [opcaoUf, setOpcaoUf] = useState({ key: "", value: "" });
    const [opcaoMunicipio, setOpcaoMunicipio] = useState({ key: "", value: "" });

    /*useEffect(() => {
        if (opcaoUf.value.length > 0) {
            alert(opcaoUf.value)
        }
    }, [opcaoUf]);*/

    return (
        <Layout>
            <h1>Unidades da Federação</h1>
            <Ufs setOpcaoUf={setOpcaoUf} /><br />
            <Municipios uf={opcaoUf.key} />
            <p>{opcaoUf.key} - {opcaoUf.value}</p>
            <p>{opcaoMunicipio.key} - {opcaoMunicipio.value}</p>
        </Layout>
    )
}

export const Head = () => <title>Dados Externos</title>
