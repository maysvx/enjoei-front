class CalcadoService {
    getAll(){
        const calcados = localStorage.getItem('calcados')
        return calcados ? JSON.parse(calcados) : []
    }

    get(id){
        const calcados = this.getAll()
        return calcados[id]
    }

    create(dados){
        const calcados = this.getAll()
        calcados.push(dados)
        localStorage.setItem('calcados', JSON.stringify(calcados))
    }

    update(id, dados){
        const calcados = this.getAll()
        calcados.splice(id, 1, dados)
        localStorage.setItem('calcados', JSON.stringify(calcados))
    }

    delete(id){
        const calcados = this.getAll()
        calcados.splice(id, 1)
        localStorage.setItem('calcados', JSON.stringify(calcados))
    }
}

export default new CalcadoService()