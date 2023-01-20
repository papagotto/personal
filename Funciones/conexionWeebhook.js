function connWebhook(e : Object, mensaje : String, webhook : String, cabeceras: Object){


var http = http();
logVar(http);
exit();

http.headers(cabeceras);
var resultado = http.post(webhook,mensaje);

if (resultado.code == 200){
    
    e.set("Webhook Enviado",true);
    
}  


}