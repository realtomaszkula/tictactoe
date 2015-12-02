var krzyz = "X";
var kolko = "O";
var znak = krzyz;
var wynik = [
[{"krzyz": false, "kolko":false}, {"krzyz": false, "kolko":false},{"krzyz": false, "kolko":false}],
[{"krzyz": false, "kolko":false}, {"krzyz": false, "kolko":false},{"krzyz": false, "kolko":false}],
[{"krzyz": false, "kolko":false}, {"krzyz": false, "kolko":false},{"krzyz": false, "kolko":false}]
]

$(document).ready(function(){

	$('.topRow').on('click','.first',function(){
		$(this).text(znak);
		play(0,0);

	});
		
	$('.topRow').on('click','.second',function(){
		$(this).text(znak);
		play(0,1);
	});

	$('.topRow').on('click','.third',function(){
		$(this).text(znak);
		play(0,2);
	});


	$('.midRow').on('click','.first',function(){
		$(this).text(znak);
		play(1,0);
	});

	$('.midRow').on('click','.second',function(){
		$(this).text(znak);
		play(1,1);
	});

	$('.midRow').on('click','.third',function(){
		$(this).text(znak);
		play(1,2);
	});

	$('.botRow').on('click','.first',function(){
		$(this).text(znak);
		play(2,0);
	});

	$('.botRow').on('click','.second',function(){
		$(this).text(znak);
		play(2,1);
	});

	$('.botRow').on('click','.third',function(){
		$(this).text(znak);
		play(2,2);
	});


});


var play = function (x,y){
	(znak == krzyz) ? (wynik[x][y]["krzyz"] = true) : (wynik[x][y]["kolko"] = true);
	checkWin()
	switchTurns();
	console.log(wynik);

};

var switchTurns = function(){
	znak == krzyz ? znak = kolko : znak = krzyz;
};

var checkWin = function(){
	if ((wynik[0][0]["krzyz"] == true) && (wynik[0][1]["krzyz"] == true) && (wynik[0][2]["krzyz"] == true) ||
	(wynik[0][0]["krzyz"] == true) && (wynik[1][0]["krzyz"] == true) && (wynik[2][0]["krzyz"] == true) ||
	(wynik[0][0]["krzyz"] == true) && (wynik[1][1]["krzyz"] == true) && (wynik[2][2]["krzyz"] == true) ||
	(wynik[0][2]["krzyz"] == true) && (wynik[1][1]["krzyz"] == true) && (wynik[2][0]["krzyz"] == true)) winner("krzyz")
	
	if ((wynik[0][0]["kolko"] == true) && (wynik[0][1]["kolko"] == true) && (wynik[0][2]["kolko"] == true) ||
	(wynik[0][0]["kolko"] == true) && (wynik[1][0]["kolko"] == true) && (wynik[2][0]["kolko"] == true) ||
	(wynik[0][0]["kolko"] == true) && (wynik[1][1]["kolko"] == true) && (wynik[2][2]["kolko"] == true) ||
	(wynik[0][2]["kolko"] == true) && (wynik[1][1]["kolko"] == true) && (wynik[2][0]["kolko"] == true)) winner("kolko")
};

var winner = function(winner){
	alert(winner+" wins!");
};