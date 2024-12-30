import "./Info.css"
import Titles from "./Titles"
import Countries from "./Countries"
import { useEffect, useState } from "react"

export default function Info() {
    const titlesArray = ["Flag", "Name", "Population", "Area (km²)", "Region"];
    const [data, setData] = useState([]);

    useEffect(() => {
        // Llamada a la API
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="containerInfo">
            {titlesArray.map((item, index) => (
                <Titles key={index} title={item} newClass={item} />
            ))}
            <div className="line"></div>

            <div className="countryInfo">
                {data.map((item, index) => (
                    <Countries
                        key={index}
                        flag={item.flags?.svg || "No Flag"}
                        nameCountry={item.name?.common || "No Name"}
                        population={item.population?.toLocaleString() || "N/A"}
                        area={item.area?.toLocaleString() || "N/A"}
                        regionCt={item.region || "No Region"}
                    />
                ))}
            </div>
        </div>
    );
}
