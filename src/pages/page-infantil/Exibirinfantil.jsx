import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InfantilService from '../../services/InfantilService';
import { BsTrash, BsPencilFill, } from 'react-icons/bs'

const Exibirinfantil = () => {

  const [infantis, setInfantis] = useState([])

  useEffect(() => {

    setInfantis(InfantilService.getAll())

  }, [])

  function apagar(id) {
    if (window.confirm('Deseja realmente excluir o registro?')) {
      InfantilService.delete(id)
      setInfantis(InfantilService.getAll())
    }
  }

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
        <br />
      </div>
      <Row>
        {infantis.map((item, id) => (
          <Col md={4} className='mb-3' key={id}>
            <Card className='shadow-lg rounded'>
              <Link to={'/masculino/detalhes/' + id}>
                <Card.Img variant="top" src={"https://document-export.canva.com/7Qqy8/DAFCsG7Qqy8/4/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220605T124602Z&X-Amz-Expires=14316&X-Amz-Signature=5330d6b2407a7facfce7c97f56a442e16a529088b783faa93bcda7947b5af035&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2016%3A44%3A38%20GMT"} />
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
              <Link to={'/infantil/' + id} className="btn btn-sm botao-salvar"> Editar   <BsPencilFill /></Link>
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

export default Exibirinfantil