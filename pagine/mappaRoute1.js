/*
	oggetto mappa Route 1
	
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
function MappaRoute1(){
	this.ostX=new Array();
	this.ostY=new Array();
	this.erbX=new Array();
	this.erbY=new Array();
	this.sound="route";
	this.definisciOstacoli=function(){
		//alberi in alto(blocco sx e dx)
		this.ostX[0]=394;			this.ostY[0]=1;
		this.ostX[1]=460;			this.ostY[1]=67;
		//alberi a dx(blocco su e dx)
		this.ostX[2]=460;			this.ostY[2]=67;
		this.ostX[3]=800;			
		this.ostX[4]=592;
		//albero solitario a dx, e mezzo
		//albero dx
		this.ostX[5]=550;			this.ostY[3]=175;
		this.ostX[6]=592;			this.ostY[4]=241;
		//albero mezzo
		this.ostX[7]=391;			this.ostY[5]=175;
		this.ostX[8]=508;			this.ostY[6]=241;
		//ingresso basso
		this.ostX[9]=397;			this.ostY[7]=403;
		this.ostX[10]=415;			this.ostY[8]=472;
		//staccionata a destra ->errore negli spigoli
		this.ostX[11]=187;			this.ostY[9]=274;
		this.ostX[12]=376;			this.ostY[10]=403;
		this.ostX[13]=244;			this.ostY[11]=304;
		this.ostX[14]=280;
		this.ostX[15]=340;
		//alberi a destra
		this.ostX[16]=220;			this.ostY[12]=196;
									this.ostY[13]=274;
		//casa e staccionata alto 
		this.ostX[17]=244;			this.ostY[14]=163;
		this.ostX[18]=220;			this.ostY[15]=190;
		this.ostX[19]=259;          this.ostY[16]=127;
		this.ostX[20]=316;			this.ostY[17]=100;
		this.ostX[21]=175;          this.ostY[18]=67;
		this.ostX[22]=190;
		this.ostX[23]=352; 
		//salto 
		this.ostX[24]=508;          this.ostY[19]=190;
		this.ostX[25]=547;          this.ostY[20]=220;
		//erba 
		//zona 4=mappa Route 1 parte dx basso
		this.erbX[0]=547;	this.erbY[0]=241;
		this.erbX[1]=592;	this.erbY[1]=403;
		//zona 5=mappa Route 1 parte dx mancante
		this.erbX[2]=415;	this.erbY[2]=355;
		this.erbX[3]=547;	this.erbY[3]=403;
		//zona 6=mappa Route 1 parte dx alta
		this.erbX[4]=487;	this.erbY[4]=67;
		this.erbX[5]=592;	this.erbY[5]=112;
		//zona 7=mappa Route 1 parte dx alta mancante
		this.erbX[6]=547;	this.erbY[6]=112;
		this.erbX[7]=592;	this.erbY[7]=175;
		//zona 8=mappa Route 1 parte centrale 
		this.erbX[8]=352;	this.erbY[8]=67;
		this.erbX[9]=403;	this.erbY[9]=244;
		//zona 9=mappa Route 1 parte centrale 
		this.erbX[10]=280;	this.erbY[10]=190;
		this.erbX[11]=322;	this.erbY[11]=223;
		//zona 10=mappa Route 1 parte centrale 
		this.erbX[12]=280;	this.erbY[12]=175;
		this.erbX[13]=403;	this.erbY[13]=175;
		//zona 11=mappa Route 1 parte centrale 
		this.erbX[14]=391;	this.erbY[14]=175;
		this.erbX[15]=403;	this.erbY[15]=244;
	}
	this.confronta=function(px3,py3,tasto){
		this.su=true;
		this.giu=true;
		this.sx=true;
		this.dx=true;
		this.cambiaSu=false;
		this.cambiaGiu=false;
		this.cambiaSx=false;
		this.cambiaCasa=false;
		this.erba=false;
		//alberi in alto(blocco sx e dx)
		if(py3>this.ostY[0] && py3<this.ostY[1]){
			if(px3==this.ostX[0])
				this.sx=false;
			if(px3==this.ostX[1])
				this.dx=false;
		}
		//alberi a dx(blocco su e dx)
		if(px3>this.ostX[2] && px3<this.ostX[3]){
			if(py3==this.ostY[2])
				this.su=false;
		}
		if(px3==this.ostX[4])
			this.dx=false;
		//albero a dx solitario+ mezzo
		if(py3>=this.ostY[3] && py3<=this.ostY[4]){
			if(px3==this.ostX[5])
				this.dx=false;
			if(px3==this.ostX[7])
				this.dx=false;
			if(px3==this.ostX[8])
				this.sx=false;
			if(px3==595)
				this.dx=false;
		}
		if(px3>this.ostX[5] && px3<=this.ostX[6]){
			if(py3==this.ostY[3])
				this.giu=false;
			if(py3==this.ostY[4])
				this.su=false;
		}
		if(px3>this.ostX[7] && px3<=this.ostX[8]){
			if(py3==this.ostY[3])
				this.giu=false;
			if(py3==this.ostY[4])
				this.su=false;
		}
		//ingresso basso
		if(py3>this.ostY[7] && py3<this.ostY[8]){
			if(px3==this.ostX[9])
				this.sx=false;
			if(px3==this.ostX[10])
				this.dx=false;
		}
		//staccionata a destra 
		if(px3>this.ostX[11] && px3<this.ostX[13]){
			if(py3==this.ostY[9])
				this.giu=false;
		}
		if(px3>this.ostX[14] && px3<this.ostX[12]){
			if(py3==this.ostY[9])
				this.giu=false;
		}
		if(py3>this.ostY[9] && py3<this.ostY[11]){
			if(px3==this.ostX[13])
				this.sx=false;
			if(px3==this.ostX[14])
				this.dx=false;
		}
		if(px3==this.ostX[11]){
			switch(tasto){
				case 37:
					if(py3>=this.ostY[9] && py3<=this.ostY[10])
						this.sx=false;
					break;
				case 38:
					if(py3==this.ostY[9])
						this.su=false;
					break;
				case 40:
					if(py3==this.ostY[10])
						this.giu=false;
					break;
			}
		}
		if(px3==this.ostX[15]){
			switch(tasto){
				case 38:
					if(py3==this.ostY[9])
						this.su=false;
					break;
				case 39:
					if(py3>=this.ostY[9] && py3<=this.ostY[10])
						this.dx=false;
					break;
				case 40:
					if(py3==this.ostY[10])
						this.giu=false;
					break;
			}
		}
		if(py3==this.ostY[10]){
			switch(tasto){
				case 37:
					if(px3==this.ostX[11])
						this.sx=false;
					break;
				case 39:
					if(px3==this.ostX[15])
						this.dx=false;
					break;
				case 40:
					if(px3>=this.ostX[11] && px3<=this.ostX[15])
						this.giu=false;
					if(px3>=this.ostX[10])
						this.giu=false;
					break;
			}
		}
		if(py3==this.ostY[11]){
			switch(tasto){
				case 37:
					if(px3==this.ostX[11])
						this.sx=false;
					break;
				case 39:
					if(px3==this.ostX[15]+3)
						this.dx=false;
					break;
				case 38:
					if(px3>=this.ostX[11] && px3<=this.ostX[13])
						this.su=false;
					if(px3>=this.ostX[14] && px3<=this.ostX[15])
						this.su=false;
					break;
			}
		}
		if(px3==this.ostX[12]){
			switch(tasto){
				case 37:
					if(py3>=this.ostY[9] && py3<=this.ostY[10])
						this.sx=false;
					break;
				case 40:
					if(py3==this.ostY[10])
						this.giu=false;
					break;
			}
		}
		//pezzo staccionata destra 
		if(px3>this.ostX[12] && px3<this.ostX[9]){
			if(py3==this.ostY[10])
				this.giu=false;
		}
		//alberi a destra 
		if(py3>this.ostY[12] && py3<this.ostY[13]){
			if(px3==this.ostX[16])
				this.sx=false;
		} 
		//staccionata e casa su
		if(px3>this.ostX[21] && px3<this.ostX[17]){
			if(py3==this.ostY[15])
				this.su=false;
		}
		if(px3>this.ostX[19] && px3<this.ostX[23]){
			if(py3==this.ostY[15])
				this.su=false;
		}
		if(py3>this.ostY[14] && py3<this.ostY[15]){
			if(px3==this.ostX[17])
				this.sx=false;
			if(px3==this.ostX[19])
				this.dx=false;
		}
		if(px3==this.ostX[21]){
			switch(tasto){
				case 37:
					if(py3>this.ostY[18] && py3<this.ostY[14])
						this.sx=false;
					break;
				case 38:
					if(py3==this.ostY[17])
						this.su=false;
					break;
				case 40:
					if(py3==this.ostY[14])
						this.giu=false;
					break;
			}
		}
		if(px3==this.ostX[20]){
			switch(tasto){
				case 39:
					if(py3>this.ostY[18] && py3<this.ostY[14])
						this.dx=false;
					break;
				case 38:
					if(py3==this.ostY[16])
						this.su=false;
					break;
				case 40:
					if(py3==this.ostY[14])
						this.giu=false;
					break;
			}
		}
		if(py3==this.ostY[14]){
			switch(tasto){
				case 39:
					if(px3==this.ostX[20])
						this.dx=false;
					break;
				case 37:
					if(px3==this.ostX[21])
						this.sx=false;
					break;
				case 40:
					if(px3>this.ostX[21] && px3<this.ostX[17])
						this.giu=false;
					if(px3>this.ostX[19] && px3<this.ostX[23])
						this.giu=false;
					break;
			}
		}
		if(py3==this.ostY[17]){
			switch(tasto){
				case 39:
					if(px3==this.ostX[22])
						this.dx=false;
					break;
				case 37:
					if(px3==this.ostX[21])
						this.sx=false;
					break;
				case 38:
					if(px3>this.ostX[21] && px3<this.ostX[22])
						this.su=false;
					break;
			}
		}
		if(py3==this.ostY[16]){
			switch(tasto){
				case 39:
					if(px3==this.ostX[20])
						this.dx=false;
					break;
				case 38:
					if(px3>this.ostX[22] && px3<this.ostX[20])
						this.su=false;
					break;
			}
		}
		if(px3==this.ostX[22]){
			switch(tasto){
				case 39:
					if(py3>this.ostY[17] && py3<this.ostY[16])
						this.dx=false;
					break;
				case 38:
					if(py3==this.ostY[17])
						this.su=false;
					break;
			}
		}
		if(px3==this.ostX[23]){
			switch(tasto){
				case 37:
					if(py3>this.ostY[18] && py3<this.ostY[15])
						this.sx=false;
					break;
				case 38:
					if(py3==this.ostY[18])
						this.su=false;
					break;
			}
		}
		//salto
		if(px3>=this.ostX[24]&& px3<=this.ostX[25]){
			switch(tasto){
				case 38:
					if(py3==this.ostY[20])
						this.su=false;
					break;
				case 37:
					if(py3>this.ostY[19] && py3<this.ostY[20])
						if(px3==this.ostX[24])
							this.sx=false;
					break;
				case 39:
					if(py3>this.ostY[19] && py3<this.ostY[20])
						if(px3==this.ostX[25])
							this.dx=false;
					break;
			}
		}
		//cambia mappa
		if(px3>this.ostX[9] && px3<this.ostX[10]){
			if(py3>=this.ostY[8])
				this.cambiaGiu=true;
		}
		if(px3>this.ostX[0] && px3<this.ostX[1]){
			if(py3<=1)
				this.cambiaSu=true;
		}
		//erba
		//zona4
		if(px3>=this.erbX[0] && px3<=this.erbX[1]){
			if(py3>=this.erbY[0] && py3<=this.erbY[1])
				this.erba=true;
		}
		//zona 5
		if(px3>=this.erbX[2] && px3<=this.erbX[3]){
			if(py3>=this.erbY[2] && py3<=this.erbY[3])
				this.erba=true;
		}
		//zona 6
		if(px3>=this.erbX[4] && px3<=this.erbX[5]){
			if(py3>=this.erbY[4] && py3<=this.erbY[5])
				this.erba=true;
		}
		//zona 7
		if(px3>=this.erbX[6] && px3<=this.erbX[7]){
			if(py3>=this.erbY[6] && py3<=this.erbY[7])
				this.erba=true;
		}
		//zona 8
		if(px3>=this.erbX[8] && px3<=this.erbX[9]){
			if(py3>=this.erbY[8] && py3<=this.erbY[9])
				this.erba=true;
		}
		//zona 9
		if(px3>=this.erbX[10] && px3<=this.erbX[11]){
			if(py3>=this.erbY[11] && py3<=this.erbY[11])
				this.erba=true;
		}
		//zona 10
		if(px3>=this.erbX[12] && px3<=this.erbX[13]){
			if(py3>=this.erbY[12] && py3<=this.erbY[13])
				this.erba=true;
		}
		//zona 11
		if(px3>=this.erbX[14] && px3<=this.erbX[15]){
			if(py3>=this.erbY[14] && py3<=this.erbY[15])
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
			return 406;
		if(dir=="giu")
			return 430;
	}
	this.partenzaY=function(dir){
		if(dir=="su")
			return 469;
		if(dir=="giu")
			return 10;
	}
	this.definisciOstacoli();
}