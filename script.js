
let fichero = 'd1.txt'

fetch(fichero)	
		.then(respuesta => respuesta.text())	
		.then(escudos)		

function escudos(entrada){
	//sacamos las entradas
	let ejercitos = entrada.split("\r\n");
	
	//parseamos los componentes del array
	for(let i=0;i<ejercitos.length;i++){
		ejercitos[i]=+ejercitos[i];
	}
	console.log(ejercitos)

	let j = 0;
	let multiplicacion;
	let area;
	let actual;
	let escudostotales = 0;
	let laterales = 0 ;
	let esquinas = 0 ;
	//tratamos cada entrada
	while(ejercitos[j]!=0){
		actual=ejercitos[j];
		escudostotales = 0;
		laterales = 0;
		esquinas = 0;
		//contamos los escudos de cada entrada
		while(escudostotales!=actual){
			area = 0;
			multiplicacion = 1;
			//hallamos la multiplicacion maxima posible
			while(ejercitos[j]>=multiplicacion*multiplicacion){
				multiplicacion++;
			}
			multiplicacion--;
			area = multiplicacion*multiplicacion;
			//contamos laterales y esquinas en cada cuadrado
			if(multiplicacion>2){
				laterales = laterales+(multiplicacion-2)*4;
				esquinas = esquinas+8;
			}else{
				if(multiplicacion==2){
					esquinas = esquinas+8;
				}else{
					if(multiplicacion==1){
						laterales = laterales+4;
					}
				}
			}
			//si el area es distinta al numero actual restamos el area para cambiar de cuadrado por entrada
			if(area!=ejercitos[j]){
				ejercitos[j]= ejercitos[j]-area;
			}
			escudostotales=escudostotales+area; //sumamos las areas a los escudos totales
		}
		//sumamos los laterales y las esquinas de cada cuadrado a los escudostotales
		escudostotales=escudostotales+laterales+esquinas;
		console.log(escudostotales);
		j++; //cambiamos de entrada
	}

}

