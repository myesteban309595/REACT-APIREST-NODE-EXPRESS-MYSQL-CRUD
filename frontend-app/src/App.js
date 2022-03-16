import React,{Fragment, useState, useEffect} from "react"; //& fragmen me permite hacer varios retornos
import Navbar from "./components/Navbar";
import BookList from "./components/listaLibros";

function App() {

  //^ ======  vamos a crear el listado de los libros =========

  const [boooks, setBooks] =useState([])

  useEffect(() => { //& cuando se ejecute el useefect el metodo de entrada haga una consulta de los libros en la BD y me los ponga en la lista

    const getBooks = ()=> {

      fetch('http://localhost:3000/api')  //~ recibimos como primer parametro la url con la cual haremos la peticion con la query la tomamos del request.html
       .then (res => res.json())
       .then (res => setBooks(res)) //? visualizamos la consulta por consola
    }

    getBooks () ;

  }, [])



  //^ ======  maquetacion de las tablas y titulos  ===========
  return (
    <Fragment>

      <Navbar brand="Biblioteca practica React Marlon"/>
      <div className="container">
        <div className="row">
          <div className="col-7">

            <h2 style={{textAlign: 'center'}}>Lista de Libros</h2>
            <BookList boooks = {boooks} />

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
