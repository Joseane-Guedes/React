function Header(props) {
  return (
    <nav>
      <h1> {props.title} </h1>
      <h1>{props.descricao}</h1>
    </nav>
  );
}
export default Header

/* Criando atributos para minha tag html que veio a partir de um componente react:
props.nomeDoAtributo */

// visualize para compreender.
/* Vai aparecer um texto para cada pagina porque sou eu que vou dizer como e o que vai aparecer. 
Se for home, vai aparecer home, se for Serviços, vai aparecer Serviços.
*/
