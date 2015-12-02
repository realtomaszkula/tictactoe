var krzyz = "X";
var kolko = "O";
var znak = krzyz;
var wynik = [
[{"krzyz": false, "kolko":false}, {"krzyz": false, "kolko":false},{"krzyz": false, "kolko":false}],
[{"krzyz": false, "kolko":false}, {"krzyz": false, "kolko":false},{"krzyz": false, "kolko":false}],
[{"krzyz": false, "kolko":false}, {"krzyz": false, "kolko":false},{"krzyz": false, "kolko":false}]
]

$(document).ready(function(){

		var clicked1 = false;
	$('.topRow').on('click','.first',function(){
		if (clicked1 == false){
			$(this).text(znak);
			play(0,0);
			clicked1 = true;
		}

	});
		
		var clicked2 = false;
	$('.topRow').on('click','.second',function(){
		if (clicked2 == false){
			$(this).text(znak);
			play(0,1);
			clicked2 = true;
		}
	});
		var clicked3 = false;
	$('.topRow').on('click','.third',function(){
		if (clicked3 == false){
			$(this).text(znak);
			play(0,2);
			clicked3 = true;
		}
	});

		var clicked4 = false;
	$('.midRow').on('click','.first',function(){
		if (clicked4 == false){
			$(this).text(znak);
			play(1,0);
			clicked4 = true;
		}
	});
		var clicked5 = false;
	$('.midRow').on('click','.second',function(){
		if (clicked5 == false){
			$(this).text(znak);
			play(1,1);
			clicked5 = true;
		}
	});
		var clicked6 = false;
	$('.midRow').on('click','.third',function(){
		if (clicked6 == false){
			$(this).text(znak);
			play(1,2);
			clicked6 = true;
		}
	});
		var clicked7 = false;
	$('.botRow').on('click','.first',function(){
		if (clicked7 == false){
			$(this).text(znak);
			play(2,0);
			clicked7 = true;
		}
	});
		var clicked8 = false;
	$('.botRow').on('click','.second',function(){
		if (clicked8 == false){
			$(this).text(znak);
			play(2,1);
			clicked8 = true;
		}
	});
		var clicked9 = false;
	$('.botRow').on('click','.third',function(){
		if (clicked9 == false){
			$(this).text(znak);
			play(2,2);
			clicked9 = true;
		}
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
	(wynik[1][0]["krzyz"] == true) && (wynik[1][1]["krzyz"] == true) && (wynik[1][2]["krzyz"] == true) ||
	(wynik[2][0]["krzyz"] == true) && (wynik[2][1]["krzyz"] == true) && (wynik[2][2]["krzyz"] == true) ||
	(wynik[0][0]["krzyz"] == true) && (wynik[1][0]["krzyz"] == true) && (wynik[2][0]["krzyz"] == true) ||
	(wynik[0][1]["krzyz"] == true) && (wynik[1][1]["krzyz"] == true) && (wynik[2][1]["krzyz"] == true) ||
	(wynik[0][2]["krzyz"] == true) && (wynik[1][2]["krzyz"] == true) && (wynik[2][2]["krzyz"] == true) ||
	(wynik[0][0]["krzyz"] == true) && (wynik[1][1]["krzyz"] == true) && (wynik[2][2]["krzyz"] == true) ||
	(wynik[0][2]["krzyz"] == true) && (wynik[1][1]["krzyz"] == true) && (wynik[2][0]["krzyz"] == true)) winner("krzyz")
	
	if ((wynik[0][0]["kolko"] == true) && (wynik[0][1]["kolko"] == true) && (wynik[0][2]["kolko"] == true) ||
	(wynik[1][0]["kolko"] == true) && (wynik[1][1]["kolko"] == true) && (wynik[1][2]["kolko"] == true) ||
	(wynik[2][0]["kolko"] == true) && (wynik[2][1]["kolko"] == true) && (wynik[2][2]["kolko"] == true) ||
	(wynik[0][1]["kolko"] == true) && (wynik[1][1]["kolko"] == true) && (wynik[2][1]["kolko"] == true) ||
	(wynik[0][2]["kolko"] == true) && (wynik[1][2]["kolko"] == true) && (wynik[2][2]["kolko"] == true) ||
	(wynik[0][0]["kolko"] == true) && (wynik[1][0]["kolko"] == true) && (wynik[2][0]["kolko"] == true) ||
	(wynik[0][0]["kolko"] == true) && (wynik[1][1]["kolko"] == true) && (wynik[2][2]["kolko"] == true) ||
	(wynik[0][2]["kolko"] == true) && (wynik[1][1]["kolko"] == true) && (wynik[2][0]["kolko"] == true)) winner("kolko")
};

var winner = function(winner){
	alert(winner+" wins!");
};