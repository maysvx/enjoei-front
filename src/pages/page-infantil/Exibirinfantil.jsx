import React from 'react'
import "./css-infantil.css"
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Exibirinfantil = () => {
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
      </div>
    </div>
  )
}

export default Exibirinfantil