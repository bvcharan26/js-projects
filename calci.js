function append(value){
    document.getElementById('ans').value += value;
}
function reset(){
    document.getElementById('ans').value="";
}
function cal(){
    const disp=document.getElementById('ans').value;
    const result=eval(disp);
    document.getElementById('ans').value=result;
}