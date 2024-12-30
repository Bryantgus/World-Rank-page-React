import "./RegionItem.css"
import PropTypes from "prop-types"
import { useState } from "react"

export default function RegionItem(props) {

    const [bgChange, setBgChange] = useState(false);

    return (
        <div className={`regionItem ${props.regionClass} ${bgChange ? "bgChange" : ""}`}>
            <button 
            className={"colorTwo fontTwo"} 
            onClick={() => setBgChange((prev) => !prev)}>
                {props.region}
                </button>
        </div>
    )
}

RegionItem.propTypes = {
    region: PropTypes.string,
    regionClass: PropTypes.string
}