/* oggetto personaggio-> gestione movimento nella pagina

	proprietà:
		valore	definisce quale personaggio hai scelto
		movSx	boolean che definisce il movimento a dx e sx
		movAlto	booelan che definisce il movimento alto o basso
		pokemon definisce il pokemon iniziale che ha scelto
		posX	definisce il posizionamento orizzontale del personaggio
		posY	definisce il posizionamento verticale del personaggio
		img 	definisce l'immagine del personaggio
		div		definisce il div in cui è contenuta l'immagine
		largh	definice la larghezza della div e dell'immagine
		alt 	definisce l'altezza della div e dell'immagine
		mainDiv
		vettOstacoliX
		vettOstacoliY
	metodi:
		muovi()					muove personaggio verso l'alto o verso il basso e verso sx o dx
		posiziona()				modifica il top e left dell immagine
		changeImg()				cambia l'immagine senza modificare le dimensioni
		restituisciX()
		restituisciY()
*/
function Personaggio(sceltaPersonaggio,sceltaPokemon,x,y,div){
	this.valore=sceltaPersonaggio;
	this.pokemon=sceltaPokemon;
	this.posX=x;
	this.posY=y;
	this.largh=32;						//preso dall immagine
	this.alt=45;						//preso dall immagine
	this.mainDiv=div;					//proprieta che tiene in memoria il div a cui appenderlo.
	this.muovi=function(tasto,sx,dx,su,giu){
		this.changeImg(tasto);			//cambia l'immagine senza muoverla
		//scorre immagine di background a seconda tasto schiacciato, e muove div
		switch(tasto){
			case 38:
					if(su){
						this.div.style.backgroundPosition="-32px -147px";
						this.posY-=3;
					}
				break;
			case 40:
					if(giu){
						this.div.style.backgroundPosition="-32px -5px";
						this.posY+=3;
					}
				break;
			case 37:
					if(sx){
						this.div.style.backgroundPosition="-32px -50px";
						this.posX-=3;
					}
				break;
			case 39:
					if(dx){
						this.div.style.backgroundPosition="-32px -97px";
						this.posX+=3;
					}
				break;
		}
		this.posiziona();
	}
	this.posiziona=function(){
		this.div.style.top=this.posY+"px";
		this.div.style.left=this.posX+"px";
	}
	this.changeImg=function (t){
		switch(t){
			case 37:
				this.div.style.backgroundPosition="0px -47px";
				break;
			case 38:
				this.div.style.backgroundPosition="0px -145px";
				break;
			case 39:
				this.div.style.backgroundPosition="0px -95px";
				break;
			case 40:
				this.div.style.backgroundPosition="0px 0px";
				break;
		}
	}
	this.restituisciX=function(){
		return this.posX;
	}
	this.restituisciY=function(){
		return this.posY;
	}
	//lo posiziona a specifici valori della x e y
	this.specificaPosizione=function(px1, py1){
		this.posX=px1;
		this.posY=py1;
		this.posiziona();
	}
	//crea div personaggio
	this.div=document.createElement("DIV");
	this.div.style.position="absolute";
	this.div.style.width=this.largh+"px";
	this.div.style.height=this.alt+"px";
	this.div.id="\"personaggio\"";
	if(this.valore=="Ragazzo")
		this.div.style.backgroundImage="url('../immagini/ragazzo.png')";
	else
		this.div.style.backgroundImage="url('../immagini/ragazza.png')";
	this.div.style.backgroundPosition="0px 0px";
	this.mainDiv.appendChild(this.div);
	this.posiziona();
	
	
}