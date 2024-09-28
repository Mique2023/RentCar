
import { Header } from '../Components/Header';
import { Slide } from '../Components/Slide/Slide';
import '../Css/App.css';

function App() {
  return (
    <div className="App">
        <div className="Header-App">
          <Header/>
        </div>
        <div className="Body-App">
          <Slide/>
        </div>
    </div>
  );
}

export default App;
