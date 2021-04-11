var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display")
var begin = document.body.querySelector(".begin")
var pages=[
  {
    name: "Home",
    content: "Home"
  },
  {
    name:"About",
    content:"Jayden"
  },
  {
    name: "View",
    content:"none"
  }
]
var list=["Submit Note"]


function val(pg){
  var ele = document.body.querySelector(".valEle");
  var username = document.body.querySelector(".username").value;
  if(username==="coolStudent123"){
    begin.innerHTML=""
    for(var i = 0; i<pages.length; i++){
     createPage(pages[i]);
    }
  }else{
    ele.innerHTML="This is not a valid username!"
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
  val();
})

function createPage(pg){
  var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name)
  })
  button.innerHTML=pg.name;
  nav.appendChild(button)
}

function contentWrite(wd,pg){
  display.innerHTML=""
  if(pg!=="View"){
  var header = document.createElement("h1");
  header.innerHTML = wd
  display.appendChild(header)
  }else{
    var nd = document.createElement("div")
    var box=document.createElement("input");
    box.id="text";
    display.appendChild(box)
    document.getElementById("text").setAttribute("placeholder", "add to list")
    document.getElementById("text").setAttribute("class", "text")
    var button = document.createElement("button"); 
    button.addEventListener("click", function(){
    submit();
    })
    button.innerHTML="submit"
    display.appendChild(button)
  }
}


function render(){
  display.innerHTML=""
  for(var i=0; i<list.length; i++){
    var ele=document.createElement("div")
    ele.innerHTML=list[i]
  }
}

function submit(){
  var text = document.body.querySelector(".text").value
  if(text.length!==0){
   document.body.querySelector(".subMess").innerHTML=""
   list.push(text); 
  }else{
   document.body.querySelector(".subMess").innerHTML="Not Enough Letters"
  }
  render();
}