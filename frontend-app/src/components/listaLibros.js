import React from "react";

const BookList = ({book, setBook, boooks, setlistUpdate}) => {

    //!       funcion para borrar de la base de datos con un boton ejecutando una query

    const handleDelete = id =>{

        const requestInit = {

            method : 'DELETE'
        }

        fetch('http://localhost:3001/api/'+id , requestInit)  //~ recibimos como primer parametro la url con la cual haremos la peticion con la query la tomamos del request.html
        .then (res => res.text())
        .then (res => console.log(res))

        setlistUpdate(true) //& cuando ejecute ponlo en true y actualiza
    }

    //todo       funcion para actualizar un libro

    let {titulo, autor, edicion} = book

    const handleUpdate = id =>{

        edicion = parseInt(edicion, 10) //^ convertimos este string a entero

        //? VALIDACION DE LOS DATOS PARA VERIFICAR QUE TODAS LAS CASILLAS SE DILIGENCIEN

        if(titulo === '' || autor === '' || edicion <= 0)
        {
            alert('todos los campos son obligatorios')
            return
        }

        const requestInit = {
            
                method : 'PUT',
                headers : {'Content-Type': 'application/json'},
                body: JSON.stringify(book) //& se convierte a json el formato
            }
    
            fetch('http://localhost:3001/api/'+ id, requestInit)  //~ recibimos como primer parametro la url con la cual haremos la peticion con la query la tomamos del request.html
            .then (res => res.text())
            .then (res => console.log(res))

            setBook({  //& esto permite setear el form para que queden automaticamente vacios

                titulo: '', //& si en value ponemos {titulo} seteara en blanco. si ponemos n value como string aparecera en el form
                autor: '',
                edicion: 0
            })

        setlistUpdate(true) //& cuando ejecute ponlo en true y actualiza
    }

    return (

        <table className="table">
          <thead>
              <tr>
                  <th>id</th>
                  <th>titulo</th>
                  <th>autor</th>
                  <th>edicion</th>
              </tr>
          </thead>
          <tbody>

              {boooks.map( book => (

                <tr key = {book.id}>

                <td>{book.id}</td>
                <td>{book.titulo}</td>
                <td>{book.autor}</td>
                <td style={{textAlign: 'center'}}>{book.edicion}</td>
                <td>
                    <div className="mb-3">
                        <button onClick={ () => handleDelete(book.id) } className="btn btn-danger">Delete</button>
                    </div>
                </td>
                <td>
                    <div className="mb-3">
                        <button onClick={ () => handleUpdate(book.id) } className="btn btn-success">UpDate</button>
                    </div>
                </td>
    
                </tr>

              ))}

          </tbody>
        </table>

    );
}

export default BookList;