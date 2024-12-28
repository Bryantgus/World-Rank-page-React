import "./Filter.css"

export default function Filter() {
    return (
        <div className="filter">

            <div>
                <span className="titlesFilter">Sort by</span>   
                <select className="custom-select">
                    <option value="1">Population</option>
                    <option value="2">Area (km²)</option>
                    <option value="3">Name</option>
                </select>
            </div>

            <div className="region titlesFilter">
                <span className="titlesFilter">Region</span>
            </div>

             

        </div>
    )
}