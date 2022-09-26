import "./homepage.css"
import HeaderHomePage from '../HeaderHomePage';
import Form from "../Form";
import List from "../List";
import TotalMoney from "../TotalMoney";

function HomePage ({setIsLogin, addListTransactions, listTransactions, handleTransactions, totalPrice}) {


    return (
        <section className="page">
            <HeaderHomePage setIsLogin={setIsLogin}></HeaderHomePage>
            <section className="section-main">  
                <div className="div-creat">
                    <Form addListTransactions={addListTransactions}></Form>
                    <TotalMoney totalPrice={totalPrice}></TotalMoney>
                </div>
                <div className="div-render">
                    <List listTransactions={listTransactions} handleTransactions={handleTransactions}></List>
                </div>
            </section>
        </section>
        
    )
}

export default HomePage;