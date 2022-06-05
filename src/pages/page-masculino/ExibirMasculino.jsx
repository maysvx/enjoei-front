import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MasculinoService from '../../services/MasculinoService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';


const ExibirMasculino = () => {

  const [masculinos, setMasculinos] = useState([])

  useEffect(() => {

    setMasculinos(MasculinoService.getAll())

  }, [])

  function apagar(id) {
    if (window.confirm('Deseja realmente excluir o registro?')) {
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
        <br />
      </div>
      <Row>
        {masculinos.map((item, id) => (
          <Col md={4} className='mb-3' key={id}>
            <Card className='shadow-lg rounded'>
              <Link to={'/masculino/detalhes/' + id}>
                <Card.Img variant="top" src={"https://document-export.canva.com/WagGs/DAFCsMWagGs/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220604T211554Z&X-Amz-Expires=71449&X-Amz-Signature=eedba3ac4b113454da1abc20e3b04456e61900277af6d123286abc19633b16ba&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A06%3A43%20GMT"} />
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
                    Tamanho: {item.tamanho}
                  </ListGroupItem>
                  <ListGroupItem>
                    Quantidade: {item.quantidade}
                  </ListGroupItem>
                  <ListGroupItem>
                    Condição: {item.condicao}
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
              <Link to={'/masculino/' + id} className="btn btn-sm botao-salvar"> Editar   <BsPencilFill /></Link>
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

export default ExibirMasculino