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
    if (isNaN(player1) || isNaN(player2)) {
    alert("Yang anda masukan salah, Masukkan angka yang valid");
    } else if (player1 > 3 && player2 > 3) {
        alert("Masukan nilai tidak melebihi 3");
    }  else if (comp !== player1 && comp !== player2) {
        alert ("keduanya sama sama kalah")
    } else if (comp === player1 && player2 === comp){
    (confirm ("angka tidak boleh sama")) }
     else if (comp === player1 && comp !== player2) {
        alert ("player1 win") }
    else if (comp === player2 && comp !== player1) {
        alert ("player2 win")
    } else {
            ("terima kasih telah bermain")
        } 
        tanya = confirm("apakah anda ingin bermain lagi?") }
        
        alert ("terima kasih telah bermain")

    
