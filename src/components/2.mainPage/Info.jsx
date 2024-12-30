import "./Info.css"
import Titles from "./Titles"
import Countries from "./Countries"

export default function Info() {
    const titlesArray = ["Flag", "Name", "Population", "Area (km²)", "Region"]
    return (
        <div className="containerInfo">
            {titlesArray.map((item, index) => {
                return (
                    <Titles 
                    key={index}
                    title={item}
                    newClass={item}
                    />
                )
            })}
            <div className="line"></div>

            <div className="countryInfo">
                
            </div>
        </div>
    )
}