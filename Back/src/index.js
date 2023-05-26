const http = require("http")
const fs = require("fs")
const { resolve } = require("path");
const { log } = require("console");
const getCharById = require('./controllers/getCharById')

const PORT = 3001

http.
    createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = req
       

        if (url.startsWith('/rickandmorty/character/')) {
            const match = url.match(/\/rickandmorty\/character\/(\d+)/)
            const id = parseInt(match[1])
            getCharById(res, id)
           return
        }
         
        res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify({Error: 'Page not found'}))
    }).listen(PORT, "localhost")
    
    
    
    
    
    
    







    // if (url.startsWith('/rickandmorty/character/')) {
                
            //     const match = url.match(/\/rickandmorty\/character\/(\d+)/)
    
            //     const ide = parseInt(match[1])
    
            //     const character = data.find(({ id }) => id === ide)
    
            // //    if (character) {
            // //        res.writeHead(200, { 'Content-Type': 'application/json' })
            // //        return res.end(JSON.stringify(character))
            // //    } else {
            // //        res.writeHead(404, { 'Content-Type': 'text/plain' })
            // //        return res.end(JSON.stringify({ Error: 'character not found' }))
            // //    }
            //     character
            //         ? res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(character))
            //         : res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify({ Error: 'character not found' }))
            //     return
    
            // }
            // res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Page not found')



// const saccessHandler = (resolve) => console.log(resolve)
// const errorHandler = (reason) => console.log(reason)/*/ 

    // const miPromesa = new Promise((resolve,reason) => {
     
    //     resolve("soy true")
    //     reason("soy false")


    // })

    // miPromesa.then(
    //  saccessHandler,
    //  errorHandler
    // )

    // console.log(miPromesa);
    // */
