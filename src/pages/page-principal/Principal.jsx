import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./css-principal.css"
import FemininaService from '../../services/FemininaService';
import { Link } from 'react-router-dom';
import MasculinoService from '../../services/MasculinoService';
import InfantilService from '../../services/InfantilService';
import CalcadoService from '../../services/CalcadoService';
import CasaService from '../../services/CasaService';


const Principal = () => {

  const femininas = FemininaService.getAll()
  const masculinos = MasculinoService.getAll()
  const infantis = InfantilService.getAll()
  const calcados = CalcadoService.getAll()
  const casas = CasaService.getAll()

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <div>
              <p className='texto-p'>
                Somos um marketplace com foco em moda (o segmento do e-commerce mais representativo no brasil em volume de pedidos), que recebe investimentos nacionais e internacionais e com uma equipe distribuída em diversos estados.
                Queremos construir uma nova cultura de consumo de moda, estimulando uma economia sustentável, ressignificando itens únicos e contando novas histórias. e o nosso grande contador de histórias o nosso produto, um produto com alma que fala a língua das pessoas.
              </p>
            </div>
          </Col>
          <Col>
            <br />
            <img src="https://theme.zdassets.com/theme_assets/159640/d43bc3033c3defe5a47a0662d2bf30cf2e6dc9ca.png" height="250px" width='500px' />
          </Col>
        </Row>
      </Container>
      <br />


      <Container>
        <h1>Todas suas peças :)</h1>
        <br />
        <h3>Femininas</h3>
        <div className="linha mb-2"></div>
        <br />
        <Row>
          {femininas.map((item, id) => (
            <Col md={2} className='mb-3' key={id}>
              <Card className='shadow-lg rounded'>
                <Link to={'/feminina/detalhes/' + id}>
                  <Card.Img variant="top" src={"https://document-export.canva.com/BdUVE/DAFCsNBdUVE/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220604T232439Z&X-Amz-Expires=64828&X-Amz-Signature=ba3532c4c2a183e1ad7931c4229fce8be9b411500cc7fbe902fd76bddfbb1d07&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A25%3A07%20GMT"} />
                </Link>
                <Card.Body>
                  < Card.Title className="text-uppercase">{item.nome}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row>
        <br />
        <h3>Masculinas</h3>
        <div className="linha mb-2"></div>
        <br />
        <Row>
          {masculinos.map((item, id) => (
            <Col md={2} className='mb-3' key={id}>
              <Card className='shadow-lg rounded'>
                <Link to={'/masculino/detalhes/' + id}>
                  <Card.Img variant="top" src={"https://document-export.canva.com/WagGs/DAFCsMWagGs/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220604T211554Z&X-Amz-Expires=71449&X-Amz-Signature=eedba3ac4b113454da1abc20e3b04456e61900277af6d123286abc19633b16ba&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A06%3A43%20GMT"} />
                </Link>
                <Card.Body>
                  < Card.Title className="text-uppercase">{item.nome}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row>
      </Container>
      <br />
      <h3>Infantil</h3>
      <div className="linha mb-2"></div>
      <br />
      <Row>
        {infantis.map((item, id) => (
          <Col md={2} className='mb-3' key={id}>
            <Card className='shadow-lg rounded'>
              <Link to={'/masculino/detalhes/' + id}>
                <Card.Img variant="top" src={"https://document-export.canva.com/7Qqy8/DAFCsG7Qqy8/4/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220605T124602Z&X-Amz-Expires=14316&X-Amz-Signature=5330d6b2407a7facfce7c97f56a442e16a529088b783faa93bcda7947b5af035&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2016%3A44%3A38%20GMT"} />
              </Link>
              <Card.Body>
                < Card.Title className="text-uppercase">{item.nome}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))
        }
      </Row>
      <br />
      <h3>Calcados</h3>
      <div className="linha mb-2"></div>
      <br />
      <Row>
        {calcados.map((item, id) => (
          <Col md={2} className='mb-3' key={id}>
            <Card className='shadow-lg rounded'>
              <Link to={'/masculino/detalhes/' + id}>
                <Card.Img variant="top" src={"https://document-export.canva.com/AajR8/DAFCsBAajR8/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220605T104909Z&X-Amz-Expires=22822&X-Amz-Signature=ccfe048a93a4dd5e41981ff1ba96aa82526796cfc8cf8f2852486a185eeb539b&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A09%3A31%20GMT"} />
              </Link>
              <Card.Body>
                < Card.Title className="text-uppercase">{item.nome}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))
        }
      </Row>
      <br />
      <h3>Casa e Decoração </h3>
      <div className="linha mb-2"></div>
      <br />
      <Row>

        {casas.map((item, id) => (
          <Col md={2} className='mb-3' key={id}>
            <Card className='shadow-lg rounded'>
              <Link to={'/masculino/detalhes/' + id}>
                <Card.Img variant="top" src={"https://document-export.canva.com/hycAM/DAFCsAhycAM/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220604T201414Z&X-Amz-Expires=75217&X-Amz-Signature=49f66cc8ba57f9a40eb87fc8b66091e8adc9dd5fa49315ec9637977201e5f393&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2005%20Jun%202022%2017%3A07%3A51%20GMT"} />
              </Link>
              <Card.Body>
                < Card.Title className="text-uppercase">{item.nome}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))
        }
      </Row>
      <br />
    </div>
  )
}


export default Principal