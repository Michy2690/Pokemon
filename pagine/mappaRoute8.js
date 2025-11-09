/*
	oggetto mappa Route 8
	
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
	erba 		booelan per dire che è in erba (true dentro)
	sound 		suono utilizzato in quella mappa
	
	metodi:
	definisciOstacoli	definisce ostX e ostY
	confronta			confronta ostX e ostY con il tasto e le coordinate del personaggio
	restituisci			restituisce quale boolean è true o false
	partenzaX			contiene le x di partenza,dopo cambio mappa, per questa mappa
	partenzaY			contiene le y di partenza,dopo cambio mappa, per questa mappa
*/
function MappaRoute8(){
	this.ostX=new Array();
	this.ostY=new Array();
	this.sound="route";
	this.definisciOstacoli=function(){
		this.ostX[0]=501;		this.ostY[0]=0;					//lago
		this.ostX[1]=501;		this.ostY[1]=61;
		this.ostX[2]=510;		this.ostY[2]=61;				//staccionata lago
		this.ostX[3]=540;		this.ostY[3]=61;
		this.ostX[4]=540;		this.ostY[4]=61;				//scale
		this.ostX[5]=558;		this.ostY[5]=184;
		this.ostX[6]=591;		this.ostY[6]=1;					//staccionata erba
		this.ostX[7]=591;		this.ostY[7]=61;
		this.ostX[8]=500;		this.ostY[8]=184;					//rocce
		this.ostX[9]=539;		this.ostY[9]=184;
		this.ostX[10]=548;		this.ostY[10]=184;					//rocce
		this.ostX[11]=671;		this.ostY[11]=184;
		this.ostX[12]=510;		this.ostY[12]=184;					//isola
		this.ostX[13]=540;		this.ostY[13]=217;
		this.ostX[14]=537;		this.ostY[14]=214;					//isola
		this.ostX[15]=603;		this.ostY[15]=235;
		this.ostX[16]=624;		this.ostY[16]=235;					//isola
		this.ostX[17]=654;		this.ostY[17]=214;
		this.ostX[18]=648;		this.ostY[18]=214;					//isola
		this.ostX[19]=672;		this.ostY[19]=184;
		this.ostX[20]=600;		this.ostY[20]=235;					//ponte
		this.ostX[21]=639;		this.ostY[21]=274;
		this.ostX[22]=549;		this.ostY[22]=6;
		this.ostX[23]=591;		this.ostY[23]=61;
	}
	this.confronta=function(px2,py2,tasto){
		this.su=true;
		this.giu=true;
		this.sx=true;
		this.dx=true;
		this.cambiaSu=false;
		this.cambiaGiu=false;
		this.cambiaSx=false;
		this.cambiaCasa=false;
		this.erba=false;
		//controllo lago
		if(px2==this.ostX[0]){
			switch(tasto){
				case 37:
					if(py2>=this.ostY[0] && py2<=this.ostY[1])
						this.sx=false;
					break;
				case 40:
					if(this.ostY[1]==py2)
						this.giu=false;
					break;
			}
		}
		//staccionata lago
		if(px2>this.ostX[2] && px2<this.ostX[3])
			if(py2==this.ostY[2])
				this.giu=false;
		//scale
		if(py2>=this.ostY[4] && py2<=this.ostY[5]){
			if(px2==this.ostX[4])
				this.sx=false;
			if(px2==this.ostX[5])
				this.dx=false;
		}
		//staccionata erba
		if(py2>=this.ostY[6] && py2<=this.ostY[7]){
			if(px2==this.ostX[6])
				this.dx=false;
			if(px2>=this.ostX[22] && px2<=this.ostX[23])
				this.erba=true;
		}
		//rocce
		if(px2>=this.ostX[10] && px2<=this.ostX[11])
			if(py2==this.ostY[10])
				this.su=false;
		
		//isola
		if(py2==this.ostY[12]){
			switch(tasto){
				case 37:
					if(px2==this.ostX[12])
						this.sx=false;
					break;
				case 39:
					if(px2==this.ostX[19])
						this.dx=false;
					break;
				case 38:
					if(px2>=this.ostX[12] && px2<this.ostX[13])
						this.su=false;
					break;
			}
		}
		if(py2==this.ostY[14]){
			switch(tasto){
				case 37:
					if(px2==this.ostX[12])
						this.sx=false;
					break;
				case 39:
					if(px2==this.ostX[19])
						this.dx=false;
					break;
				case 40:
					if(px2>=this.ostX[18] && px2<=this.ostX[19])
						this.giu=false;
					if(px2>=this.ostX[12] && px2<this.ostX[13])
							this.giu=false;
					break;
			}
		}
		if(py2>=this.ostY[12] && py2<=this.ostY[13])
			if(px2==this.ostX[12])
				this.sx=false;
		/*if(px2>=this.ostX[12] && px2<this.ostX[13]){
			if(py2==this.ostY[13])
				this.giu=false;
		}*/
		if(py2>=this.ostY[14] && py2<=this.ostY[15]+3){
			if(px2==this.ostX[14])
				this.sx=false;
			if(px2==this.ostX[17])
				this.dx=false;
		}
		if(py2==this.ostY[16]){
			switch(tasto){
				case 40:
						if(px2>=this.ostX[21] && px2<=this.ostX[17])
							this.giu=false;
						if(px2>=this.ostX[14] && px2<=this.ostX[15])
							this.giu=false;
						break;
				case 37:
					if(px2==this.ostX[13])
						this.sx=false;
					break;
				case 39:
					if(px2==this.ostX[17])
						this.dx=false;
					break;
			}
		}
		
		/*if(px2>=this.ostX[18] && px2<=this.ostX[19])
			if(py2==this.ostY[18])
				this.giu=false;*/
		
		if(py2>=this.ostY[19] && py2<=this.ostY[18])
			if(px2==this.ostX[19])
				this.dx=false;
		if(px2==this.ostX[19]){
			switch(tasto){
				case 39:
					this.dx=false;
					break;
				case 38:
					if(py2==this.ostY[11])
						this.su=false;
					break;
			}
		}
		//ponte
		if(py2==this.ostY[21]){
			switch(tasto){
				case 37:
					if(px2==this.ostX[23])
						this.sx=false;
					break;
				case 39:
					if(px2==this.ostX[21])
						this.dx=false;
					break;
				case 40:
					this.giu=false;
					break;
			}
		}
		//cambio mappa
		if(px2>=522 && px2<= 591)
			if(py2<=5)
				this.cambiaSu=true;
		//erba
		if(px2>=this.ostX[22] && px2<=this.ostX[23]){
			if(py2>=this.ostY[22] && py2<=this.ostY[23])
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
		if(!this.su)
			return "su";
		if(!this.giu)
			return "giu";
		if(!this.dx)
			return "dx";
		if(!this.sx)
			return "sx"
		if(this.cambiaCasa)
			return "cambiaCasa";
		if(this.cambiaGiu)
			return "cambiaGiu";
		if(this.cambiaSu)
			return "cambiaSu";
		if(this.cambiaSx)
			return "cambiaSx";
	}
	this.partenzaX=function(dir){
		if(dir=="giu")
			return 540;
	}
	this.partenzaY=function(dir){
		if(dir=="giu")
			return 7;
	}
	this.definisciOstacoli();
}