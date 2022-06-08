import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import swal from 'sweetalert';
import Menu from './components/Menu';
import Principal from './pages/page-principal/Principal';
import Masculino from './pages/page-masculino/Masculino'
import Infantil from './pages/page-infantil/Infantil'
import Casa from './pages/page-casa/Casa'
import Calcado from './pages/page-calcado/Calcado';
import ExibirCalcados from './pages/page-calcado/ExibirCalcados';
import ExibirMasculino from './pages/page-masculino/ExibirMasculino';
import ExibirInfantil from './pages/page-infantil/Exibirinfantil';
import ExibirCasa from './pages/page-casa/ExibirCasa';
import ExibirFeminina from './pages/page-feminina/ExibirFeminina';
import Feminina from './pages/page-feminina/Feminina';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Principal/>} />

            <Route path="/feminina" element={<ExibirFeminina/>} />
            <Route path="/feminina/create" element={<Feminina/>} />
            <Route path="/feminina/:id" element={<Feminina/>} />

            <Route path="/masculino" element={<ExibirMasculino/>} />
            <Route path="/masculino/create" element={<Masculino/>} />
            <Route path="/masculino/:id" element={<Masculino/>} />

            <Route path="/calcado" element={<ExibirCalcados/>} />
            <Route path="/calcado/create" element={<Calcado/>} />
            <Route path="/calcado/:id" element={<Calcado/>} />

            <Route path="/infantil" element={<ExibirInfantil/>} />
            <Route path="/infantil/create" element={<Infantil/>} />
            <Route path="/infantil/:id" element={<Infantil/>} />

            <Route path="/casa" element={<ExibirCasa/>} />
            <Route path="/casa/create" element={<Casa/>} />
            <Route path="/casa/:id" element={<Casa/>} />

          </Routes>
        </Container>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
