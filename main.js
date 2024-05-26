var startBtn = document.getElementById("start-btn")
var stopBtn = document.getElementById("stop-btn")
var car = document.getElementById("car")



var interval ;
function go() {
    var count = 0
    function abc() {
        count += 5
        car.style.left = count + "px" 
    }
    
    interval = setInterval(abc,50)
}
function stop() {
    clearInterval(interval)
}   