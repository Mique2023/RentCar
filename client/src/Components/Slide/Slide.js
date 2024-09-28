import image from "../../Images/Carro.jpg"
import imag from "../../Images/d.png"
import ima from "../../Images/H.png"
import im from "../../Images/F.png"
import i from "../../Images/K.png"
import "../../Css/Slide.css"

import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

export function Slide(){
    return(
        <div className="Contenedor_Slide">
            <div className="Btn-Atras">
                <button><IoChevronBack/></button>
            </div>
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
                        <img src={imag} alt="" />
                    </div>
                    <div className="Caja_1">
                        <img src={ima} alt="" />
                    </div>
                    <div className="Caja_1">
                        <img src={im} alt="" />
                    </div>
                    <div className="Caja_1">
                        <img src={i} alt="" />
                    </div>
                </div>
            </div>
            <img src={image} alt="" />
            <div className="Btn-Delante">
                <button><IoChevronForward/></button>
            </div>
        </div>
    );
}