import "./MainPage.css"
import HeaderMp from "./HeaderMp"
import Filter from "./Filter"
import Info from "./Info"

export default function MainPage() {
    return (
        <div className="worldContainer">
            <HeaderMp />
            <Filter />
            <Info />
        </div>
        
    )
}