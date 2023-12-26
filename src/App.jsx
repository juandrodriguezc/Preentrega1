import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {MainRouter}  from './router/MainRouter'
import { getProducts } from './services';
import { Navbar } from 'react-bootstrap';


const App = () => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProducts().then(response => {setProductsData(response.data.products)}).catch(error => {console.log(error)})
  }, [])


  return (
    <div style={{ width: '100vh', height: '100vh'}}>
      <Navbar/>
      <ItemListContainer productsData={productsData}/>
    </div>
  );
}
    
    export default App;
