$(document).ready(function(){

  var t = ["fade", "flip", "flow", "pop", "slide", "slidefade", "slideup", "slidedown", "turn", "none"]; 
  var p = $("p");

  //for(i = 0;i < p.length;i++){
    
    p.click(function(){
      alert(this.next());
      //var a = this.next();
      var x = t[Math.floor(Math.random()*10)];
      //this.setAttribute("data-transition",x);
      //alert(this.getAttribute("data-transition"));
      //a.href = "#"+x;
      //alert(a);
      //alert(a.href);
    });

  //};

});

