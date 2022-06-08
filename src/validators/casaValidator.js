const casaValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },

    marca: {
        required: "O campo Marca é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }

    },

    tamanho: {
        required: "O campo Tamanho é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 1,
            message: "O valor mínimo é 1"
        },
    },

    valor: {
        required: "O campo Valor é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 1,
            message: "O valor mínimo é 1"
        },
    },

    quantidade: {
        required: "O campo Quantidade é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 1,
            message: "O valor mínimo é 1"
        },
    },

    condicao: {
        required: "O campo CONDIÇÂO é obrigatório",

    },

    codigo: {
        required: "O campo CONDIÇÂO é obrigatório",
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        }
    },

    categoria: {
        required: "A CATEGORIA é obrigatoria"
    }

}

export default casaValidator
