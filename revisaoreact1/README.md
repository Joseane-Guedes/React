Minhas notas de aula React I 
<br>
05/06/2021
===============

## - Componentes

#### Em conceito, componentes são como funções em JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React descrevendo o que deve aparecer na tela. Atenção: <strong> Sempre comece os nomes dos componentes com uma letra maiúscula.</strong>
<br>

#### Observação: <strong>O nome da minha function receberá o nome do meu componente contendo no export default o-nome-da-function também, assim como o nome do meu arquivo terá a primeira letra maiúscula seguindo essa lógica.</strong>
<br/>

#### O React trata componentes que começam com letras minúsculas como tags do DOM. Exemplo:

    <html>
        <div>
        O React trata componentes que começam com letras minúsculas como tags do DOM. Por exemplo, este texto aqui foi escrito entre tags <div /> que representa uma tag div do HTML, mas <Welcome /> representa um componente e requer que Welcome esteja no escopo.
        </div>
    </html>

[Open React documentation](https://pt-pt.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

## - Props

#### Assim como as tags do html que possuem propriedades e atributos, no react temos Props. Propriedades ou props é um objeto javascript que passamos como parâmetro para componentes. São as props que nos permite reutilizar componentes e renderizar diferentes dados em cada um deles. Pensar props: "Lembrar do exemplo do milk shake que a professora falou na aula."
 

### Children

#### É uma propriedade do objeto props. E assim como no HTML, temos as divs mães que criam uma hierarquia com os elementos filhos. Usando o children podemos modificar dados entre as tags de fechamento e abertura de um elemento.





