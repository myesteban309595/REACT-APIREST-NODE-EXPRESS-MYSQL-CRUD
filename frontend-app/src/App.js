import React,{Fragment, useState} from "react"; //& fragmen me permite hacer varios retornos
import Navbar from "./components/Navbar";
import BookList from "./components/listaLibros";

function App() {

  //^ ======  vamos a crear el listado de los libros =========

  const [books, setBooks] =useState([])

  //^ ======  maquetacion de las tablas y titulos  ===========
  return (
    <Fragment>

      <Navbar brand="Biblioteca practica React Marlon"/>
      <div className="container">
        <div className="row">
          <div className="col-7">

            <h2 style={{textAlign: 'center'}}>Lista de Libros</h2>
            <BookList/>

          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Formulario de Libros</h2>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
