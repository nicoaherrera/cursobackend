const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();


class Contenedor {

    constructor(name){
        this.name = name
    }

    async save (informacion) {
        
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`,'utf-8')
            let contenidoJson = JSON.parse(contenido)
            let ultimoIndice = contenidojson.length - 1
            let ultimoId = contenidoJson[ultimoIndice].id
            informacion.id = ultimoId + 1
            let id = informacion.id
            contenidojson.push(informacion)
            await fs.promises.writeFile(`./${this.name}`,JSON.stringify(contenidojson)  ) 
            return id         

           // console.log (contenidojson)
        }
        catch (error){
            console.log(error)
        }
        return id
    }
    async getById (id){
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`,'utf-8')
            let contenidoJson = JSON.parse(contenido)
            let contenidoExtraido

            contenidoJson.forEach(element => {
                if(element.id == id){
                    contenidoExtraido = element
                }
            });
            return contenidoExtraido

        }
        catch (error){console.log(error)}
    }
   async getAll (){
        try {
            let contenido = await fs.promises.readFile(`./${this.name}`,'utf-8')
            let contenidoJson = JSON.parse(contenido)
            return contenidoJson
        }
        catch (error){console.log(error)}
        
    }
    async deleteById(idToDelete) {
        try {
            const arr = await this.getAll()
            let match = arr.find(item => item.id === idToDelete)
            if (match == undefined) {
                return console.log(`No existe el producto‼`)
            }
            else {
                let toDelete = arr.indexOf(match)
                arr.splice(toDelete, 1)
                await fs.promises.writeFile(this.fileName, JSON.stringify(arr))
                return console.log(`Producto eliminado ❎`)
            }

        }
        catch(err) {
            console.log(err)
        }
    }

    async getProductRandom() {
        try {
            const content = await this.getAll();
            const productRandom = content[Math.floor(Math.random() * content.length)]
            return productRandom
        }
        catch (err) {
            return err
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify([]))
            return console.log(`Todos los productos borrados!`)

        }
        catch(err) {
            console.log(err)
        }
    }

}
let contenedor  = new Contenedor("products.json")

let informacionNueva = {
         "id":1,
         "title":"mani",
         "price":"80"
}



/* contenedor.getById(2).then(resPromise => {
    console.log(resPromise)
})

contenedor.save(informacionNueva).then(resPromise => {
    console.log(resPromise)
})

contenedor.getAll().then(resPromise => {
    console.log(resPromise)1
})

contenedor.deleteById(3).then(resPromise => {
    console.log(resPromise)
})

contenedor.deleteAll().then(resPromise => {
    console.log(resPromise)
}) */

app.get('/productos', async (req,res) => {
    contenedor.getAll().then((products) => res.send(products)) 
})

app.get('/productoRandom', async (req,res) => {
    contenedor.getProductRandom().then((product) => res.send(product))
})

app.get('*', async (req,res) => {
    res.send('Ir a <a href="./productos">Productos</a> \n Ir a <a href="./productoRandom">Producto Random</a>')
})




// Escuchar puerto seteado
const connectedServer = app.listen(PORT, () => {console.log(`Server is UP and RUNNING on http://localhost:${PORT}`)})

// Caputra el error y lo muestra
connectedServer.on('error', (error) => {console.log(error)}) 