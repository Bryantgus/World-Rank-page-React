import "./Titles.css"
import PropTypes from "prop-types"
export default function Titles(props) {
    return (
        <span className={`fontThree colorTwo ${props.newClass}`}>{props.title}</span>
    )
}

Titles.propTypes = {
    title: PropTypes.string,
    newClass: PropTypes.string
}