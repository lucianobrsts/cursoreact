import AnotherComponent from "./AnotherComponent"

function FirstComponent() {

    // Algum comentário
    const name = "Luciano"

    return (
        <div className="firstComponent">
            {/* Comentário no JSX */}
            <p>Primeiro Componente</p>
            {2 + 2}
            <p>Nome: {name}</p>
        </div>
    )
}

export default FirstComponent