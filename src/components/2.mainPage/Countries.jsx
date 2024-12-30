import "./Countries.css"
import PropTypes from "prop-types"

export default function Countries(props) {
    return (
        <div className="countries">
            <div className="img"><img src={props.flag} alt="flag" className="flag" /></div>
            <span className="nameCountry">{props.nameCountry}</span>
            <span className="population">{props.population}</span>
            <span className="areaKm">{props.area}</span>
            <span className="regionCt">{props.regionCt}</span>

        </div>
    )
}

Countries.propTypes = {
    nameCountry: PropTypes.string,
    population: PropTypes.string,
    area: PropTypes.string,
    regionCt: PropTypes.string,
    flag: PropTypes.string
}