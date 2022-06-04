import React from 'react'
import "./css-feminino.css"
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ExibirFeminino = () => {
  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link>Feminino</h1>
            </Col>
            <Col>
              <div className="espacamento">
                <Link to={'/feminino/create'} className="btn botao-cadastro"><IoIosAdd/> Nova Peça</Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="linha mb-2" />
      </div>
    </div>
  )
}

export default ExibirFeminino