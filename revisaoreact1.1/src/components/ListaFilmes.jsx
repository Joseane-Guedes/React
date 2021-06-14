import filmes from '../service/dados'

// Metodo map
function ListaFilmes () {
    return (
         <div>
            {filmes.map(filme => {
                return (
                <div>
                <h1>{filme.nome}  </h1>
                <img src ={filme.capa} alt={filme.nome}/>
                </div>
                )
            })}
            
        </div>

    )
}

export default ListaFilmes