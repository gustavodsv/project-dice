function roll() {
    window.location.href = window.location.href;
}
function reset(){

    var r1 = Math.floor(Math.random() * 7 );
    document.getElementById("dice1").innerHTML = r1;
    var r2 = Math.floor(Math.random() * 7 );
    document.getElementById("dice2").innerHTML = r2;
}