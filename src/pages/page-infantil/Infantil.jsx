import React, { useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import infantilValidator from '../../validators/infantilValidator';
import InfantilService from '../../services/InfantilService';
import { mask } from 'remask';


const Infantil = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {

    if (params.id) {
      const infantil = InfantilService.get(params.id)
      for (let campo in infantil) {
        setValue(campo, infantil[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      InfantilService.update(params.id, dados)
    } else {
      InfantilService.create(dados)
    }
    navigate('/infantil')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <div>
        <div>
          <Container fluid>
            <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Infantil</h1>
          </Container>
          <div className="linha" />
          <br />
          <Form>

            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome da Peça</Form.Label>
              <Form.Control type="text" placeholder="ex: body amarelo"
                isInvalid={errors.nome}
                {...register("nome", infantilValidator.nome)}
                onChange={handleChange}
              />
              {errors.nome && <span>{errors.nome.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="marca">
              <Form.Label>Marca</Form.Label>
              <Form.Control type="text" placeholder="ex: lilica ripilica"
                isInvalid={errors.marca}
                {...register("marca", infantilValidator.marca)}
                onChange={handleChange}
              />
              {errors.marca && <span>{errors.marca.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="tamanho">
              <Form.Label>Tamanho</Form.Label>
              <Form.Control type="text" placeholder="ex: M , Unico"
                isInvalid={errors.tamanho}
                {...register("tamanho", infantilValidator.tamanho)}
                onChange={handleChange}
              />
              {errors.tamanho && <span>{errors.tamanho.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="valor">
              <Form.Label>Valor</Form.Label>
              <Form.Control type="number" placeholder="ex: 100,00"
                isInvalid={errors.valor}
                {...register("valor", infantilValidator.valor)}
                onChange={handleChange}
              />
              {errors.valor && <span>{errors.valor.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="quantidade">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control type="number" placeholder="ex: 01"
                isInvalid={errors.quantidade}
                {...register("quantidade", infantilValidator.quantidade)}
                onChange={handleChange}
              />
              {errors.quantidade && <span>{errors.quantidade.message}</span>}
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="condicao-infantil">
              <Form.Label>Condição</Form.Label>
              <Form.Control type="text" placeholder="ex: novo, usado, seminovo"
                isInvalid={errors.condicao}
                {...register("condicao", infantilValidator.condicao)}
                onChange={handleChange}
              />
              {errors.condicao && <span>{errors.condicao.message}</span>}
            </Form.Group>

          </Form>
          <br />
          <div className='espaco-final'>
            <Link to={-1} className="btn btn-lg botao-cancelar">Cancelar <MdOutlineCancel /></Link> <></>
            <Link to={'/infantil'} className="btn btn-lg botao-salvar" onClick={handleSubmit(salvar)}>Publicar <BsCheckCircle /></Link>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Infantil