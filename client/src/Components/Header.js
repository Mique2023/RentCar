import "../Css/Header.css"
import { Btn_Menu } from "./Buttons/Boton_Menu";

export function Header(){
    return(
        <div className="Contenedor-Header">
            <div className="Logo">
                <h1>AutoFlex</h1>
                <h3>Rental</h3>
            </div>
            <div className="Menu">
                <Btn_Menu Name="Home" status="Active"/>
                <Btn_Menu Name="Inventory"/>
                <Btn_Menu Name="Reservation"/>
                <Btn_Menu Name="Services"/>
                <Btn_Menu Name="Contact"/>
            
            </div>
            <div className="Login">
                <button>Login</button>
            </div>
        </div>
    );
}