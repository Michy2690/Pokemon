/*
	oggetto piano sotto
	
	proprietà:
	ostX[]		array di ostacoli solo X
	ostY[]		array di ostacoli solo Y
	su			boolean per gestire movimento su          (false blocca)
	giu			boolean per gestire movimento giu        (false blocca)
	sx			boolean per gestire movimento sinistra   (false blocca)
	dx			boolean per gestire movimento destra	(false blocca)
	cambiaSu	boolean per gestire cambiamento mappa su (true cambia)
	cambiaGiu	boolean per gestire cambiamento mappa giu (true cambia)
	CambiaSx	boolean per gestire cambiamento mappa sx (true cambia)
	personaggio	boolean per gestire personaggio esterno
	sound 		suono utilizzato in quella mappa
	
	metodi:
	definisciOstacoli	definisce ostX e ostY
	confronta			confronta ostX e ostY con il tasto e le coordinate del personaggio
	restituisci			restituisce quale boolean è true o false
	partenzaX			contiene le x di partenza,dopo cambio mappa, per questa mappa
	partenzaY			contiene le y di partenza,dopo cambio mappa, per questa mappa

*/
function MappaPianoSotto(){
	this.ostX=new Array();
	this.ostY=new Array();
	this.definisciOstacoli=function(){
		this.ostX[0]=63; this.ostY[0]=241;
		this.ostX[1]=141;this.ostY[1]=247;
		
	}
	this.confronta=function(px6,py6,tasto){
		this.su=true;
		this.giu=true;
		this.sx=true;
		this.dx=true;
		this.cambiaSu=false;
		this.cambiaGiu=false;
		this.cambiaSx=false;
		this.cambiaCasa=false;
		this.personaggio=false;
		//personaggio
		if(py6==this.ostY[0])
				this.personaggio=true;
		if(py6<this.ostY[0])
				this.su=false;
		// cambia mappa
		if(px6>this.ostX[0] && px6<this.ostX[1]){
			if(py6>this.ostY[1])
				this.cambiaCasa=true;
		}
		return this.restituisci();
	}
	this.restituisci=function(){
		if(this.cambiaCasa)
			return "cambiaCasa";
		if(this.cambiaGiu)
			return "cambiaGiu";
		if(this.cambiaSu)
			return "cambiaSu";
		if(this.cambiaSx)
			return "cambiaSx";
		if(this.personaggio)
			return "personaggi";
		if(!this.su)
			return "su";
		if(!this.giu)
			return "giu";
		if(!this.dx)
			return "dx";
		if(!this.sx)
			return "sx"
	}
	this.partenzaX=function(dir){
		if(dir=="casa")
			return 102;
	}
	this.partenzaY=function(dir){
		if(dir=="casa")
			return 247;
	}
	this.definisciOstacoli();
}