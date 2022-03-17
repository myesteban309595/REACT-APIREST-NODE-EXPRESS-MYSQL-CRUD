import React from "react";

//^ clases bootstrap  btn btn-primary   mb-3
const Form = () => {

    return(
        
        <form>

            <div className="mb-3">
                <label htmlFor = "titulo" className="form-label">titulo</label>
                <input type="text" id= "titulo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor = "Autor" className="form-label">Autor</label>
                <input type="text" id= "Autor" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor = "Edicion" className="form-label">Edicion</label>
                <input type="number" id= "Edicion" className="form-control"/>
            </div>

            <button className="btn btn-primary">POST</button>

        </form>
    )
}

export default Form;