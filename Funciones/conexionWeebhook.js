function connwebhook(e,mensaje,webhook,cabeceras){

var http=http();

  
var cabeceras={"Content-Type":"application/json"};
var webhook ='https://hook.us1.make.com/pmarj8ex5iiiuejtb7o56ifhom2gv89s';

http.headers(cabeceras);
resultado = http.post(webhook,mensaje);

if (resultado.code == 200){
    
    e.set("Webhook Enviado","Si")
    
}  

}