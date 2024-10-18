
import { Header } from '../Components/Header';
import { Inventory } from '../Components/Sections/inventory';
import { Slide } from '../Components/Slide/Slide';
import '../Css/App.css';

import { createContext, useState } from 'react';

export const MenuContext = createContext();

function App() {
  
  const [AbrirMenu, setAbrirMenu] = useState(false);
  const [ApagarMenu, setApagarMenu] = useState(false);

  return (
   <MenuContext.Provider value={[AbrirMenu, setAbrirMenu, setApagarMenu]}>
     <div className="App">
        <div className="Header-App">
          {
            ApagarMenu != true ?
            <Header/>
            :
            null
          }
          <Slide/>
        </div>
        <div className="Body-App">
          <Inventory/>
        </div>
    </div>
   </MenuContext.Provider>
  );
}

export default App;
