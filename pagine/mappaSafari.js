/*
	/*
	oggetto mappa safari
	
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
	erba 		booelan per dire che è in erba (true dentro)
	sound 		suono utilizzato in quella mappa
	
	metodi:
	definisciOstacoli	definisce ostX e ostY
	confronta			confronta ostX e ostY con il tasto e le coordinate del personaggio
	restituisci			restituisce quale boolean è true o false
	partenzaX			contiene le x di partenza,dopo cambio mappa, per questa mappa
	partenzaY			contiene le y di partenza,dopo cambio mappa, per questa mappa
*/
function MappaSafari(){
	this.ostX=new Array();
	this.ostY=new Array();
	this.sound="safari";
	this.definisciOstacoli=function(){
		//alberi a dx
		this.ostX[0]=414;         this.ostY[0]=166;
		this.ostX[1]=510;		  this.ostY[1]=259;
		//alberi a sx
		this.ostX[2]=195;		  this.ostY[2]=301;
								  this.ostY[3]=154;
		//casa
		this.ostX[3]=216;		  this.ostY[4]=172;
		this.ostX[4]=396;
		//porta safari
		this.ostX[5]=252;
		this.ostX[6]=333;
		//staccionata
		this.ostX[7]=270;		  this.ostY[5]=190;
		this.ostX[8]=315;		  this.ostY[6]=217;
		this.ostX[9]=420;
		this.ostX[10]=201;
		//erba
		//zona 2= mappa Safari
		this.ostX[11]=195;	this.ostY[7]=259;
		this.ostX[12]=414;	this.ostY[8]=301;
		//zona 3= mappa safari zona alta
		this.ostX[13]=195;   this.ostY[9]=208;
		this.ostX[14]=237;	this.ostY[10]=259;
	}
	this.confronta=function(px4,py4,tasto){
		this.su=true;
		this.giu=true;
		this.sx=true;
		this.dx=true;
		this.cambiaSu=false;
		this.cambiaGiu=false;
		this.cambiaSx=false;
		this.cambiaCasa=false;
		this.cambiaDx=false;
		this.erba=false;
		//alberi a dx
		if(px4>this.ostX[0] && px4<this.ostX[1]){
			if(py4==this.ostY[0])
				this.su=false;
			if(py4==this.ostY[1])
				this.giu=false;
		}
		if(py4>=this.ostY[1] && py4<this.ostY[2]){
			if(px4==this.ostX[0])
				this.dx=false;
		}
		if(py4>this.ostY[3] && py4<=this.ostY[0]){
			if(px4==this.ostX[0])
				this.dx=false;
		}
		//alberi sx
		if(px4==this.ostX[2]){
			switch(tasto){
				case 37:
					this.sx=false;
					break;
				case 38:
					if(py4==this.ostY[3])
						this.su=false;
					break;
				case 40:
					if(py4==this.ostY[2])
						this.giu=false;
					break;
				case 39:
					if(py4>=this.ostY[5] && py4<=this.ostY[6])
						this.dx=false;
					break;
			}
		}
		//alberi basso
		if(py4== this.ostY[2]){
			switch(tasto){
				case 37:
					if(px4==this.ostX[2])
						this.sx=false;
					break;
				case 39:
					if(px4==this.ostX[0])
						this.dx=false;
					break;
				case 40:
					this.giu=false;
					break;
			}
		}
		//casa
		if(py4==this.ostY[3]){
			switch(tasto){
				case 37:
					if(px4==this.ostX[2])
						this.sx=false;
					if(px4==this.ostX[4])
						this.sx=false;
					break;
				case 39:
					if(px4==this.ostX[0])
						this.dx=false;
					if(px4==this.ostX[3])
						this.dx=false;
					break;
				case 38:
					this.su=false;
					break;
			}
		}
		if(px4>=this.ostX[3] && px4<=this.ostX[4]){
			if(py4==this.ostY[4])
				this.su=false;
		}
		//staccionata 
		if(py4>=this.ostY[5] && py4<=this.ostY[6]){
			if(px4==this.ostX[7])
				this.sx=false;
			if(px4==this.ostX[8])
				this.dx=false;
			if(px4==this.ostX[9])
				this.sx=false;
		}
		if(px4>=this.ostX[10] && px4<=this.ostX[7]){
			if(py4==this.ostY[5])
				this.giu=false;
			if(py4==this.ostY[6])
				this.su=false;
		}
		if(px4>=this.ostX[8] && px4<=this.ostX[9]){
			if(py4==this.ostY[5])
				this.giu=false;
			if(py4==this.ostY[6])
				this.su=false;
		}
		//cambio mappa 
		if(px4>this.ostX[5] && px4<this.ostX[6]){
			if(py4==this.ostY[4])
				this.cambiaSu=true;
		}
		if(py4>this.ostY[0] && py4<this.ostY[1]){
			if(px4>this.ostX[1])
				this.cambiaDx=true;
		}
		//erba
		if(px4>=this.ostX[11] && px4<=this.ostX[12]){
			if(py4>=this.ostY[7] && py4<=this.ostY[8])
				this.erba=true;
		}
		//zona 3
		if(px4>=this.ostX[13] && px4<=this.ostX[14]){
			if(py4>=this.ostY[9] && py4<=this.ostY[10])
				this.erba=true;
		}
		return this.restituisci();
	}
	this.restituisci=function(){
		if(this.erba){
			if(!this.su)
				return "erbaSu";
			if(!this.giu)
				return "erbaGiu";
			if(!this.dx)
				return "erbaDx";
			if(!this.sx)
				return "erbaSx"
			return "erba";
		}
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
		if(dir=="sx")
			return 510;
		if(dir=="giu")
			return 300;
	}
	this.partenzaY=function(dir){
		if(dir=="sx")
			return 220;
		if(dir=="giu")
			return 178;
	}
	this.definisciOstacoli();
}