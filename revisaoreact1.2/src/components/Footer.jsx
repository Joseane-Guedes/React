import redes from "../service/redes-sociais"

function Footer() {
  return (
    <div>
      {redes.map((rede) => {
        return (
        <div>
            <h1> {rede.nome}</h1>
            <img src={rede.capa} alt={rede.nome} />
        </div>
        )
      })}
    </div>
  );
}

export default Footer
