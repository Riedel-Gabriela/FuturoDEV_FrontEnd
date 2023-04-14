import { useNavigate } from "react-router-dom";

export { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <>
            <header>
                {/* Posso colocar o navigate num h1 pra quando clicar eu voltar pra home */}
                <h1 onClick={() => navigate("/")}>NotesApp</h1>
                <nav>
                    <button onClick={() => navigate("/")}> Home </button>
                    <button onClick={() => navigate("/create")}> Criar </button>
                    {/* Quando eu coloco o -1 eu volto pra página anterior */}
                    <button onClick={() => navigate(-1)}> Voltar </button>
                </nav>
            </header>
        </>
    )
}
