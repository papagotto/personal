function connwebhook(){

/*Campos
Asunto
Prioridad
Vencimiento
Estado
Responsable
Lugar
*/

var http=http();


var len=e.length;
var mensaje= '{ "Tareas": [ ';
var e = selectedEntries();
   for (i in e){
        mensaje= mensaje + 
	        '{"Asunto":"' + e[i].field("Asunto") +	'",' +
	        '"Descripcion":"' + e[i].field("Descripcion") + '",' +
	        '"Prioridad":"' + e[i].field("Prioridad") + '",' +
	        '"Vencimiento":"' + e[i].field("Vencimiento") + '",' +
	        '"Estado":"' + e[i].field("Estado") + '",' +
	        '"Resposable":"' + e[i].field("Responsable") + '",' +
	        '"Lugar":"'+ e[i].field("Lugar") +'"},'
} 
len=mensaje.length
mensaje=mensaje.slice(0,len-1); //eliminamos la ultima coma
mensaje= mensaje + ']}';

var cabeceras={"Content-Type":"application/json"};
var webhook ='https://hook.us1.make.com/pmarj8ex5iiiuejtb7o56ifhom2gv89s';

http.headers(cabeceras);
resultado = http.post(webhook,mensaje);

if (resultado.code == 200){
    
    e.set("Weebhook Enviado?","Si")
    
}  
//log(mensaje)
//message(resultado.code) 
//message(resultado.body)
log(resultado.body)
 


}