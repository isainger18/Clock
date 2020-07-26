
let updatedTime= setInterval(time, 1000)

function time(){
    let date= new Date();
    let root= document.getElementById("time")
    root.innerText=date
}