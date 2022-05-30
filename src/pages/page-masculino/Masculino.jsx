import React from 'react'
import "./css-masculino.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'

const Masculino = () => {
  return (
    <div>
      <div>
        <Container fluid>
          <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Masculino</h1>
        </Container>
        <div className="linha" />
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="nome-masculino">
            <Form.Label>Nome da Peça</Form.Label>
            <Form.Control type="text" placeholder="ex: camisa esportiva" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="marca-masculino">
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" placeholder="ex: adidas" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tamanho-masculino">
            <Form.Label>Tamanho</Form.Label>
            <Form.Control type="text" placeholder="ex: M , 36 , Unico" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="valor-masculino">
            <Form.Label>Valor</Form.Label>
            <Form.Control type="number" placeholder="ex: 100,00" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantidade-masculino">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control type="number" placeholder="ex: 01" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tipo de peça</Form.Label>
            <Form.Select aria-label="Default select example" className="required">
              <option value="1">Blusa</option>
              <option value="2">Calça</option>
              <option value="3">Bermuda</option>
              <option value="3">Intimo</option>
              <option value="3">Casacos</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Condição</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Novo</option>
              <option value="2">Semi-novo</option>
              <option value="3">Usado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="descricao-masculino">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="ex: usado poucas vezes, com alguns arranhões..." />
          </Form.Group>
          <Form.Label htmlFor="cor-masculino">Selecione a cor da sua peça</Form.Label>
          <Form.Control
            type="color"
            id="cor-masculino"
            defaultValue="#F05B78"
            title="cor-calao"
          ></Form.Control>
          <Form.Group controlId="imagem-masculino" className="mb-3">
            <Form.Label>Selecione 01 imagem da sua peça</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
        <br />
        <div className='espaco-final'>
          <Link to={-1} className="btn btn-lg botao-cancelar">Cancelar <MdOutlineCancel /></Link> <></>
          <Link to={'/masculino'} className="btn btn-lg botao-salvar">Publicar <BsCheckCircle /></Link>
        </div>


      </div>
    </div>
  )
}

export default Masculino