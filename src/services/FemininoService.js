class FemininoService {
    getAll(){
        const femininos = localStorage.getItem('femininos')
        return femininos ? JSON.parse(femininos) : []
    }

    get(id){
        const femininos = this.getAll()
        return femininos[id]
    }

    create(dados){
        const femininos = this.getAll()
        femininos.push(dados)
        localStorage.setItem('femininos', JSON.stringify(femininos))
    }

    update(id, dados){
        const femininos = this.getAll()
        femininos.splice(id, 1, dados)
        localStorage.setItem('femininos', JSON.stringify(femininos))
    }

    delete(id){
        const femininos = this.getAll()
        femininos.splice(id, 1)
        localStorage.setItem('femininos', JSON.stringify(femininos))
    }
}

export default new FemininoService()