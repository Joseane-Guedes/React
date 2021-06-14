function TituloFilhote(props) {
    return (
        <h2>{props.children}</h2>
        )
}

export default TituloFilhote

// Neste caso aqui, o meu componente é a tag, isso quando eu uso children. Quando eu chamar esse componente no app, eu posso passar qualquer texto entre as tags.
