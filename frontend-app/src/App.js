import React,{Fragment, useState, useEffect} from "react"; //& fragmen me permite hacer varios retornos
import Navbar from "./components/Navbar";
import BookList from "./components/listaLibros";
import Form from "./components/bookForm";

function App() {

  //todo ****************************************    parte del formulario    *******************************************************

  const [book, setBook] = useState({
       
    titulo: '',
    autor: '',
    edicion: 0

  })

  //todo ****************************************    parte de la lista    *******************************************************
  //^ ======  vamos a crear el listado de los libros =========

  const [boooks, setBooks] =useState([])  //& en este estado se pone la lista y lo comunicamos con el comonente en listalibros y los listamos por iteracion

  const [listUpdated, setlistUpdate] = useState([false]) //^ esto es para cada que se ejecute un CRUD, se refesque las tablas autoaticamente

  useEffect(() => { //& cuando se ejecute el useefect el metodo de entrada haga una consulta de los libros en la BD y me los ponga en la lista

    const getBooks = ()=> {

      fetch('http://localhost:3001/api')  //~ recibimos como primer parametro la url con la cual haremos la peticion con la query la tomamos del request.html
       .then (res => res.json())
       .then (res => setBooks(res)) //? visualizamos la consulta por consola
    }

    getBooks () ;

    setlistUpdate(false)  //& listupdate es el estado ... va el endpoint lo pone el true, luego vuelve aqui y lo devuelve a false apra que no se quede actualizando

  }, [listUpdated]) //^ se lo pondre al useeffect para cuando se actualice este estado avisa que se actualizo alguna cosa y ejecuta y carga de nuevo los libros enseguida


  //^ ========  maquetacion de las tablas y titulos  ===========
  return (
    <Fragment>

      <Navbar brand="Biblioteca practica React Marlon"/>
      <div className="container">
        <div className="row">
          <div className="col-7">

            <h2 style={{textAlign: 'center'}}>Lista de Libros</h2>
            <BookList book={book} setBook={setBook} boooks={boooks} setlistUpdate={setlistUpdate} />

          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Formulario de Libros</h2>
            <Form book = {book} setBook = {setBook}/>

          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
