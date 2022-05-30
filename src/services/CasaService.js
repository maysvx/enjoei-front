class CasaService {
    getAll(){
        const casas = localStorage.getItem('casas')
        return casas ? JSON.parse(casas) : []
    }

    get(id){
        const casas = this.getAll()
        return casas[id]
    }

    create(dados){
        const casas = this.getAll()
        casas.push(dados)
        localStorage.setItem('casas', JSON.stringify(casas))
    }

    update(id, dados){
        const casas = this.getAll()
        casas.splice(id, 1, dados)
        localStorage.setItem('casas', JSON.stringify(casas))
    }

    delete(id){
        const casas = this.getAll()
        casas.splice(id, 1)
        localStorage.setItem('casas', JSON.stringify(casas))
    }
}

export default new CasaService()