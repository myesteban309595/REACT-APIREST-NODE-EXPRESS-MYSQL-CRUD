const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{

    req.getConnection((err, conn)=>{

        if(err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows)=>{

            if(err) return res.send(err)

            res.json(rows)
            console.log(rows);
            console.log(("se han obtenido todos los libros de la base de datos ").bgGreen.black);
        })
    })
})

routes.post('/', (req, res)=>{

    req.getConnection((err, conn)=>{

        if(err) return res.send(err)

        conn.query('INSERT INTO books set ?', [req.body], (err, rows)=>{

            if(err) return res.send(err)

            res.send('se ha agregado un libro')
            console.log(("se ha agregado un libro ").bgBlue);

        })
    })
})

routes.delete('/:id', (req, res)=>{

    req.getConnection((err, conn)=>{

        if(err) return res.send(err)

        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows)=>{

            if(err) return res.send(err)

            res.send('se ha eliminado un libro')
            console.log(("se ha eliminado un libro ").bgRed.black);

        })
    })
})

routes.put('/:id', (req, res)=>{

    req.getConnection((err, conn)=>{

        if(err) return res.send(err)

        conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{

            if(err) return res.send(err)

            res.send('se ha editado un libro')
            console.log(("se ha actualizado un libro").bgMagenta.black);

        })
    })
})

module.exports = routes