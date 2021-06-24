import React from 'react'
import Img  from '../../assets/imagem3.png'

import './styles.css'
const Banner = () => {
    return(
        <div className="main">
            <div>
                <h1>Aprendendo React </h1>
                <p>App divertido feito em React para treinar react-router-dom e axios </p>
                <h2>⚛️</h2>
            </div>
            <img src={Img} alt="ilustracao com logo do react" />
        </div>
    )
}
export default Banner