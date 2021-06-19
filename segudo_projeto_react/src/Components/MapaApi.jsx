
import React, {useState, useEffect}from 'react'
import Axios from 'axios'

const MapaApi = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filtroRepos, setFiltroRepos] = useState([])


    useEffect(()=> {
            const pegaDados = async () =>{
            const resposta = await Axios.get('https://api.github.com/users/Joseane-Guedes/repos')
            const dados = await resposta.data
            setRepos(dados)
        }    
        pegaDados()

    },[])

    useEffect(()=>{
        setFiltroRepos(
            repos.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    },[busca,repos])

    console.log(repos)
    
    return(
        <>  
           <input onChange={e => {setBusca(e.target.value)}} placeholder="Digite um repo" />
            <ul>
            {filtroRepos.map(repo => (
            <li>
            <a key={repo.id}>{repo.name}</a>
            </li>
            ))}
            </ul>    
        </>
    )
}

export default MapaApi


