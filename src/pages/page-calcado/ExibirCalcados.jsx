import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import "./css-calcado.css"
import CalcadoService from '../../services/CalcadoService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'

const ExibirCalcados = () => {
    const [calcados, setCalcados] = useState([])

    useEffect(() => {

        setCalcados(CalcadoService.getAll())

    }, [])

    function apagar(id) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            CalcadoService.delete(id)
            setCalcados(CalcadoService.getAll())
        }
    }

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

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Duração</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calcados.map((item, id) => (
                            <tr key={id}>
                                <td>
                                    <Link to={'/calcado/' + id}><BsPencilFill /></Link>{' '}
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

export default ExibirCalcados