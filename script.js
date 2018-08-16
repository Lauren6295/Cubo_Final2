function rotar(n, event){
			let cubo = document.getElementById("cubo");
			cubo.style.transform = "rotateY(-"+n+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
			
			let enlaces = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
			for(i=0; i<enlaces.length; i++){
				enlaces[i].className = enlaces[i].className.replace("activo", "defecto");
			}
			
			event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
		}

/*************************************************************************/
/*************************************************************************/
/*************************************************************************/

function rotarCuerpo(s, event){
	let cuboCuerpo = document.getElementById("cuboCuerpo");
	cuboCuerpo.style.transform = "rotateY(-"+s+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
	
	let enlacesCuerpo = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
	for(a=0; a<enlacesCuerpo.length; a++){
		enlacesCuerpo[a].className = enlacesCuerpo[a].className.replace("activo", "defecto");
	}
	
	event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
}

/*************************************************************************/
/*************************************************************************/
/*************************************************************************/

function rotarPies(p, event){
	let cuboPies = document.getElementById("cuboPies");
	cuboPies.style.transform = "rotateY(-"+p+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
	
	let enlacesPies = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
	for(g=0; g<enlacesPies.length; g++){
		enlacesPies[g].className = enlacesPies[g].className.replace("activo", "defecto");
	}
	
	event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
}