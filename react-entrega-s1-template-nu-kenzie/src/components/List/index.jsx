import btn from "../../assets/ButtonTrash.png"

function List ({listTransactions, handleTransactions}) {
    return (
        <ul className="container-transactions">
            {
                listTransactions.map((elem, index) => {
                    return (
                        elem.type === "Entrada" ?
                        <li key={index} className="entreda">
                            <div className="description">
                                <p className="elem-description">{elem.description}</p>
                                <p className="tiny">{elem.type}</p>
                            </div>
                            <div className="value-delet">
                                <p className="tiny">{`R$ ${elem.value}`}</p>
                                <img 
                                    src={btn} 
                                    alt="Imagem de lixeira" 
                                    onClick={() => handleTransactions(elem)}
                                />
                            </div>
                        </li>
                        :
                        <li key={index} className="despesa">
                            <div className="description">
                                <p className="elem-description">{elem.description}</p>
                                <p className="tiny">{elem.type}</p>
                            </div>
                            <div className="value-delet">
                                <p className="tiny">{`R$ ${elem.value}`}</p>
                                <img 
                                    src={btn} 
                                    alt="Imagem de lixeira" 
                                    onClick={() => handleTransactions(elem)}
                                />
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List; 