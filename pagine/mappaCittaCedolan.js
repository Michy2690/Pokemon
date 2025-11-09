/*
oggetto mappa citta Cedolan
	
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
/*
	Gestire scorrimento mappa background
*/
function MappaCittaCedolan(){
	this.ostX=new Array();
	this.ostY=new Array();
	this.sound="Lab";
	this.definisciOstacoli=function(){
		//alberi ad ingresso basso
		this.ostX[0]=290;		this.ostY[0]=348;
		this.ostX[1]=368;		this.ostY[1]=459;
		
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
		//alberi sx
		if(py6>this.ostY[0]&& py6<this.ostY[1]){
			if(px6==this.ostX[0])
				this.sx=false;
			if(px6==this.ostX[1])
				this.dx=false;
		}
		//personaggio
		if(px6>this.ostX[0] && px6<this.ostX[1]){
			if(py6==this.ostY[0])
				this.personaggio=true;
			if(py6<this.ostY[0])
				this.su=false;
		}
		// cambia mappa
		if(px6>this.ostX[0] && px6<this.ostX[1]){
			if(py6>this.ostY[1])
				this.cambiaGiu=true;
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
		if(dir=="su")
			return 347;
	}
	this.partenzaY=function(dir){
		if(dir=="su")
			return 459;
	}
	this.definisciOstacoli();
	
}