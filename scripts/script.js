function myFunction(){
	var a = "x";
	a = prompt("¿Cuál es la música de la vida?");
	a = a.toLowerCase();
	if(a == "silencio" || a == "silencio hermano" || a == "silencio, hermano" || a == "silence")
	{
		alert("Bienvenido hermano");
		var door = document.getElementById('door');
		door.style.transform = "scale(0)";
		var rest = document.getElementsByClassName('section');
		rest.style.animation = "start 2s forwards";

	}
	else{
		window.close()
	}
}
