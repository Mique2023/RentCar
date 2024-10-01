
import { Header } from '../Components/Header';
import { Slide } from '../Components/Slide/Slide';
import '../Css/App.css';

import { createContext, useState } from 'react';

export const MenuContext = createContext();

function App() {
  
  const [AbrirMenu, setAbrirMenu] = useState(false);

  return (
   <MenuContext.Provider value={[AbrirMenu, setAbrirMenu]}>
     <div className="App">
        <div className="Header-App">
          <Header/>
        </div>
        <div className="Body-App">
          <Slide/>
        </div>
    </div>
   </MenuContext.Provider>
  );
}

export default App;
