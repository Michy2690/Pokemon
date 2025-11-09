/*
	oggetto mappa Citta partenza
	
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
	cambiaCasa	boolean per gestire cambiamento mappa perché entra in una casa (true cambia)
	sound 		suono utilizzato in quella mappa
	
	metodi:
	definisciOstacoli	definisce ostX e ostY
	confronta			confronta ostX e ostY con il tasto e le coordinate del personaggio
	restituisci			restituisce quale boolean è true o false
	partenzaX			contiene le x di partenza,dopo cambio mappa, per questa mappa
	partenzaY			contiene le y di partenza,dopo cambio mappa, per questa mappa

*/
function MappaCittaPartenza(){
	this.ostX=new Array();
	this.ostY=new Array();
	this.sound="Lab";
	this.definisciOstacoli=function(){
		this.ostX[0]=343;		this.ostY[0]=25;		//alberi in alto
		this.ostX[1]=93;			this.ostY[1]=190;	//alberi a sx
		this.ostX[2]=93;			this.ostY[2]=250;	//alberi a sx-sotto
		this.ostX[3]=373;		this.ostY[3]=25;		//alberi a dx-alto
		this.ostX[4]=570;		this.ostY[4]=483;	//alberi a dx-basso e mezzo
		this.ostX[5]=142;		this.ostY[5]=178;	//casa a sx, parte sx
		this.ostX[6]=298;		this.ostY[6]=46;		//casa a sx, parte dx
		this.ostX[7]=367;		this.ostY[7]=178;	//casa a dx, parte sx
		this.ostX[8]=523;		this.ostY[8]=46;		//casa a dx parte dx
		this.ostX[9]=343;		this.ostY[9]=334;	//casa a dx, parte sx(basso)
		this.ostX[10]=547;		this.ostY[10]=199;	//casa a dx parte dx(basso)
		this.ostX[11]=142;		this.ostY[11]=277;	//staccionata a sx
		this.ostX[12]=295;		this.ostY[12]=241;	//staccionata a sx
		this.ostX[13]=343;		this.ostY[13]=397;	//staccionata a dx
		this.ostX[14]=520;		this.ostY[14]=367;	//staccionata a dx
		this.ostX[15]=193;		this.ostY[15]=528;	//lago
		this.ostX[16]=322;		this.ostY[16]=385;	//lago
		this.ostX[17]=394;		this.ostY[17]=522;	//staccionata basso
		this.ostX[18]=499;		this.ostY[18]=466;	//staccionata basso
		this.ostX[19]=198;		this.ostY[19]=455;	//alberi basso a sx(considera alberi a sx la x)
		this.ostX[20]=502;		this.ostY[20]=455;	//alberi passo a dx(considera alberi a dx la x)
		this.ostX[21]=121;		this.ostY[21]=178;	//posta sx
		this.ostX[22]=142;		this.ostY[22]=127;	//posta sx
		this.ostX[23]=346;		this.ostY[23]=178;	//posta dx
		this.ostX[24]=367;		this.ostY[24]=127;	//posta dx
		//porta casa personaggio
		this.ostX[25]=166;
		this.ostX[26]=223;
	}
	this.confronta=function(px, py,tasto){
		this.su=true;
		this.giu=true;
		this.sx=true;
		this.dx=true;
		this.cambiaSu=false;
		this.cambiaGiu=false;
		this.cambiaSx=false;
		this.cambiaCasa=false;
		//controllo contorno(alberi)
		if(px<this.ostX[0] && py<=this.ostY[0]){
			this.su=false;
		}
		if(px<=this.ostX[1]&& py<this.ostY[1]){
			this.sx=false;
		}
		if(px<=this.ostX[2]&& py>this.ostY[2]){
			this.sx=false;
		}
		if(px<=this.ostX[2]&& py==this.ostY[2])
			this.giu=false;
		if(px<=this.ostX[2]&& py==this.ostY[1])
			this.su=false;
		if(px>this.ostX[3]&& py<=this.ostY[3])
			this.su=false;
		if(px>=this.ostX[4]&& py<this.ostY[4])
			this.dx=false;
		if(px==this.ostX[0] && py<=this.ostY[0])
			this.sx=false;
		if(px==this.ostX[3]&& py<=this.ostY[3])
			this.dx=false;
		if(px>=this.ostX[20] && py>=this.ostY[20])
			this.giu=false;
		if(px<=this.ostX[19]&& py>=this.ostY[19])
			this.giu=false;
		
		//controllo case(+staccionate)
		//casa sx
		if(px>this.ostX[5] && px<this.ostX[6])
			if(py==this.ostY[6])
				this.giu=false;
			else
				if(py==this.ostY[5])
					this.su=false;
		if(py>this.ostY[6] && py<this.ostY[5])
			if(px==this.ostX[5])
				this.dx=false;
			else
				if(px==this.ostX[6])
					this.sx=false;
		//casa dx
		if(px>this.ostX[7] && px<this.ostX[8])
			if(py==this.ostY[8])
				this.giu=false;
			else
				if(py==this.ostY[7])
					this.su=false;
		if(py>this.ostY[8] && py<this.ostY[7])
			if(px==this.ostX[7])
				this.dx=false;
			else
				if(px==this.ostX[8])
					this.sx=false;
		//casa basso dx		
		if(px>this.ostX[9] && px<this.ostX[10])
			if(py==this.ostY[10])
				this.giu=false;
			else
				if(py==this.ostY[9])
					this.su=false;
		if(py>this.ostY[10] && py<this.ostY[9])
			if(px==this.ostX[9])
				this.dx=false;
			else
				if(px==this.ostX[10])
					this.sx=false;
		//lago
		if(px>this.ostX[15] && px<this.ostX[16])
			if(py==this.ostY[16])
				this.giu=false;
		if(py>this.ostY[16] && py<this.ostY[15])
			if(px==this.ostX[15])
				this.dx=false;
			else
				if(px==this.ostX[16])
					this.sx=false;
		//staccionata sx
		if(px>this.ostX[11] && px<this.ostX[12])
			if(py==this.ostY[12])
				this.giu=false;
			else
				if(py==this.ostY[11])
					this.su=false;
		if(py>this.ostY[12] && py<this.ostY[11])
			if(px==this.ostX[11])
				this.dx=false;
			else
				if(px==this.ostX[12])
					this.sx=false;
		//staccionata a dx
		if(px>this.ostX[13] && px<this.ostX[14])
			if(py==this.ostY[14])
				this.giu=false;
			else
				if(py==this.ostY[13])
					this.su=false;
		if(py>this.ostY[14] && py<this.ostY[13])
			if(px==this.ostX[13])
				this.dx=false;
			else
				if(px==this.ostX[14])
					this.sx=false;
		//staccionata basso 
		if(px>this.ostX[17] && px<this.ostX[18])
			if(py==this.ostY[18])
				this.giu=false;
			else
				if(py==this.ostY[17])
					this.su=false;
		if(py>this.ostY[18] && py<this.ostY[17])
			if(px==this.ostX[17])
				this.dx=false;
			else
				if(px==this.ostX[18])
					this.sx=false;
		//posta a sx
		if(px>this.ostX[21] && px<=this.ostX[22])
			if(py==this.ostY[22])
				this.giu=false;
			else
				if(py==this.ostY[21])
					this.su=false;
		if(py>this.ostY[22] && py<this.ostY[21])
			if(px==this.ostX[21])
				this.dx=false;
			else
				if(px==this.ostX[22])
					this.sx=false;
		//posta dx
		if(px>this.ostX[23] && px<=this.ostX[24])
			if(py==this.ostY[24])
				this.giu=false;
			else
				if(py==this.ostY[23])
					this.su=false;
		if(py>this.ostY[24] && py<this.ostY[23])
			if(px==this.ostX[23])
				this.dx=false;
			else
				if(px==this.ostX[24])
					this.sx=false;
		//controllo cambiamento mappe
		if(px>=this.ostX[0] && px<=this.ostX[3])
			if(py<=1)
				this.cambiaSu=true;
		if(py>=this.ostY[1] && py<=this.ostY[2])
			if(px<=1)
				this.cambiaSx=true;
		if(px>=322 && px<=394)
			if(py>=481)
				this.cambiaGiu=true;
		if(px>this.ostX[25] && px<this.ostX[26])
			if(py==this.ostY[7])
				this.cambiaCasa=true;
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
		if(dir=="dx")
			return 7;
		if(dir=="giu")
			return 361;
		if(dir=="casa")
			return 193;
		if(dir=="su")
			return 358;
		
	}
	this.partenzaY=function(dir){
		if(dir=="dx")
			return 223;
		if(dir=="giu")
			return 10;
		if(dir=="casa")
			return 184;
		if(dir=="su")
			return 475;
		
	}
	this.definisciOstacoli();
}