import logo from './logo.svg';
// import './App.css';
import 'jquery'
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'popper.js'
import Header from './Header/Header'
import Container from './Container/Container'
import Register from './Container/Register'
import Footer from './Footer/Footer';

function App() {
  return (
  <BrowserRouter>    
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
