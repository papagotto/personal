function messJSON(e,args,g){

    var len=e.length;
    var mensaje
    
    mensaje+= '{';
    
    if(len!== undefined){
         mensaje+= '"'+ g +'": [';
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
   if(len!==undefined){

        mensaje+= ']';
   
    }
    
    mensaje+= '}';
   
   return mensaje; 

}