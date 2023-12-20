import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  {MainRouter}  from './router/MainRouter';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

function App() {



  return (
    <div style={{ width: '100vh', height: '100vh'}}>
      <MainRouter/>
      <NavBarComponent/>
      <ItemListContainer greeting='Esta es nuestra lista de productos'/>
    </div>
  );
  }
    
    export default App;
