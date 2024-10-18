import image2 from "../Images/CarroHonda.jpg"
import "../Css/Catalogo.css"

import { IoChevronBack } from "react-icons/io5";
import { useContext } from "react";
import { MenuContext } from "../App/App";
import { Vehiculo } from "../Components/Boxs/Vehiculo";

export function VehiculosHonda({fuction}){

    const [AbrirMenu, setAbrirMenu, setApagarMenu] = useContext(MenuContext)

    return(
        <div className="Contenedor_Catalogo">
            <img src={image2} alt="" />

           <div className="Header-Vehicluos">
                <div className="Header">
                    <div className="Btn-Atras" onClick={() => {fuction("Home_Inventario"); setApagarMenu(false)}}>
                        <button><IoChevronBack/></button>
                    </div>
                </div>
                <div className="Vehiculos-Informacion">
                    <div className="Informacion-General-Vehiculo">
                        <div className="Caja-General">

                        </div>
                    </div>
                    <div className="Contenedor-Izquierda">
                        <div className="Filtro-Autos">
                            <div className="Btn-TipoVehiculo">
                                <h3 className="Active">Carros</h3>
                                <h3>Jeepetas</h3>
                            </div>
                            <div className="Buscador-Vehiculo">
                                <input type="text" placeholder="Search Auto"/>
                                <button>Buscar</button>
                            </div>
                            
                        </div>
                        <div className="Cajas-Vehiculos">
                        <Vehiculo/>
                            <Vehiculo/>
                            <Vehiculo/>
                            <Vehiculo/>
                            <Vehiculo/>
                            <Vehiculo/>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}