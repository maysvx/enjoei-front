import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import { Card, Col, Container, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FemininaService from '../../services/FemininaService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'
import "./css-feminina.css"
import swal from 'sweetalert2';

const ExibirFeminina = () => {

    const [femininas, setFemininas] = useState([])

    useEffect(() => {

        setFemininas(FemininaService.getAll())

    }, [])

    function apagar(id) {
        swal.fire(
            'Excluido!',
            '',
            'success'
        )
        if (window.confirm('Deseja realmente excluir o registro?')) {
            FemininaService.delete(id)
            setFemininas(FemininaService.getAll())
        }
    }

    return (
        <div>
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Femininos</h1>
                        </Col>
                        <Col>
                            <div className="espacamento">
                                <Link to={'/feminina/create'} className="btn botao-cadastro"><IoIosAdd /> Nova Peça</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="linha mb-2" />
                <br />
            </div>
            <Row>
                {femininas.map((item, id) => (
                    <Col md={4} className='mb-3' key={id}>
                        <Card className='shadow-lg rounded'>
                            <Link to={'/feminina/detalhe/' + id}>
                                <Card.Img variant="top" src={"https://document-export.canva.com/BdUVE/DAFCsNBdUVE/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220604T232439Z&X-Amz-Expires=64828&X-Amz-Signature=ba3532c4c2a183e1ad7931c4229fce8be9b411500cc7fbe902fd76bddfbb1d07&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A25%3A07%20GMT"} />
                            </Link>
                            <Card.Body>
                                < Card.Title className="text-uppercase">{item.nome}
                                </Card.Title>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                        Valor: ${item.valor}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Marca: {item.marca}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Tamanho: {item.tamanho}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Quantidade: {item.quantidade}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Condição: {item.condicao}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Codigo: {item.codigo}
                                    </ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                            <Link to={'/feminina/' + id} className="btn btn-sm botao-salvar"> Editar   <BsPencilFill /></Link>
                            <br />
                            <Button size="sm" variant="secondary" onClick={() => apagar(id)} > Deletar    <BsTrash /> </Button>
                        </Card>
                    </Col>
                ))
                }
            </Row>
            <br />
            <br />

        </div>
    )
}

export default ExibirFeminina