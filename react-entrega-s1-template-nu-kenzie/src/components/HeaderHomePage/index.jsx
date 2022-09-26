import logo from "../../assets/logo.png"

function HeaderHomePage ({setIsLogin}) {

    const exit = () => {
        setIsLogin(false)
    }

    return (
        <section className="section-header">
            <div>
                <img src={logo} alt="Logo da Kenzie" />
                <button onClick={exit}>Inicio</button>
            </div>
        </section>
    )
}

export default HeaderHomePage;