const fs = require('fs')

class Contenedor {

    constructor(name){
        this.name = name
    }

    async save (informacion) {
        let id
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`,'utf-8')
            let contenidojson = JSON.parse(contenido)
            let ultimoIndice = contenidojson.length - 1
            let ultimoId = contenidojson[ultimoIndice].id
            informacion.id = ultimoId + 1
            let id = informacion.id
            contenidojson.push(informacion)
            console.log (contenidojson)
        }
        catch (error){
            console.log(error)
        }
        return id
    }
    getById (id){

    }
    getAll (){

    }
    deleteById (id) {

    }
    deleteAll () {

    }

}
let contenedor  = new Contenedor("products.json")

let informacionNueva = {
         "id":1,
         "title":"mani",
         "price":"80"
}

contenedor.save (informacionNueva)