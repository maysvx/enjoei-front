class FemininaService {
    getAll(){
        const femininas = localStorage.getItem('femininas')
        return femininas ? JSON.parse(femininas) : []
    }

    get(id){
        const femininas = this.getAll()
        return femininas[id]
    }

    create(dados){
        const femininas = this.getAll()
        femininas.push(dados)
        localStorage.setItem('femininas', JSON.stringify(femininas))
    }

    update(id, dados){
        const femininas = this.getAll()
        femininas.splice(id, 1, dados)
        localStorage.setItem('femininas', JSON.stringify(femininas))
    }

    delete(id){
        const femininas = this.getAll()
        femininas.splice(id, 1)
        localStorage.setItem('femininas', JSON.stringify(femininas))
    }
}

export default new FemininaService()