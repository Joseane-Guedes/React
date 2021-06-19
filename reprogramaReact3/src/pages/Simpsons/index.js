import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'

import Axios from 'axios'

const Simpsons = () => {
    const [personagem, setPersonagem] = useState([])
    const [clique, setClique] = useState(()=>{})
    
    useEffect(()=>{
        const pegaDados = async ()=> {
            const resposta = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            const dados = await resposta.data
            setPersonagem(dados)
        }
        pegaDados()
    },[clique])

    function ligaClique(){
        setClique(personagem)
    }

    return (
        <>
            <Menu />
            <div>
                {personagem.map(perso => {
                    return(
                        <div>
                            <p>{perso.character}</p>
                            <img src={perso.image} alt="personagem simpson"/>
                        </div>
                        
                    )
                })}
                <button onClick={ligaClique}>Clique para trocar o personagem</button>
            </div>
        </>
    )
}

export default Simpsons