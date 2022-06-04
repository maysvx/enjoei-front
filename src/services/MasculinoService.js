class MasculinoService {
    getAll(){
        const masculinos = localStorage.getItem('masculinos')
        return masculinos ? JSON.parse(masculinos) : []
    }

    get(id){
        const masculinos = this.getAll()
        return masculinos[id]
    }

    create(dados){
        const masculinos = this.getAll()
        masculinos.push(dados)
        localStorage.setItem('masculinos', JSON.stringify(masculinos))
    }

    update(id, dados){
        const masculinos = this.getAll()
        masculinos.splice(id, 1, dados)
        localStorage.setItem('masculinos', JSON.stringify(masculinos))
    }

    delete(id){
        const masculinos = this.getAll()
        masculinos.splice(id, 1)
        localStorage.setItem('masculinos', JSON.stringify(masculinos))
    }
}

export default new MasculinoService()