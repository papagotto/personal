function messJSON(e,args,g){

    var len=e.length;
    
    if(len>1){
        var mensaje= '{ "'+ g +'": [';
    }    
    
    for (var i in e){
           
        mensaje+='{'
            
        for(var x in args ){
          
           mensaje+='"' + args[x] +'":"' + e[i].field( args[x] ) + '"';
           
           if(x < args.length){
           
              mensaje+=',';
           }    
      
       }
       if(i < e.length){
           mensaje+=',';
       }
        mensaje+='}';

   }
   if(len>1){

        mensaje+= ']';
   
    }
    
    mensaje+= '}';
   
   return mensaje; 

}