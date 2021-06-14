function Comentario (props) {
    return (
        <div>
            <p>{props.children}</p>
        </div>
        
        )


}


export default Comentario


/* // Passando informações entre tags.
3- Props

3.1 - Criar atributos para minha tag html, que veio a partir de um componente react:
props.nomeDoAtributo 

<Comentario texto="comentario 1"/>

3.1 - Passar texto entre as tags de abertura e fechamento, que veio a partir de um componente react:
props.children

<Comentario>comentario 1</Comentario> */