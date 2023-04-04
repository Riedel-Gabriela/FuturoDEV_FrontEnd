import './Button.css'

export default function Button (props) {
    const {action, title, color} = props
    return(
        <button className={`${color}`} onClick={action}>{title}</button>
    )
}