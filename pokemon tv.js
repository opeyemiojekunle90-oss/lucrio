let pokemon = document.getElementById(".pokemon");
let film = document.getElementById("film");
let lucrio= document.getElementById("aries");

let is_closed =false;

lucrio.addEventListener("click", function () {
	if(is_closed){
		film.style.display = "block";
		is_closed = false;
	}else{
		film.style.display = "none";
		is_closed = true;
	}
});