import React from "react";

const BookList = ({boooks, setlistUpdate}) => {

    //! funcion para borrar de la base de datos con un boton ejecutando una query

    const handleDelete = id =>{

        const requestInit = {

            method : 'DELETE'
        }

        fetch('http://localhost:3000/api/'+id , requestInit)  //~ recibimos como primer parametro la url con la cual haremos la peticion con la query la tomamos del request.html
        .then (res => res.text())
        .then (res => console.log(res))

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
    
                </tr>

              ))}

          </tbody>
        </table>

    );
}

export default BookList;