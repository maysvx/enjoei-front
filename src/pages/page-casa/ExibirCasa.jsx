import React, { useEffect, useState } from 'react'
import "./css-casa.css"
import { Col, Container, Row, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import CasaService from '../../services/CasaService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'

const ExibirCasa = () => {

  const [casas, setCasas] = useState([])

  useEffect(() => {

    setCasas(CasaService.getAll())

  }, [])

  function apagar(id) {
    if (window.confirm('Deseja realmente excluir o registro?')) {
      CasaService.delete(id)
      setCasas(CasaService.getAll())
    }
  }

  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Casa</h1>
            </Col>
            <Col>
              <div className="espacamento">
                <Link to={'/casa/create'} className="btn botao-cadastro"><IoIosAdd />Novo Produto</Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="linha mb-2" />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            {casas.map((item, id) => (
              <tr key={id}>
                <td>
                  <Link to={'/casa/' + id}><BsPencilFill /></Link>{' '}
                  <BsTrash onClick={() => apagar(id)} className='text-danger' />
                </td>
                <td>{item.nome}</td>
                <td>{item.marca}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ExibirCasa