import Header from '../components/Header'

function Sobre (){
    return (
        <div>
            <Header title="Sobre props com children" descricao="mais uma props aqui chamada descricao dentro do meu componente Header. Em 1:33 a aula de quarta: 09/06" />
            <Header title="Mais uma props com children" />
            <Header title="Mais uma children" />           
        </div>
    )

} 

export default Sobre