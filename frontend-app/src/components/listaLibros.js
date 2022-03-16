import React from "react";

const BookList = ({boooks}) => {

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
                <th>{book.id}</th>
                <th>{book.titulo}</th>
                <th>{book.autor}</th>
                <th>{book.edicion}</th>
                </tr>

              ))}

          </tbody>
        </table>

    );
}

export default BookList;