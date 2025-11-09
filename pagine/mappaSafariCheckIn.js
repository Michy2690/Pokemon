/*
	oggetto mappa safariCheckIn
	
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
	CambiaDx	boolean per gestire cambiamento mappa dx (true cambia)
	messaggio 	boolean per dire di stampare messsaggio
	sound 		suono utilizzato in quella mappa
	
	metodi:
	definisciOstacoli	definisce ostX e ostY
	confronta			confronta ostX e ostY con il tasto e le coordinate del personaggio
	restituisci			restituisce quale boolean è true o false
	partenzaX			contiene le x di partenza,dopo cambio mappa, per questa mappa
	partenzaY			contiene le y di partenza,dopo cambio mappa, per questa mappa
*/
function MappaSafariCheckIn(){
	this.ostX=new Array();
	this.ostY=new Array();
	this.sound="safari";
	this.definisciOstacoli=function(){
		//uffici
		this.ostX[0]=168;
		this.ostX[1]=99;
		//porta
		this.ostX[2]=93;		this.ostY[0]=30;
		this.ostX[3]=171;
		//ingresso 
		this.ostX[4]=90;		this.ostY[1]=132;
		this.ostX[5]=174;
	}
	this.confronta=function(px5,py5,tasto){
		this.su=true;
		this.giu=true;
		this.sx=true;
		this.dx=true;
		this.cambiaSu=false;
		this.cambiaGiu=false;
		this.cambiaSx=false;
		this.cambiaCasa=false;
		this.cambiaDx=false;
		this.messaggio=false;
		if(px5==this.ostX[0])
			this.dx=false;
		if(px5==this.ostX[1])
			this.sx=false;
		//messaggio 
		if(px5>=this.ostX[2] && this.ostX[3]){
			if(py5==this.ostY[0])
				this.messaggio=true;
			if(py5<this.ostY[0])
				this.su=false;
		}
		//cambio mappa
		if(px5>this.ostX[4] && px5<this.ostX[5]){
			if(py5>=213)
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
		if(this.cambiaDx)
			return "cambiaDx";
		if(this.messaggio)
			return "messaggio";
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
			return 135;
		if(dir=="giu")
			return 135;
	}
	this.partenzaY=function(dir){
		if(dir=="su")
			return 210;
		if(dir=="giu")
			return 36;
	}
	this.definisciOstacoli();
}