function Cabecalho (props) {
  return (
      <div>
          <h1>{props.children}</h1>
      </div>
  )
}

export default Cabecalho


/* Exemplo de como passar texto entre as tags de abertura e fechamento, que veio a partir de um componente react:
props.children */