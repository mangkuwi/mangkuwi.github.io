var tebakan = function(angka){
	var coba =1;
	var jawaban = Math.floor((Math.random() * 10) + 1);
	console.log(jawaban);

	while (coba != 5){
		var input = prompt("masukan angka acak :");
		if(input != jawaban){		
		}else {
			alert("selamat atas kemenanganmu");
			break;
		}
		coba++;
		if(coba == 5){
			alert("kurang beruntung");
		}
	}
};
tebakan();