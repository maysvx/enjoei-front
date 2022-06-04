class InfantilService {
    getAll(){
        const infantis = localStorage.getItem('infantis')
        return infantis ? JSON.parse(infantis) : []
    }

    get(id){
        const infantis = this.getAll()
        return infantis[id]
    }

    create(dados){
        const infantis = this.getAll()
        infantis.push(dados)
        localStorage.setItem('infantis', JSON.stringify(infantis))
    }

    update(id, dados){
        const infantis = this.getAll()
        infantis.splice(id, 1, dados)
        localStorage.setItem('infantis', JSON.stringify(infantis))
    }

    delete(id){
        const infantis = this.getAll()
        infantis.splice(id, 1)
        localStorage.setItem('infantis', JSON.stringify(infantis))
    }
}

export default new InfantilService()