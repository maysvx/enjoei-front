import React, { useEffect, useState } from 'react'
import "./css-infantil.css"
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InfantilService from '../../services/InfantilService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'

const Exibirinfantil = () => {

  const [infantis, setInfantis] = useState([])

  useEffect(() => {

    setInfantis(InfantilService.getAll())

  }, [])

  function apagar(id) {
    if (window.confirm('Deseja realmente excluir o registro?')) {
      InfantilService.delete(id)
      setInfantis(InfantilService.getAll())
    }
  }

  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link>Infantil</h1>
            </Col>
            <Col>
              <div className="espacamento">
                <Link to={'/infantil/create'} className="btn botao-cadastro"><IoIosAdd /> Nova Peça</Link>
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
            {infantis.map((item, id) => (
              <tr key={id}>
                <td>
                  <Link to={'/infantil/' + id}><BsPencilFill /></Link>{' '}
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

export default Exibirinfantil