import image from "../../Images/Reservation.png"
import "../../Css/Servicio.css"

import { IoFilter } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcCellPhone } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcRules } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

export function Services(){
    return(
     
        <div className="Contenedor_Servicio" id="Services">

            <img className="Back-Image-Servicio" src={image} alt="" />

            <div className="Contenedor-Titulo-services">
                <div className="Titulo_Servicio">
                    <h1>Estas son las razones</h1>
                    <h3>por las que los viajeros</h3>
                    <h5>Y Dominicanos eligen</h5>
                    <h2>AutoFlex Rental.</h2>
                </div>
            </div>

            <div className="servicio-container">
               <div className="Caja-Servicio">
                    <div className="Titulo-Caja">
                        <div className="Icon">
                            <IoFilter/>
                        </div>
                        <div className="Titulo">
                            <h2>Flitra tus ofertas</h2>
                        </div>
                    </div>
                    <div className="Informacion-Caja">
                        <p>Filtra por tipo de auto, marca y otras características. Personaliza tus resultados al instante.</p>
                    </div>
               </div>
               <div className="Caja-Servicio">
                    <div className="Titulo-Caja">
                        <div className="Icon">
                            <FcOk />
                        </div>
                        <div className="Titulo">
                            <h2>Variedad de Vehículos</h2>
                        </div>
                    </div>
                    <div className="Informacion-Caja">
                        <p>Desde compactos hasta SUVs de lujo, encuentra el auto perfecto para cualquier ocasión y presupuesto.</p>
                    </div>
               </div>
               <div className="Caja-Servicio">
                    <div className="Titulo-Caja">
                        <div className="Icon">
                            <FcCustomerSupport />
                        </div>
                        <div className="Titulo">
                            <h2>Atención al Cliente 24/7</h2>
                        </div>
                    </div>
                    <div className="Informacion-Caja">
                        <p>Nuestro equipo está disponible las 24 horas del día para ayudarte en lo que necesites, desde reservas hasta asistencia en carretera.</p>
                    </div>
               </div>
               <div className="Caja-Servicio">
                    <div className="Titulo-Caja">
                        <div className="Icon">
                            <FcRules />
                        </div>
                        <div className="Titulo">
                            <h2>Política de Cancelación Flexible</h2>
                        </div>
                    </div>
                    <div className="Informacion-Caja">
                        <p>Cambia o cancela tu reserva sin problemas gracias a nuestra política flexible. Sabemos que los planes pueden cambiar.</p>
                    </div>
               </div>
               <div className="Caja-Servicio">
                    <div className="Titulo-Caja">
                        <div className="Icon">
                            <FcShipped />
                        </div>
                        <div className="Titulo">
                            <h2>Entrega y Recogida en Múltiples Ubicaciones</h2>
                        </div>
                    </div>
                    <div className="Informacion-Caja">
                        <p>Disfruta de la conveniencia de recoger o entregar el vehículo en diferentes lugares, ahorrando tiempo y facilitando tu viaje.</p>
                    </div>
               </div>
               <div className="Caja-Servicio">
                    <div className="Titulo-Caja">
                        <div className="Icon">
                            <FcMoneyTransfer />
                        </div>
                        <div className="Titulo">
                            <h2>Precios Transparente</h2>
                        </div>
                    </div>
                    <div className="Informacion-Caja">
                        <p>Sin cargos ocultos ni sorpresas. Con AutoFlex, siempre sabrás exactamente lo que estás pagando desde el inicio.</p>
                    </div>
               </div>
            </div>
        </div>
     
    );
}