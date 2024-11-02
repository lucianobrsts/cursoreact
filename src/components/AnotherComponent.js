
const AnotherComponent = () => {

    const handleClick = () => {
        alert('clicou no botão')
    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={() => console.log("Teste")}>Evento no Elemento</button>
        </div>
    )
}

export default AnotherComponent