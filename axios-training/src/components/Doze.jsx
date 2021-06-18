//Exemplo doze da aula da reprograma em 16/06/2020
//Api://https://api.github.com/users/Joseane-Guedes/repos
//Sobre Eventos no html: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events
import React, { useState, useEffect } from "react";
import Axios from "axios";

const Doze = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState("")
    const [filtroRepos, setFiltroRepos] = useState([])

    useEffect(() => {
        const pegaDados = async () => {
            const resposta = await Axios.get("https://api.github.com/users/Joseane-Guedes/repos")
            const dados = await resposta.data;
            /* console.log(resposta) */
            setRepos(dados);
        };
        pegaDados();
    }, []);

    /* console.log(repos); */


    useEffect(() => {
        setFiltroRepos(
            repos.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    }, [busca, repos])

    return (
        < >
            <input onChange={(e) => { setBusca(e.target.value) }} placeholder="Digite um repo" />
            {filtroRepos.map((repo) => (
                <p key={repo.name}>{repo.name}</p>
            ))}
        </>
    );
};

export default Doze;


/* Observação: 
Na linha de codigo numero 37 foi colocada key={repo.name} para eliminar um warning dado pelo react! 
Esse resultado aparece no console do google:
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Doze`. See https://reactjs.org/link/warning-keys for more information.
    at p
    at Doze (http://localhost:3000/main.23810b32daf707dfda77.hot-update.js:35:83)
    at App

    Após inserir: key={repo.name}
    Além de limpar o Warning, a mensagem o console muda para: 
    [HMR] Waiting for update signal from WDS...
*/