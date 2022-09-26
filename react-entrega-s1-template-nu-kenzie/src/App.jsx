import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';


function App() {

  const [isLogin, setIsLogin] = useState(false)

  const [listTransactions, setListTransactions] = useState([

    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesa", value: 150 }

  ])

  function addListTransactions (newTransaction) {

    setListTransactions([...listTransactions, newTransaction])

  }

  function handleTransactions (removedtransaction) {

    const newsTransaction = listTransactions.filter((elem) => {
      return elem.description !== removedtransaction.description
    })

    setListTransactions(newsTransaction)
  }

  const totalPrice = listTransactions.reduce((a, b) => {
    return (b.type === "Entrada") ? a + b.value : a - b.value
  }, 0)

  return (
    <div className="App">
      <header className="App-header">
        {
          isLogin ?
          <HomePage 
            setIsLogin={setIsLogin} 
            addListTransactions={addListTransactions} 
            listTransactions={listTransactions}
            handleTransactions={handleTransactions}
            totalPrice={totalPrice}
          />
          :
          <Login setIsLogin={setIsLogin}></Login>
        }
      </header>
    </div>
  );
}

export default App;
