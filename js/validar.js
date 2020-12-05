function validar() {
//  Variables de los campos respectivos

    var nombre;
    var correo;
    var expresion;
    var textocomentario;


//usando expresiones regulares para correo:

    expresion = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;




//obtener el valor de los campos y guardanose en variables 
//primero varible y luego atributos id y obtener values
    textocomentario = document.getElementById("textocomentario").value;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;


//preguntar si esta vacio documento entonces si esta vacio mandar un alert de la libreria
//si no dejar pasar los datos..


    if (nombre === "") {
        Swal.fire({
            icon: 'error',
            text: 'El campo nombre esta vacio'
        })
        return false
    }

    if (correo === "") {
        Swal.fire({
            icon: 'error',
            text: 'El campo correo esta vacio'
        })
        return false
    }


    //si el campo de la variable nombre es mas largo que x valor decir que es demasiado largo 

    else if
            (nombre.length > 30) {
        Swal.fire({
            icon: 'warning',
            text: 'El campo nombre es demasiado largo'
        })
        return false;
    }


    //validando el correo con expresion regular primero accedemos a la expresion definida y 
    //y luego a test, y luego a la variable a cumplir
    else if (!expresion.test(correo)) {
            Swal.fire({
            icon: 'error',
            text: 'El campo del correo no se cumple'
        })
        return false;
    }
}


