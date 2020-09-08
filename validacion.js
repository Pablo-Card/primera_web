function validar(){
  let nombre, email, comentario, expresion;
  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
  comentario = document.getElementById("comentario").value;
  expresion = /\w+@\w+\.+[a-z]/;
  if (nombre === "" || email === "" || comentario === ""){
    alert("Por favor rellena todos los campos del formulario");
    event.stopPropagation();
  }
  else if(nombre.length > 30){
    alert("El nombre introducido lleva demasiado caracteres");
    event.preventDefault();
    event.stopPropagation();
  }
  else if(!expresion.test(email)){
    event.preventDefault();
    event.stopPropagation();
    alert("El formato de email no es válido")
    
  }
  else{
    alert("Tu comentario ha sido enviado ¡¡¡Gracias por compartir!!!")
  }
}

