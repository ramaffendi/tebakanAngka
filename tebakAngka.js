var tanya = true
while (tanya) {
// awal
var setUpGame = alert("selamat datang digame tebak angka tebaklah 1-3 \n dan kamu bermain 5 ronde \n raihlah point sebanyak-banyak nya");

// player 1
var player1 = prompt(" player 1 silahkan pilih nomer 1-3")
// player 2
var player2 = prompt("player 2 silahkan pilih nomer 1-3")
// computer memilih bebas
var comp = Math.random();
 
if (comp < 0.34){
    comp="1"
} else if (comp >=0.34 && comp < 0.65) {
    comp = "2"
} else { comp = "3"}

// menentukan aturan
/*
if (comp === player1 && player2) {
    alert("player 1 win dan player2 win") }
    else if (comp === player2) {
        alert ("player 2 win")
    } else if (comp === player1) {
        alert ("player1 win") }
     else  {
        alert ("player2 dan player1 lose")
    }*/

    var hasil ="";
    if (player1 && player2 == comp)
        hasil ="angka tidak boleh sama"
    else if (player1 == comp) {
        hasil = "player1 win"
    } else if (player2 == comp) {
            hasil = "player2 win"
        } 
        else if (player1 && player2 !== comp) {
            hasil ="keduanya kalah"
        }

alert ("player1 memilih : " + player1 + " dan player2 memilih " + player2 + " \n maka hasil nya : " + hasil);

tanya = confirm("ingin bermain lagi?")
}
alert ("terima kasih telah bermain")