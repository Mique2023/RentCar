import "../../Css/Catalogo.css"
import image3 from "../../Images/ToyotaCorolla.png"

export function Vehiculo(){
    return(
        <div className="Caja">
            <div className="Foto-Auto">
                <img src={image3} alt="" />
            </div>
            <div className="Nombre-Auto">
                <span>Vehiculo</span>
                <h3>Toyota Corolla</h3>
            </div>
            <div className="Gasolina-Auto">
                <span>Tipo de gasolina</span>
                <h3>diésel</h3>
            </div>
            <div className="Precio-Auto">
                <span>Precio</span>
                <h3>USD 50/día</h3>
            </div>
        </div>
    );
}