import { useState } from "react";

function Form ({addListTransactions}) {

    const [inputDescription, setInputDescription] = useState("")
    const [inputValue, setInputValue] = useState(0)
    const [optionValue, setOpitionValue] = useState("")

    return (
        <div className="conteiner-form">
            <p className="title">Descrição</p>
            <input 
                className="input-descricao"
                type="text" 
                placeholder="Digite aqui sua descrição"
                value={inputDescription}
                onChange={(event) => setInputDescription(event.target.value)}
            />
            <p className="example">Ex: Compra de roupas</p>
            <div className="div-valor-tipo">
                <div className="div-value parallel">
                    <p className="title">Valor</p>
                    <input 
                        className="input"
                        type="number" 
                        placeholder="1"
                        value={inputValue} 
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </div>
                <div className="div-select parallel">
                    <p className="title">Tipo de valor</p>
                    <select 
                        className="input"
                        value={optionValue} 
                        onChange={(event) => setOpitionValue(event.target.value)}
                        onClick={(event) => setOpitionValue(event.target.value)}
                    >
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button onClick={() => addListTransactions({description: inputDescription,type: optionValue,value: +inputValue})}>Inserir valor</button>
        </div>
    )
}

export default Form; 