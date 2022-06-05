import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./css-principal.css"

const Principal = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className='texto-h1'>
              <h1>
                Enjoei
              </h1>
              <div className="linha mb-2"></div>
            </div>
            <br />
            <div>
              <p className='texto-p'>
                Somos um marketplace com foco em moda (o segmento do e-commerce mais representativo no brasil em volume de pedidos), que recebe investimentos nacionais e internacionais e com uma equipe distribuída em diversos estados.
                Queremos construir uma nova cultura de consumo de moda, estimulando uma economia sustentável, ressignificando itens únicos e contando novas histórias. e o nosso grande contador de histórias o nosso produto, um produto com alma que fala a língua das pessoas.
              </p>
            </div>
          </Col>
          <Col>
            <img src="https://document-export.canva.com/ufFYM/DAFCBVufFYM/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220528T203503Z&X-Amz-Expires=35587&X-Amz-Signature=69e8a58949f9f3dd9eefa177a09fcf7f57ba692f7a191dd9ad7f6d724639486a&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2029%20May%202022%2006%3A28%3A10%20GMT" />
          </Col>
        </Row>
      </Container>
      <br />

    </div>
  )
}

export default Principal