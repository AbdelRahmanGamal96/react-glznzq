import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from './components/NavbarComp.js';
import FetachApi from './API/FetachApi.js';

function App() {
  return (
    <div className="App">
      <FetachApi />
      <NavbarComp />
    </div>
  );
}
export default App;
