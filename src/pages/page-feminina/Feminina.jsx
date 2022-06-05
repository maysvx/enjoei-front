import React, { useEffect } from 'react'
import { Container, Form, } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'
import femininaValidator from '../../validators/femininaValidator';
import FemininaService from '../../services/FemininaService';
import { useForm } from 'react-hook-form'
import { mask } from 'remask';

const Feminina = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {

        if (params.id) {
            const feminina = FemininaService.get(params.id)
            for (let campo in feminina) {
                setValue(campo, feminina[campo])
            }
        }
    }, [])

    function salvar(dados) {

        if (params.id) {
            FemininaService.update(params.id, dados)
        } else {
            FemininaService.create(dados)
        }
        navigate('/feminina')
    }

    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
    }

    return (
        <div>
            <div>
                <Container fluid>
                    <h1 className='h1-calcado'> <Link className='' to={-1}> <IoIosArrowBack className='seta-voltar' /></Link> Feminino</h1>
                </Container>
                <div className="linha" />
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="nome-feminina">
                        <Form.Label>Nome da Peça</Form.Label>
                        <Form.Control type="text" placeholder="ex: camisa esportiva"
                            isInvalid={errors.nome}
                            {...register("nome", femininaValidator.nome)}
                            onChange={handleChange}
                        />
                        {errors.nome && <span>{errors.nome.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="marca-feminina">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="ex: adidas"
                            isInvalid={errors.marca}
                            {...register("marca", femininaValidator.marca)}
                            onChange={handleChange} />
                        {errors.marca && <span>{errors.marca.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tamanho-feminina">
                        <Form.Label>Tamanho</Form.Label>
                        <Form.Control type="text" placeholder="ex: M , 36 , Unico"
                            isInvalid={errors.tamanho}
                            {...register("tamanho", femininaValidator.tamanho)}
                            onChange={handleChange}
                        />
                        {errors.tamanho && <span>{errors.tamanho.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="valor-feminina">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" placeholder="ex: 100,00"
                            isInvalid={errors.valor}
                            {...register("valor", femininaValidator.valor)}
                            onChange={handleChange}
                        />
                        {errors.valor && <span>{errors.valor.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="quantidade-feminina">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control type="number" placeholder="ex: 01"
                            isInvalid={errors.quantidade}
                            {...register("quantidade", femininaValidator.quantidade)}
                            onChange={handleChange}
                        />
                        {errors.quantidade && <span>{errors.quantidade.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="condicao-feminina">
                        <Form.Label>Condição</Form.Label>
                        <Form.Control type="text" placeholder="ex: novo, usado, seminovo"
                            isInvalid={errors.condicao}
                            {...register("condicao", femininaValidator.condicao)}
                            onChange={handleChange}
                        />
                        {errors.condicao && <span>{errors.condicao.message}</span>}
                    </Form.Group>

                </Form> 
                <br />
                <div className='espaco-final'>
                    <Link to={-1} className="btn btn-lg botao-cancelar">Cancelar <MdOutlineCancel /> </Link> <></>
                    <Link to={'/feminina'} className="btn btn-lg botao-salvar" onClick={handleSubmit(salvar)}>Publicar <BsCheckCircle /></Link>
                </div>


            </div>

        </div>
    )
}

export default Feminina