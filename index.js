$(document).ready(function(){

  var t = ["fade", "flip", "flow", "pop", "slide", "slidefade", "slideup", "slidedown", "turn", "none"];
  
  var p = $("p");
  //alert(p);
  for(var i = 0;i < p.length;i++){
    alert(123);
    p[i].mouseover(function(){
    alert(p[i]);
    var a = this.next();
    var x = t[Math.floor(Math.random()*10)];
    //this.setAttribute("data-transition",x);
    //alert(this.getAttribute("data-transition"));
    a.href = "#"+x;
    alert(a);
    alert(a.href);
  });

  };

});

