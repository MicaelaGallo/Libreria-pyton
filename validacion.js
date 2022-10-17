(function(){
    var formulario= document.getElementsByName('formularios')[0],
    elementos= formularios.elements,
    boton = document.getElementById('btn');

    
    var validacion =function(e){
    if (formulario.nombres.value == 0){
        alert ("Complete el campo nombre");
        e.preventDefault();
    }};
    
    var validacion2 =function(e){
    
     if (formulario.apellido.value == 0){
        alert ("Complete el campo apellido");
        e.preventDefault();
    }};

    var validacion3 =function(e){
    
            if (formulario.correo.value == 0){
        alert ("Complete el campo correo");
        e.preventDefault();
    
}};
var validacion4 =function(e){
    
     if (formulario.telefono.value == 0){
        alert ("Complete el campo telefono");
        e.preventDefault();
    }};
   var validarSeleccion = function(e){
                if  (formulario.redes.checked == true || 
                    formulario.showroom.checked == true||
                    formulario.local.checked==true||
                    formulario.local2.checked==true||
                    formulario.menor.checked==true
                    ){
                } else{
                    alert("Completa el campo canal de venta");
                    e.preventDefault();
                }
            };
             

var validar= function(e){
    validacion(e);
    validacion2(e);
    validacion3(e);
    validacion4(e);
    validarSeleccion(e);

};
formulario.addEventListener("submit", validar);

}());