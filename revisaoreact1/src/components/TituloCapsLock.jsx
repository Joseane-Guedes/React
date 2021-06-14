//Uma forma de fazer um componente: 
/* function TituloCapsLock (props) {
    return(
        <h2> {props.studentReprograma}</h2>
        )
}

export default TituloCapsLock
 */

/* Outra forma de fazer o componente para transformar o meu texto para receber letras maiusculas utilizando a propriedade toUpperCase do JavaScript. */

 function TituloCapsLock (props) { //Criando meu componente que é a mesma coisa de uma função do js.

    const textoInserido = props.studentReprograma //Definindo a propriedade/atributo da minha tag.
    //funcionalidade
    const textoTransformado = textoInserido.toUpperCase() //funcionalidade

    return (
        <h2>{textoTransformado}</h2> /* // Retornando minha tag html dizendo que ela tera uma propriedade que será texto. */
    )

}

export default TituloCapsLock 
// => exportando meu componente para usá-lo onde eu quiser no meu projeto.

//O que esta rolando por debaixo dos panos na segunda função 
/* let props = {
    StudentReprograma: "Simara"
}

props.studentReprograma */ 
// => Isso tudo esta rolando dentro da tag TituloCapsLock