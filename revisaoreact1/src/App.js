//Minha versão sabado!

import TituloCapsLock from './components/TituloCapsLock'
import TituloChildren from './components/TituloChildren'
import TituloFilhote from './components/TituloFilhote'
import CaixaAlta from './components/CaixaAlta'
import Hello from './components/Hello'
import Tick from './components/Tick'

function App() {
  return ( 

  <div>
    <h1 > Hello React! </h1> 
    <Hello texto = "Hello World acontencendo por meio da minha propria tag Hello utulizando Props"/>
    <img src="https://www.revistamenu.com.br/wp-content/uploads/2020/11/babyyodamacaron-1024x566.jpg" alt="Baby Yoda"/>
  <h2> Meu Baby Yoda <strong>bold</strong> </h2>
    <TituloFilhote> Meu titulo filho renderizando dentro da tag TituloFilhote! \o/ </TituloFilhote>
    <TituloFilhote> Mais um titulo filhote \o/ \o/ </TituloFilhote>

    <TituloChildren> O meu texto agora esta dentro da tag TituloChildren</TituloChildren>
    <TituloChildren> Realmente este texto esta renderizando com a tag TituloChidren! </TituloChildren>
   
    <CaixaAlta>O meu texto agora esta dentro da tag CaixaAlta! </CaixaAlta>
    <CaixaAlta> Realmente o meu texto agora esta dentro da tag CaixaAlta renderizando em caixa alta! </CaixaAlta>

    <TituloCapsLock studentReprograma = "Simara"/> {/* // StudentReprograma é um atibuto que eu defini para meu componente */}
    <TituloCapsLock studentReprograma = "Josie"/>
    <TituloCapsLock studentReprograma = "Diane"/>
    <TituloCapsLock studentReprograma = "Daviny"/>
    <TituloCapsLock studentReprograma = "Izabella"/>
    <TituloCapsLock studentReprograma = "Geovana"/>
    <TituloCapsLock studentReprograma = "Luana"/>
    <Tick/> {/* Hora local mostrada na tela */}
  </div>
  )
}

export default App
