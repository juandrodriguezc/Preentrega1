import 'bootstrap/dist/css/bootstrap.min.css';
import  MainRouter  from './router/MainRouter'


export const App = () => {

  return (
    <div style={{ width: '100vh', height: '100vh'}}>
      <MainRouter/>
    </div>
  );
}