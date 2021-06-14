
function CaixaAlta(props){ 
let texto = props.children
let textoTransformado = texto.toUpperCase()
return (
<h2> {textoTransformado}</h2>
)
}

export default CaixaAlta