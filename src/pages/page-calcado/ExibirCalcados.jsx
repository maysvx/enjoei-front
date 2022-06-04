import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import "./css-calcado.css"

const ExibirCalcados = () => {
    return (
        <div>
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Calçados</h1>
                        </Col>
                        <Col>
                            <div className="espacamento">
                                <Link to={'/calcado/create'} className="btn botao-cadastro"><IoIosAdd />Novo Calçado</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="linha mb-2" />
            </div>
        </div>
    )
}

export default ExibirCalcados