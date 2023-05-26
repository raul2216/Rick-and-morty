const axios = require('axios')

const getCharById = (res, id) => {

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            // console.log(response);
            const { id, name, gender, species, origin, image, status, } = response.data
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ id, name, gender, species, origin, image, status, }))
            
        })
        .catch((err) => {
            console.log(err)

            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ Error: err.message }))
        })


}

module.exports = getCharById


const flag = false

const promesa = new Promise ( (resolve, react) => {

    if(flag) resolve('soy true')
    else react('soy falso')

})

promesa
.then( (response) => "se resuelve ")
.catch((reason)=> { throw  "se rechaza"
})
.then( (response)=> console.log(response, "then"))
.then()
.catch( (response) => console.log(response, "catch"))


