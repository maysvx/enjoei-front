import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import "./css-calcado.css"
import CalcadoService from '../../services/CalcadoService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'
import swal from 'sweetalert2'

const ExibirCalcados = () => {
    const [calcados, setCalcados] = useState([])

    useEffect(() => {

        setCalcados(CalcadoService.getAll())

    }, [])

    function apagar(id) {
        swal.fire(
            'Excluido!',
            '',
            'success'
          )
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
                <br />
            </div>
            <Row>
                {calcados.map((item, id) => (
                    <Col md={4} className='mb-3' key={id}>
                        <Card className='shadow-lg rounded'>
                            <Link to={'/masculino/detalhes/' + id}>
                                <Card.Img variant="top" src={"https://document-export.canva.com/AajR8/DAFCsBAajR8/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220605T104909Z&X-Amz-Expires=22822&X-Amz-Signature=ccfe048a93a4dd5e41981ff1ba96aa82526796cfc8cf8f2852486a185eeb539b&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A09%3A31%20GMT"} />
                            </Link>
                            <Card.Body>
                                < Card.Title className="text-uppercase">{item.nome}</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                        Valor: ${item.valor}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Marca: {item.marca}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Quantidade: {item.quantidade}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Tamanho: {item.tamanho}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Condição: {item.condicao}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Codigo: {item.codigo}
                                    </ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                            <Link to={'/calcado/' + id} className="btn btn-sm botao-salvar"> Editar   <BsPencilFill /></Link>
                            <br />
                            <Button size="sm" variant="secondary" onClick={() => apagar(id)} > Deletar    <BsTrash /> </Button>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </div>
    )
}

export default ExibirCalcados