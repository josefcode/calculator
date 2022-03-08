function clr(){
     document.getElementById('res').value = "";
}
function display(val){
  document.getElementById('res').value += val
}
function equate(){
   let x = document.getElementById('res').value;
   let y = eval(x)
    document.getElementById('res').value = y
}