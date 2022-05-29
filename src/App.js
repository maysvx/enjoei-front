import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Principal from './pages/page-principal/Principal';
import Feminino from './pages/page-feminino/Feminino'
import Masculino from './pages/page-masculino/Masculino'
import Infantil from './pages/page-infantil/Infantil'
import Casa from './pages/page-casa/Casa'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Principal/>} />
            <Route path="/feminino" element={<Feminino/>} />
            <Route path="/masculino" element={<Masculino/>} />
            <Route path="/infantil" element={<Infantil/>} />
            <Route path="/casa" element={<Casa/>} />
          </Routes>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
