/*
	oggetto Personaggio esterno
	
	proprietà:
	nome contiene il nome per richiamare immagine personaggio
	x sua posizione x nella mappa
	y sua posizione y nella mappa
	mostra boolean per farlo vedere oppure nodeName
	largh sua larghezza immagine
	alt sua altezza immagine
	mainDiv puntatore al div mappa della pagina
	
	metodi:
	mostra()	fa appire il div del personaggio
	nascondi()	nasconde div personaggio 
	scorri()	muove l'immagine del personaggio
	posiziona()	 rende effettive modifiche div pagina
	

*/
function PersonaggioEsterno(nome,px,py,div){
	this.nome=nome;
	this.x=px;
	this.y=py;
	this.mostra=false;
	this.largh=32;						//preso dall immagine
	this.alt=45;
	this.mainDiv=div;					//proprieta che tiene in memoria il div a cui appenderlo.
	this.mostra=function(){
		this.div.style.display="block";
	}
	this.nascondi=function(){
		this.div.style.display="none";
	}		
	this.scorri=function(px){
		while(this.x<px-32){
			this.x++;
			this.posiziona();
		}
		return;
	}
	this.posiziona=function(){
		this.div.style.top=this.y+"px";
		this.div.style.left=this.x+"px";
	}
	//creo div personaggio
	this.div=document.createElement("DIV");
	this.div.style.position="absolute";
	this.div.style.width=this.largh+"px";
	this.div.style.height=this.alt+"px";
	if(this.nome=="GiacomoCedolan")
		this.div.style.backgroundImage="url('../immagini/"+this.nome+".png')";
	else
		this.div.style.backgroundImage="url('../immagini/"+this.nome+".png')";
	this.div.style.backgroundPosition="0px -100px";
	this.div.style.display="none";
	this.mainDiv.appendChild(this.div);
	this.posiziona();
	
}