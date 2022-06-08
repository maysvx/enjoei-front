import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import CasaService from '../../services/CasaService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'
import swal from 'sweetalert2';

const ExibirCasa = () => {

  const [casas, setCasas] = useState([])

  useEffect(() => {

    setCasas(CasaService.getAll())

  }, [])

  function apagar(id) {
    swal.fire(
      'Excluido!',
      '',
      'success'
    )
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
              <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Casa e Decoração</h1>
            </Col>
            <Col>
              <div className="espacamento">
                <Link to={'/casa/create'} className="btn botao-cadastro"><IoIosAdd />Novo Produto</Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="linha mb-2" />
        <br />
        <Row>
          {casas.map((item, id) => (
            <Col md={4} className='mb-3' key={id}>
              <Card className='shadow-lg rounded'>
                <Link to={'/masculino/detalhes/' + id}>
                  <Card.Img variant="top" src={"https://document-export.canva.com/hycAM/DAFCsAhycAM/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220604T201414Z&X-Amz-Expires=75217&X-Amz-Signature=49f66cc8ba57f9a40eb87fc8b66091e8adc9dd5fa49315ec9637977201e5f393&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A07%3A51%20GMT"} />
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
                      Categoria: {item.categoria}
                    </ListGroupItem>
                    <ListGroupItem>
                      Quantidade: {item.quantidade}
                    </ListGroupItem>
                    <ListGroupItem>
                      Condição: {item.condicao}
                    </ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Link to={'/casa/' + id} className="btn btn-sm botao-salvar"> Editar   <BsPencilFill /></Link>
                <br />
                <Button size="sm" variant="secondary" onClick={() => apagar(id)} > Deletar    <BsTrash /> </Button>
              </Card>
            </Col>
          ))
          }
        </Row>
      </div>
    </div>
  )
}

export default ExibirCasa