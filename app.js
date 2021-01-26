function n(num){
 document.getElementById("t").value += num
}

function equal(){
var num=document.getElementById("t") 
num.value =eval(num.value)
}

function Clear(){
    var num=document.getElementById("t") 
    num.value =""

}

