import React, { useEffect, useState } from 'react'
import "./css-masculino.css"
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MasculinoService from '../../services/MasculinoService';
import { BsTrash, BsPencilFill,  } from 'react-icons/bs'



const ExibirMasculino = () => {

  const [masculinos, setMasculinos] = useState([])

  useEffect(() => {

    setMasculinos(MasculinoService.getAll()) 

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      MasculinoService.delete(id)
      setMasculinos(MasculinoService.getAll())
    }
  }


  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link>Masculino</h1>
            </Col>
            <Col>
              <div className="espacamento">
                <Link to={'/masculino/create'} className="btn botao-cadastro"><IoIosAdd /> Nova Peça</Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="linha mb-2" />
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {masculinos.map((item, id) => (
            <tr key={id}>
              <td>
                <Link to={'/masculino/' + id}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(id)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.marca}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ExibirMasculino