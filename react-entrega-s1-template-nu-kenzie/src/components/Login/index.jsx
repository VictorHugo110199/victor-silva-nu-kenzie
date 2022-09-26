import logodark from "../../assets/logodark.png"
import illustration from "../../assets/illustration.svg"
import "./login.css"

function Login ({setIsLogin}) {

    const change = () => {
        setIsLogin(true)
    }


    return (
        <section className="login-page">
            <div className="conteiner">
                <div className="div-text">
                    <img src={logodark} alt="Logo da Kenzie" />
                    <h1>Centralize o controle das suas finanças</h1>
                    <p>de forma rápida e segura</p>
                    <button onClick={change}>Iniciar</button>
                </div>
                <div className="div-img">
                    <img src={illustration} alt="Ilustração conversa" />
                </div>
            </div>
        </section>

    )
}

export default Login;