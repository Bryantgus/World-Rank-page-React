import "./Filter.css"

export default function Filter() {
    return (
        <div className="filter">
            <div className="sortBy">
                <span>Sort by</span>   
                <select className="custom-select">
                    <option value="1">Population</option>
                    <option value="2">Area (km²)</option>
                    <option value="3">Name</option>
                </select>
            </div>
             

        </div>
    )
}