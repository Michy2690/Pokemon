/*
	Zone d'erba
	
	proprietà:
	erbX array delle x delle zone d'erba gestite
	erbY array delle y delle zone d'erba getsite
	zona valore della zona in cui ci troviamo, e che viene restituito
	
	metodi:
	definisciErba da valore erbX e erbY
	controlla fa confronto con x e y del personaggio e retsituisce la zona
	restituisci ritorna la zona in cui ci troviamo
	
*/

function ZoneErba(){
	this.erbX=new Array();
	this.erbY=new Array();
	this.zona=0;
	this.definisciErba=function(){
		//zona 1= mappa Route 8
		this.erbX[0]=549;	this.erbY[0]=6;
		this.erbX[1]=591;	this.erbY[1]=61;
		//zona 2= mappa Safari
		this.erbX[2]=195;	this.erbY[2]=259;
		this.erbX[3]=414;	this.erbY[3]=301;
		//zona 3= mappa safari zona alta
		this.erbX[4]=195;   this.erbY[4]=208;
		this.erbX[5]=237;	this.erbY[5]=259;
		//zona 4=mappa Route 1 parte dx basso
		this.erbX[6]=547;	this.erbY[6]=241;
		this.erbX[7]=592;	this.erbY[7]=403;
		//zona 5=mappa Route 1 parte dx mancante
		this.erbX[8]=415;	this.erbY[8]=355;
		this.erbX[9]=547;	this.erbY[9]=403;
		//zona 6=mappa Route 1 parte dx alta
		this.erbX[10]=487;	this.erbY[10]=67;
		this.erbX[11]=592;	this.erbY[11]=112;
		//zona 7=mappa Route 1 parte dx alta mancante
		this.erbX[12]=547;	this.erbY[12]=112;
		this.erbX[13]=592;	this.erbY[13]=175;
		//zona 8=mappa Route 1 parte centrale 
		this.erbX[14]=352;	this.erbY[14]=67;
		this.erbX[15]=403;	this.erbY[15]=244;
		//zona 9=mappa Route 1 parte centrale 
		this.erbX[16]=280;	this.erbY[16]=190;
		this.erbX[17]=322;	this.erbY[17]=223;
		//zona 10=mappa Route 1 parte centrale 
		this.erbX[18]=280;	this.erbY[18]=175;
		this.erbX[19]=403;	this.erbY[19]=175;
		//zona 11=mappa Route 1 parte centrale 
		this.erbX[20]=391;	this.erbY[20]=175;
		this.erbX[21]=403;	this.erbY[21]=244;
							
		
	}
	this.controlla=function(px7,py7){
		
		//zona 1
		if(px7>=this.erbX[0] && px7<=this.erbX[1]){
			if(py7>=this.erbY[0] && py7<=this.erbY[1])
				this.zona=1;
		}
		//zona 2
		if(px7>=this.erbX[2] && px7<=this.erbX[3]){
			if(py7>=this.erbY[2] && py7<=this.erbY[3])
				this.zona=2;
		}
		//zona 3
		if(px7>=this.erbX[4] && px7<=this.erbX[5]){
			if(py7>=this.erbY[4] && py7<=this.erbY[5])
				this.zona=3;
		}
		//zona4
		if(px7>=this.erbX[6] && px7<=this.erbX[7]){
			if(py7>=this.erbY[6] && py7<=this.erbY[7])
				this.zona=4;
		}
		//zona 5
		if(px7>=this.erbX[8] && px7<=this.erbX[9]){
			if(py7>=this.erbY[8] && py7<=this.erbY[9])
				this.zona=5;
		}
		//zona 6
		if(px7>=this.erbX[10] && px7<=this.erbX[11]){
			if(py7>=this.erbY[10] && py7<=this.erbY[11])
				this.zona=6;
		}
		//zona 7
		if(px7>=this.erbX[12] && px7<=this.erbX[13]){
			if(py7>=this.erbY[12] && py7<=this.erbY[13])
				this.zona=7;
		}
		//zona 8
		if(px7>=this.erbX[14] && px7<=this.erbX[15]){
			if(py7>=this.erbY[14] && py7<=this.erbY[15])
				this.zona=8;
		}
		//zona 9
		if(px7>=this.erbX[16] && px7<=this.erbX[17]){
			if(py7>=this.erbY[16] && py7<=this.erbY[17])
				this.zona=9;
		}
		//zona 10
		if(px7>=this.erbX[18] && px7<=this.erbX[19]){
			if(py7>=this.erbY[18] && py7<=this.erbY[19])
				this.zona=10;
		}
		//zona 11
		if(px7>=this.erbX[20] && px7<=this.erbX[21]){
			if(py7>=this.erbY[20] && py7<=this.erbY[21])
				this.zona=11;
		}
		return this.restituisci();
	}
	this.restituisci=function(){
		return this.zona;
	}
	
	this.definisciErba();
}