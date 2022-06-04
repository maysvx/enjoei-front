import React, { useEffect } from 'react'
import "./css-casa.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'
import casaValidator from '../../validators/casaValidator';
import CasaService from '../../services/CasaService';
import { useForm } from 'react-hook-form'
import { mask } from 'remask';


const Casa = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {

    if (params.id) {
      const casa = CasaService.get(params.id)
      for (let campo in casa) {
        setValue(campo, casa[campo])
      }
    }
  }, [])


  function salvar(dados) {

    if (params.id) {
      CasaService.update(params.id, dados)
    } else {
      CasaService.create(dados)
    }
    navigate('/casa')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <Container fluid>
        <h1 className='h1-casa'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Casa</h1>
      </Container>
      <div className="linha" />
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="nome-casa">
          <Form.Label>Nome do item</Form.Label>
          <Form.Control type="text" placeholder="ex: jogo de lencol branco"
            isInvalid={errors.nome}
            {...register("nome", casaValidator.nome)}
            onChange={handleChange}
          />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="marca-casa">
          <Form.Label>Marca</Form.Label>
          <Form.Control type="text" placeholder="ex: Homecore"
            isInvalid={errors.marca}
            {...register("marca", casaValidator.marca)}
            onChange={handleChange}
          />
          {errors.marca && <span>{errors.marca.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="valor-casa">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" placeholder="ex: 100,00"
            isInvalid={errors.valor}
            {...register("valor", casaValidator.valor)}
            onChange={handleChange}
          />
          {errors.valor && <span>{errors.valor.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="quantidade-casa">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control type="number" placeholder="ex: 01"
            isInvalid={errors.quantidade}
            {...register("quantidade", casaValidator.quantidade)}
            onChange={handleChange}
          />
          {errors.quantidade && <span>{errors.quantidade.message}</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">Cozinha</option>
            <option value="2">Quarto</option>
            <option value="3">Banheiro</option>
            <option value="3">Decoração</option>
            <option value="3">Jardim</option>
            <option value="3">Eletronico</option>
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
        <Form.Group className="mb-3" controlId="descricao-casa">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="ex: usado poucas vezes, com alguns arranhões..." />
        </Form.Group>
        <Form.Group controlId="imagem-casa" className="mb-3">
          <Form.Label>Selecione 01 imagem do seu item</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Form>
      <br />
      <div className='espaco-final'>
        <Link to={-1} className="btn btn-lg botao-cancelar">Cancelar <MdOutlineCancel /></Link> <></>
        <Link to={'/casa'} className="btn btn-lg botao-salvar" onClick={handleSubmit(salvar)} >Publicar <BsCheckCircle /></Link>
      </div>

    </div>
  )
}

export default Casa