
const femininoValidator = {
    nome: {
        required: "O campo NOME é obrigatório",
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
        required: "O campo MARCA é obrigatório",
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
        required: "O campo TAMANHO é obrigatório",
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
        required: "O campo VALOR é obrigatório",
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
        required: "O campo QUANTIDADE é obrigatório",
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

    tipo: {
        required: "O campo TIPO é obrigatório",
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

    descricao: {
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 100,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
}
export default femininoValidator
