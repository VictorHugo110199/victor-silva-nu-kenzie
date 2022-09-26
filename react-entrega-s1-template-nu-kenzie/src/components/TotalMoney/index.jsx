function TotalMoney ({totalPrice}) {
        return (
            <div className="div-totalvalue">
                <div className="total-value">
                    <h2>Valor Total:</h2>
                    <p>R$ ${totalPrice}</p>
                </div>
                <p>O valor se refere ao saldo</p>
            </div>
        )
}

export default TotalMoney;