import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {



  return (
    <div style={{ width: '100vh', height: '100vh'}}>
      <NavBarComponent/>
      <ItemListContainer greeting='Esta es nuestra lista de productos'/>
    </div>
  );
  }
    
    export default App;
