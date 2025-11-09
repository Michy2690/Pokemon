/* oggetto pokemon

	proprietà:
		mosse	array di mosse del pokemon
		nome	nome del pokemon
		possiede	booleana che dice se il pokemon è dell'utente o no
		
	metodi:
		getMossa	restituisce la mossa
		getNome		restituisce il nome
		setPossiede modifica la bool possiede
		getPossiede restituisce se ho il pokemon
*/
/*IDEA
		Noi creiamo un vettore di pokemon all'inizio, mettendo la bool possiede a true solo per il pokemon iniziale e li salviamo nel local storage
		quando apri il pokedex visualizzi solo quelli con la bool possiede = true
		nella battaglia salvi un pokemon avversario da affrontare nel local storage, fai scegliere il pokemon all'utente e visualizzi quelli che ha
		se catturi il pokemon metti a true la bool possiede
	*/
function Pokemon(n,m1,m2,m3,m4,t,p,v1,v2,v3,v4){
	this.nome = n;
	this.mosse = new Array();
	this.mosse[0] = m1;
	this.mosse[1] = m2;
	this.mosse[2] = m3;
	this.mosse[3] = m4;
	this.tipo = t;
	this.possiede = p;
	this.pp = new Array();
	this.pp[0] = v1;
	this.pp[1] = v2;
	this.pp[2] = v3;
	this.pp[3] = v4;
	this.getNome = function(){
		return this.nome;
	}
	
	this.getTipo = function(){
		return this.tipo;
	}
	
	this.getMossa1 = function(){
		return this.mosse[1];
	}
	this.getMossa2 = function(){
		return this.mosse[2];
	}
	this.getMossa3 = function(){
		return this.mosse[3];
	}
	this.getMossa4 = function(){
		return this.mosse[4];
	}
	
	this.getPossiede = function(){
		return this.possiede;
	}
	this.setPossiede = function(p){
		this.possiede = p;
	}
	
	
	
}