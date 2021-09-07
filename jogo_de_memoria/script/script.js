let acertos = 0;
let jogadas = 0;
let vitorias = 0;
let contador = 1;

const luzes = []
luzes[1] = document.getElementById('luz1')
luzes[2] = document.getElementById('luz2')
luzes[3] = document.getElementById('luz3')
luzes[4] = document.getElementById('luz4')
luzes[5] = document.getElementById('luz5')
luzes[6] = document.getElementById('luz6')

const luz_vitorias = []
luz_vitorias[0] = document.getElementById('vitoria1')
luz_vitorias[1] = document.getElementById('vitoria2')
luz_vitorias[2] = document.getElementById('vitoria3')

const botoes = []
botoes[1] = document.getElementById('tecla1')
botoes[2] = document.getElementById('tecla2')
botoes[3] = document.getElementById('tecla3')
botoes[4] = document.getElementById('tecla4')
botoes[5] = document.getElementById('tecla5')
botoes[6] = document.getElementById('tecla6')
botoes[7] = document.getElementById('tecla7')
botoes[8] = document.getElementById('tecla8')
botoes[9] = document.getElementById('tecla9')










function random(max,min){
	return parseInt( Math.random() * (max - min) + min )
}







function pisca_verde(numero){
	setTimeout( () => {botoes[numero].classList.toggle('verde')},400)
	return botoes[numero].classList.toggle('verde')
}
function pisca_vermelho(numero){
	setTimeout( () => {botoes[numero].classList.toggle('vermelho')},400)
	return botoes[numero].classList.toggle('vermelho')
}







function ligar_bt(){
	for (let c = 1; c <= 9; c++){
		if ( num_aleatorios[0] == c ){
			setTimeout( () => {pisca_verde(c)},1000)

			// setTimeout( () => {botoes[c].classList.toggle('verde')},1000)
		}
		if ( num_aleatorios[1] == c ){
			setTimeout( () => {pisca_verde(c)},1600)
		}
		if ( num_aleatorios[2] == c ){
			setTimeout( () => {pisca_verde(c)},2200)
		}
		if ( num_aleatorios[3] == c ){
			setTimeout( () => {pisca_verde(c)},2800)
		}
		if ( num_aleatorios[4] == c ){
			setTimeout( () => {pisca_verde(c)},3400)
		}
		if ( num_aleatorios[5] == c ){
			setTimeout( () => {pisca_verde(c)},4000)
		}
		
	}
}

function desliga_jogadas(cont){
	contador = 1
	jogadas = 0
	for (let d = 1; d <= 6; d++){
		luzes[d].classList.toggle('ligar')
	}
	
	start();
}


function vence_um(num){
	luzes[num].classList.toggle('ligar')

	if (num == 6 && vitorias == 0){
		desliga_jogadas(num);
		luz_vitorias[0].classList.toggle('ligar')
		vitorias++
	}
	else if (num == 6 && vitorias == 1){
		desliga_jogadas(num);
		luz_vitorias[1].classList.toggle('ligar')
		vitorias++
	}
	else if (num == 6 && vitorias == 2){
		desliga_jogadas(num);
		luz_vitorias[2].classList.toggle('ligar')
		vitorias++
		document.getElementById('ofuscasao').style.display = 'flex';
		document.getElementById('pop_up').style.display = 'flex';
	}
}




function acertar_ou_errar(numero){
	if (jogadas == 0){
		if (num_aleatorios[0] == numero){pisca_verde(numero); jogadas++; vence_um(jogadas)}
		else{pisca_vermelho(numero); setTimeout( () =>{document.location.reload(true)},1000)}
	}
	else if (jogadas == 1){
		if (num_aleatorios[1] == numero){pisca_verde(numero); jogadas++; vence_um(jogadas)}
		else{pisca_vermelho(numero); setTimeout( () =>{document.location.reload(true)},1000)}
	}
	else if (jogadas == 2){
		if (num_aleatorios[2] == numero){pisca_verde(numero); jogadas++; vence_um(jogadas)}
		else{pisca_vermelho(numero); setTimeout( () =>{document.location.reload(true)},1000)}
	}
	else if (jogadas == 3){
		if (num_aleatorios[3] == numero){pisca_verde(numero); jogadas++; vence_um(jogadas)}
		else{pisca_vermelho(numero); setTimeout( () =>{document.location.reload(true)},1000)}
	}
	else if (jogadas == 4){
		if (num_aleatorios[4] == numero){pisca_verde(numero); jogadas++; vence_um(jogadas)}
		else{pisca_vermelho(numero); setTimeout( () =>{document.location.reload(true)},1000)}
	}
	else if (jogadas == 5){
		if (num_aleatorios[5] == numero){pisca_verde(numero); jogadas++; vence_um(jogadas)}
		else{pisca_vermelho(numero); setTimeout( () =>{document.location.reload(true)},1000)}
	}
	
}



function toque(numero){
	acertar_ou_errar(numero);
}








const num_aleatorios = []
function main(){
	for (let i = 1; i <= 6; i++){
		num_aleatorios.push( random(1,10) )
	}
	ligar_bt();
	console.log( num_aleatorios )
}




function start(){

	for (let a = 1; a <= 6; a++){
		num_aleatorios.pop()
	}
	if(contador == 1){
		main();
		contador++
	}
}




function restart(){
	let confirmar = confirm('Você quer mesmo recaregar a pagina?')
	if( confirmar == true){
		document.location.reload(true)
		start();
	}
}