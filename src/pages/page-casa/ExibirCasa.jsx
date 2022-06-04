import React from 'react'
import "./css-casa.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'

const ExibirCasa = () => {
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
      </div>
    </div>
  )
}

export default ExibirCasa