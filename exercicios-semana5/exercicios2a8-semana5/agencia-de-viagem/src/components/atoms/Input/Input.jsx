import './Input.css'

export default function Input(props) {
    return (
    <>
        <label>
            {props.children}
            <input type={props.tipo} name={props.nome} value={props.valor} onChange={props.onchange} />
        </label>
    </>
)};