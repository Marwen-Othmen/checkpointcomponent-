import logo from './logo.svg';
import './App.css';
import FullName from './Component/FullName';
import Adresse from './Component/Adresse';
import Profil from './Component/Profil';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Adresse/>
      <FullName/>
      <Profil/>
      
      </header>
    </div>
  );
}

export default App;
