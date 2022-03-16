const express = require('express')
const mysql = require('mysql')
const colors = require('colors')
const myConnection = require('express-myconnection')


const app = express()

//^ =========   configuracion del puerto   ===========

app.set('port', process.env.PORT || 3000)

//^ ===============    DATA BASE   ===================
//&& se debe crear manualment la base de datos.
const dbOptions = {

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bibliotecareactdb'
}

//^ =============    middlewares    ====================

app.use(myConnection(mysql, dbOptions, 'single'))
app.use(express.json())

//^ ==============     routes    =======================

const libros = require('./routes/routes')

app.get('/', (req, res)=>{
    res.send('bienvenido a mi API con REACT !! ')
})

app.use('/api', libros)

//^ ===========  PUERTO ESCUCHA SERVIDOR ================

app.listen(app.get('port'), ()=>{

    console.log('server running on port: localhost:', app.get('port'))

})

console.log(("hola mundo").america);

module.exports = app;