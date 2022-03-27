
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
 }

 document.onkeydown = teclado;
function teclado(evento){
    if (evento.keyCode == 96){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML= delta + '0';
    }
    else if (evento.keyCode == 97){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '1';
    }
    else if (evento.keyCode == 98){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '2';
    }
    else if (evento.keyCode == 99){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '3';
    }
    else if (evento.keyCode == 100){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '4';
    }
    else if (evento.keyCode == 101){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '5';
    }
    else if (evento.keyCode == 102){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '6';
    }
    else if (evento.keyCode == 103){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '7';
    }
    else if (evento.keyCode == 104){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '8';
    }
    else if (evento.keyCode == 105){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '9';
    }
    else if (evento.keyCode == 106){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '*';
    }
    else if (evento.keyCode == 107){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '+';
    }
    else if (evento.keyCode == 109){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '-';
    }
    else if (evento.keyCode == 111){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '/';
    }
    else if (evento.keyCode == 190){
        var delta = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = delta + '.';
    }
    else if (evento.keyCode == 13){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else if (evento.keyCode == 8){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    }
    else if (evento.keyCode == 110){
        document.getElementById('resultado').innerHTML = "";
    }

}
 
 
 function clean(){
     document.getElementById('resultado').innerHTML = "";
 }

 function back(){
     var resultado = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
 }
 
 function calc(){
     var resultado = document.getElementById('resultado').innerHTML;
 
     if(resultado){
         document.getElementById('resultado').innerHTML = eval(resultado);
     }
     else{
         document.getElementById('resultado').innerHTML = "";
     }
 }