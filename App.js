import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Service from './components/Service';
import logo from './images/logorsa.png';
import pneu from './images/pneu.jpg';
import vidange from './images/vidange.jpg';
import mechanique from './images/mechanique.jpg';
import diagnostique from './images/diag.jpg';
import tolier from './images/tolier.jpg';
import vente from './images/vente.jpg';

function App() {
  return (
    <div className="App">
     <Navbar image={logo} />
     <Header txt="m3ana koun methanni karhabtek fl 7efdh wel amen" />
     <Service image1={pneu} image2={mechanique} image3={vidange} image4={tolier} image5={diagnostique} image6={vente} />
    </div>
  );
}

export default App;
