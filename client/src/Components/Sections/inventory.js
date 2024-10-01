import image from "../../Images/thumb-1920-1357717.jpeg"
import Toyota from "../../Images/Toyota.png"
import Honda from "../../Images/Honda.png"
import Ford from "../../Images/Ford.png"
import Kia from "../../Images/Kia.png"
import "../../Css/Slide.css"

export function Inventory(){
    return(
        <div>
            <div className="Body-Slide">
                <div className="Titulo">
                    <h1>AutoFlex</h1>
                    <h1>Rental</h1>
                </div>
                <br />
                <div className="Info">
                    <p>Encuentra el vehículo perfecto para tus necesidades con nuestro servicio de alquiler. Desde autos compactos hasta SUV de lujo, ofrecemos una amplia variedad de marcas y modelos para que tu experiencia sea cómoda y segura. Ya sea que necesites un auto para un viaje de negocios, unas vacaciones familiares o simplemente moverte por la ciudad, tenemos la solución ideal para ti. ¡Reserva hoy y empieza a disfrutar de la libertad de conducir sin complicaciones!</p>
                </div>
                <div className="Cajas">
                    <div className="Caja_1">
                        <img src={Toyota} alt="" />
                    </div>
                    <div className="Caja_1">
                        <img src={Honda} alt="" />
                    </div>
                    <div className="Caja_1">
                        <img src={Ford} alt="" />
                    </div>
                    <div className="Caja_1">
                        <img src={Kia} alt="" />
                    </div>
                </div>
            </div>
            <img className="Back-Image" src={image} alt="" />
        </div>
    );
}