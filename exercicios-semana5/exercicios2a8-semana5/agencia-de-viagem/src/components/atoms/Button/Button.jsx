import './Button.css'

export default function Button(props) {
    return (
        <button type={props.tipo} className={`button-${props.classe}`}>
            {props.children}
        </button>
    )
}