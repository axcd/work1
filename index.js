$(document).ready(function(){

  var t = ["fade", "flip", "flow", "pop", "slide", "slidefade", "slideup", "slidedown", "turn"];
  var x = null;

  $("a").click(function(){
    x = t[Math.floor(Math.random()*9)];
    this.setAttribute("data-transitio",x);  
    alert(x);
  });

  $("p").click(function(){
    x = t[Math.floor(Math.random()*9)];
    this.children("a").setAttribute("data-transition",x);alert(1);
    window.location.href="https://axcd.github.io/mao/"+this.children("a").href;
    alert(x);
  });

});

