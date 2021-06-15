import dados from "../service/dados";

function Filmes() {
  return (
    <div>
      {dados.map(filme => {
        return (
          <div>
            <img src={filme.capa} alt={filme.nome} />
            <h2>{filme.nome}</h2>
            <p>{filme.genero}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Filmes
