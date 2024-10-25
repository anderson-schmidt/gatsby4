import React from "react";
import { useState, useEffect } from "react";

export default function Ufs({ setOpcaoUf }) {

    //useState retorna um array de objetos
    //na posição 0 ele retorna o estado
    //na posição 1 ele retorna uma função que altera o estado
    const [options, setOptions] = useState([]);//desestruturação de array

    useEffect(() => {
        const opt = [{ key: "", value: "Selecione..." }];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then(results => results.json())
            .then(data => {
                data.forEach(uf => {
                    opt.push({ key: uf.id, value: uf.nome })
                });
                setOptions(opt);//aqui os dados são carregados no estado, forçando a renderização
            });
    }, []); //esse segundo parâmetro determina a condição de execução da função


    function handleChange (event) {
        setOpcaoUf({ key: event.target.value, value: event.target[event.target.selectedIndex].text });
    }

    return (
        <div>
            <select name="uf" onChange={handleChange}>
                {options.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })};
            </select>
        </div>
    )
}