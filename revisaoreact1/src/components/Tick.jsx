function Tick () {
    let horaLocal = new Date().toLocaleTimeString ('pt-BR')
    return (
        <div>
        <h2>Exemplo 6 do repositorio react com tick  que mostra hora local na tela:</h2>
        <p>{horaLocal}</p>
        </div>
        )
}

export default Tick