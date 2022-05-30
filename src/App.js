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
import Calcado from './pages/page-calcado/Calcado';
import ExibirCalcados from './pages/page-calcado/ExibirCalcados';
import ExibirMasculino from './pages/page-masculino/ExibirMasculino';
import ExibirFeminino from './pages/page-feminino/ExibirFeminino';
import ExibirInfantil from './pages/page-infantil/Exibirinfantil';
import ExibirCasa from './pages/page-casa/ExibirCasa';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Principal/>} />


            <Route path="/feminino" element={<ExibirFeminino/>} />
            <Route path="/feminino/create" element={<Feminino/>} />

            <Route path="/masculino" element={<ExibirMasculino/>} />
            <Route path="/masculino/create" element={<Masculino/>} />

            <Route path="/calcado" element={<ExibirCalcados/>} />
            <Route path="/calcado/create" element={<Calcado/>} />

            <Route path="/infantil" element={<ExibirInfantil/>} />
            <Route path="/infantil/create" element={<Infantil/>} />

            <Route path="/casa" element={<ExibirCasa/>} />
            <Route path="/casa/create" element={<Casa/>} />

          </Routes>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
