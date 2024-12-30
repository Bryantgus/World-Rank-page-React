import "./Filter.css"
import RegionItem from "./regionItem"

export default function Filter() {

    const regions = ["Americas" , "Antartic", "Africa", "Asia", "Europe", "Oceania"];

    return (
        <div className="containerfilter">

            <div>
                <span className="titlesFilter">Sort by</span>   
                <select className="custom-select">
                    <option value="1">Population</option>
                    <option value="2">Area (km²)</option>
                    <option value="3">Name</option>
                </select>
            </div>

            <div className="region">
                <span className="titlesFilter">Region</span>
                <div className="regionItems">
                    {regions.map((item, index) => {
                        return (
                            <RegionItem 
                            key={index}
                            region={item}
                            regionClass={item}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="status">
                <span className="titlesFilter">Status</span>

                <div className="check1">
                    <input type="checkbox" 
                    id="check1" 
                    className="inputStatus"
                    name="check1" 
                    />

                    <label 
                    htmlFor="vehicle1" 
                    className="colorThree">
                        Member of the United Nations
                    </label>
                </div>
                <div className="check2">
                    <input 
                    type="checkbox"  
                    id="check2"
                    className="inputStatus" 
                    name="check2" 
                    />

                    <label 
                    htmlFor="vehicle1" 
                    className="colorThree">
                        Independent
                    </label>
                </div>
            </div>


        </div>
    )
}