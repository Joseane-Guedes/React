import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import './styles.css'

const Search = () => {
    const [ repositories, setRepositories ] = useState([])
    const [ filtroRepos, setFiltroRepos] = useState([])
    const [ busca, setBusca ] = useState('')

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/Joseane-Guedes/repos')
            const data = await response.json()
    
            setRepositories(data)
        }
        getData()
    
    },[])

    useEffect(()=>{
        setFiltroRepos(
            repositories.filter(repo =>{
                return repo.name.includes(busca)
            }           
            )
        )
    },[busca, repositories])

    return(
        <div>
            <Menu />
            <input 
                type="text" 
                placeholder="Digite o nome do repositorio" 
                onChange={e=>{setBusca(e.target.value)}}
            />
            <ul className="repos" >{filtroRepos.map(repo=>{
                return (
                <div>
                <li className="repo" key={repo.id}>{repo.name}</li> 
                <li> {repo.avatar_url} </li>
                <h3>{repo.s} </h3>
                </div>
                )
            })}</ul>
        </div>
    )
}

export default Search


