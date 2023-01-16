function messJSON(e,g,args){

    var len=e.length;
    var mensaje= '{ "'+ g +'": [';
        
    for (var i in e){
           
        mensaje+='{'
            
        for(var x in args ){
          
           mensaje+='"' +args[x]+'":"' + e[i].field( args[x] ) + '"';
           
           if(x < args.length){
           
              mensaje+=',';
           }    
      
       }
       if(i < e.length){
           mensaje+=',';
       }
        mensaje+='}';

   } 
   mensaje= mensaje + ']}';
   
   return mensaje; 

}