import React, { useEffect } from 'react'
import "./css-calcado.css"
import { Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'
import calcadoValidator from '../../validators/calcadoValidator';
import CalcadoService from '../../services/CalcadoService';
import { useForm } from 'react-hook-form';
import { mask } from 'remask';

const Calcado = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {

    if (params.id) {
      const calcado = CalcadoService.get(params.id)
      for (let campo in calcado) {
        setValue(campo, calcado[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      CalcadoService.update(params.id, dados)
    } else {
      CalcadoService.create(dados)
    }
    navigate('/calcado')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  function salvar(dados) {

    if (params.id) {
      CalcadoService.update(params.id, dados)
    } else {
      CalcadoService.create(dados)
    }
    navigate('/calcado')
  }

  return (
    <div>
      <Container fluid>
        <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Calçados</h1>
      </Container>
      <div className="linha" />
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="nome-calcado">
          <Form.Label>Nome do Calçado</Form.Label>
          <Form.Control type="text" placeholder="ex: air force"
            isInvalid={errors.nome}
            {...register("nome", calcadoValidator.nome)}
            onChange={handleChange}
          />
          {errors.nome && <span>{errors.nome.message}</span>}

        </Form.Group>

        <Form.Group className="mb-3" controlId="marca-calcado">
          <Form.Label>Marca</Form.Label>
          <Form.Control type="text" placeholder="ex: Nike"
            isInvalid={errors.marca}
            {...register("marca", calcadoValidator.marca)}
            onChange={handleChange}
          />
          {errors.marca && <span>{errors.marca.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="valor-calcado">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" placeholder="ex: 100,00"
            isInvalid={errors.valor}
            {...register("valor", calcadoValidator.valor)}
            onChange={handleChange}
          />
          {errors.valor && <span>{errors.valor.message}</span>}

        </Form.Group>

        <Form.Group className="mb-3" controlId="quantidade-calcado">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control type="number" placeholder="ex: 01"
            isInvalid={errors.quantidade}
            {...register("quantidade", calcadoValidator.quantidade)}
            onChange={handleChange}
          />
          {errors.quantidade && <span>{errors.quantidade.message}</span>}

        </Form.Group>

        <Form.Group className="mb-3" controlId="tamanho-calcado">
          <Form.Label>Tamanho</Form.Label>
          <Form.Control type="number" placeholder="ex: 35-36"
            isInvalid={errors.tamanho}
            {...register("tamanho", calcadoValidator.tamanho)}
            onChange={handleChange}
          />
          {errors.tamanho && <span>{errors.tamanho.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="condicao-calcado">
          <Form.Label>Condição</Form.Label>
          <Form.Control type="text" placeholder="ex: novo, usado, seminovo"
            isInvalid={errors.condicao}
            {...register("condicao", calcadoValidator.condicao)}
            onChange={handleChange}
          />
          {errors.condicao && <span>{errors.condicao.message}</span>}
        </Form.Group>
      </Form>
      <br />
      <div className='espaco-final'>
        <Link to={-1} className="btn btn-lg botao-cancelar">Cancelar <MdOutlineCancel /></Link> <></>
        <Link to={'/calcado'} className="btn btn-lg botao-salvar" onClick={handleSubmit(salvar)} >Publicar <BsCheckCircle /></Link>
      </div>

    </div>
  )
}

export default Calcado