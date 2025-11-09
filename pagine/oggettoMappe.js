/*
	oggetto contenente nomi delle mappe
	
	proprietà:
	nomiMappe[]			nomi di tutte le mappe possibili
	mappaUtilizzata		mappa che si sta utilizzando
	scelta				valore mappa iniziale
	
	metodi:
	istanza()			riempe array mappe
	cambioMappa()		gestire cambio mappa con if, in base direzione e mappa utilizzata
	partenza()			restituisce mappa di partenza
	restituisci()		restituisce la mappa da cambiare 


*/
function Mappe(){
	this.nomiMappe=new Array();
	this.mappaUtilizzata="";
	
	this.istanza=function(){
		this.nomiMappe[0]="cittaPartenza";
		this.nomiMappe[1]="cittaCedolan";
		this.nomiMappe[2]="Route1";
		this.nomiMappe[3]="Route8";
		this.nomiMappe[4]="safari";
		this.nomiMappe[5]="SafariCheckIn";
		this.nomiMappe[6]="safariZone";
		this.nomiMappe[7]="pianoSu";
		this.nomiMappe[8]="pianoSotto";
		this.nomiMappe[9]="pokeCenter";
	}
	this.cambioMappa=function(dir){
		this.trovato=false;
		//cambiamento dipende da disegno mappa del gioco
		//cittaPartenza
		if(mappaUtilizzata==="cittaPartenza"){
			if(dir=="su")
				this.scelta="Route1";
			if(dir=="giu")
				this.scelta="Route8";
			if(dir=="sx")
				this.scelta="safari";
			if(dir=="casa")
				this.scelta="pianoSotto"
		}
		//cittaCedolan
		if(mappaUtilizzata==="cittaCedolan"){
			if(dir=="pokeCenter")
				this.scelta="pokeCenter";
			if(dir=="giu")
				this.scelta="Route1";
		}
		//Route1
		if(mappaUtilizzata==="Route1"){
			if(dir=="giu")
				this.scelta="cittaPartenza";
			if(dir=="su")
				this.scelta="cittaCedolan";
		}
		//Route8
		if(mappaUtilizzata==="Route8")
			if(dir=="su")
				this.scelta="cittaPartenza";
		//safari
		if(mappaUtilizzata==="safari"){
			if(dir=="dx")
				this.scelta="cittaPartenza";
			if(dir=="su")
				this.scelta="SafariCheckIn";
		}
		//SafariCheckIn
		if(mappaUtilizzata==="SafariCheckIn"){
			if(dir=="giu")
				this.scelta="safari";
			if(dir=="su")
				this.scelta="safariZone";
		}
		//safariZone
		if(mappaUtilizzata==="safariZone"){
			if(dir=="giu")
				this.scelta="SafariCheckIn";
		}
		//pianoSu
		if(mappaUtilizzata==="pianoSu"){
			if(dir=="giu")
				this.scelta="pianoSotto";
		}
		//pianoSotto
		if(mappaUtilizzata==="pianoSotto"){
			if(dir=="casa")
				this.scelta="cittaPartenza";
			if(dir=="su")
				this.scelta="pianoSu";
		}
		//pokeCenter
		if(mappaUtilizzata==="pokeCenter"){
			if(dir=="giu")
				this.scelta="cittaCedolan";
		}
		return this.restituisci();
	}
	this.restituisci=function(){
		this.mappaUtilizzata=this.scelta;
		return this.mappaUtilizzata;
	}
	this.partenza=function(){
		this.scelta="cittaPartenza";
		return this.restituisci();
	}
	this.istanza();
	
}