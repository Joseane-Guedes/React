import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Axios from 'axios'

import './styles.css'

const Simpsons = () => {
    const [simpson, setSimpson] = useState([])
    const [click, setClick] = useState(()=>{})

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            const data = await response.data
            setSimpson(data)
        }
        fetchData()
    },[click])

    function hancleClick(){
        setClick(simpson)
    }

    return(
        <div>
            <Menu />
            <div className="main-simpson">
                <button onClick={hancleClick}>Clique aqui para trocar o personagem</button>
                {simpson.map(perso => {
                    return(
                        <div className="card">
                            <h2>{perso.character}</h2>
                            <img src={perso.image} alt="personagem simpson" />
                        </div>
                    )
                })}
                </div>
        </div> 
    )
}

export default Simpsons