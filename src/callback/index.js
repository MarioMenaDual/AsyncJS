function date(callback) {

    // se genera la primer fecha antes del settimeout
    console.log(new Date)       
    setTimeout(function () {
        // variable que almacenara la segnda fecha en el timeout
        let date = new Date
         //la función que se le pasara como parametro el...     
        callback(date)
        //valor de la la variable declarada arriba "que es una fecha"
         //y asu vez callback es en realidad printDate la función de abajo         
    }, 3000)                    
}                              

//esta función solo manda a imprimir la fecha que tenemos en la variable let date de arriba
function printDate(dateNow) {  
     //y es el callback en realidad 
    console.log(dateNow)       
}

date(printDate)