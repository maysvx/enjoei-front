import React, { useEffect } from 'react'
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

        <Form.Group className="mb-3" controlId="categoria-casa">
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" placeholder="ex: cozinha, decoração, eletrodomestico, etc"
              isInvalid={errors.categoria}
              {...register("categoria", casaValidator.categoria)}
              onChange={handleChange}
            />
            {errors.categoria && <span>{errors.categoria.message}</span>}
          </Form.Group>

        <Form.Group className="mb-3" controlId="condicao-casa">
          <Form.Label>Condição</Form.Label>
          <Form.Control type="text" placeholder="ex: novo, usado, seminovo"
            isInvalid={errors.condicao}
            {...register("condicao", casaValidator.condicao)}
            onChange={handleChange}
          />
          {errors.condicao && <span>{errors.condicao.message}</span>}
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