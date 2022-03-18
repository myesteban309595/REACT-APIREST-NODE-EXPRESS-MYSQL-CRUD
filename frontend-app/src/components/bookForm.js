import React from "react";

//^ clases bootstrap  btn btn-primary   mb-3

const Form = ({book,setBook}) => {


    //& creamos una funcion que me permita mdificar el estado de los valores de la entrada del formulario pero no captura ni sube a la BD

    const handleChange = e => {  //^ esta funcion debe modificar el estado de un libro que quiera registrar

        //^ la funcion setbook es la que me permite modificar el estado del libro

        setBook({

            ...book,   //^ toma esto y edita la casilla que se esta modificando, esto se usa para evitar que se reemplacen las casillas equivocas
            [e.target.name]: e.target.value //~ aqui capturo el nombre que ponga en titulo a traves del evento e titulo y cambia el estao del book

        })

    }

    //&  comunicamos con una query para hacer un post en la base de datos... en form hacemos un evento tipo submit

    let {titulo, autor, edicion} = book

    const handleSubmit = ()=> {

        edicion = parseInt(edicion, 10) // convertimos este string a entero

        //? VALIDACION DE LOS DATOS PARA VERIFICAR QUE TODAS LAS CASILLAS SE DILIGENCIEN

        if(titulo === '' || autor === '' || edicion <= 0)
        {
            alert('todos los campos son obligatorios')
            return
        }

        //^ si cumple las validaciones realizamos la consulta

        //~ esto es practicamente el request del post

        const requestInit = {

            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(book) //& se convierte a json el formato
        }

        fetch('http://localhost:3001/api', requestInit)  //~ recibimos como primer parametro la url con la cual haremos la peticion con la query la tomamos del request.html
        .then (res => res.text())
        .then (res => console.log(res)) //? visualizamos la consulta por consola

        setBook({  //& esto permite setear el form para que queden automaticamente vacios

            titulo: '', //& si en value ponemos {titulo} seteara en blanco. si ponemos n value como string aparecera en el form
            autor: '',
            edicion: 0
        })

        //^ para que aparezca tambien en la lista de la pagina

    }

    return(

        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor = "titulo" className="form-label">Titulo</label>
                <input value = {titulo} name = "titulo" onChange={handleChange}  type="text" id= "titulo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor = "Autor" className="form-label">Autor</label>
                <input value = {autor} name = "autor" onChange={handleChange} type="text" id= "autor" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor = "Edicion" className="form-label">Edicion</label>
                <input value = {edicion} name = "edicion" onChange={handleChange} type="number" id= "edicion" className="form-control"/>
            </div>

            <button type= "submit" className=" btn btn-primary">POST</button>

        </form>
    )
}

export default Form;