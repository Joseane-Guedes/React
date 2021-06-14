 import filmes from "../service/dados";

function FilmeLista() {
  return (
    <div>
      {filmes.map((filme) => {
        return (
          <div>
            <h3>{filme.nome}</h3>
            <img src={filme.capa} alt={filme.nome} />
          </div>
        );
      })}
    </div>
  );
}

export default FilmeLista; 

