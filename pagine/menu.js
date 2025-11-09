/* Oggetto menu 

	proprietà:
		open => serve per salvare la visione o meno del menu
		divMain => puntatore al div del menu
		idMappa => puntatore alla mappa di gioco
		divEvidenzia => muove div per evidenziare scelta
		y => valore y della divEvidenzia
	metodi:
		crea => crea il div del menu, non visibile
		display=> modifica la proprietà display del div menu, in relazione alla proprietà dell'oggetto open.
		restituisciScelta => restituisce l'eventale scelta dell utente
		gestisci => prevede la gestione del menu 
		scorri=> fa scorrere il div sopra
*/

function Menu(po,pIdMappa){
	this.open=po;			//inizializza il valore della proprietà open
	this.idMappa=pIdMappa;
	this.scelte=["Pokemon","Pokedex","Zaino","Allenatore","Opzioni","Salva"];
	this.crea=function(){
		//creo div contenitore
		this.divMain=document.createElement("DIV");
		this.divMain.style.width="250px";
		this.divMain.style.height="528px";
		this.divMain.position="absolute";
		this.divMain.style.float="right";
		this.divMain.style.display="none";
		this.divMain.style.backgroundColor="white";
		this.idMappa.appendChild(this.divMain);
		this.y=0;
		//creo i sei sotto div per gestire scelte
		for(this.i=0;this.i<6;this.i++){
			this.sottoDiv=document.createElement("DIV");
			this.sottoDiv.style.width="250px";
			this.sottoDiv.style.height="88px";
			this.sottoDiv.style.padding="5px";
			this.sottoDiv.innerHTML=this.scelte[this.i];
			this.sottoDiv.style.textAlign="center";
			this.sottoDiv.style.fontSize="15pt";
			this.sottoDiv.style.position="absolute";
			this.sottoDiv.style.top=this.y+"px";
			this.y+=88;
			this.divMain.appendChild(this.sottoDiv);
		}
		//div che evidenzia la posizione in cui sono
		this.divEvidenzia=document.createElement("DIV");
		this.divEvidenzia.style.width="246px";
		this.divEvidenzia.style.height="84px";
		this.divEvidenzia.style.border="2px solid lightblue";
		this.y=0;
		this.divEvidenzia.style.top=this.y+"px";
		this.divEvidenzia.style.position="absolute";
		this.divMain.appendChild(this.divEvidenzia);
	}
	
	this.gestisci=function (tasto){
		switch(tasto){
			//tasto X apro o chiudo a seconda valore open
			case 88:
				this.display();
				break;
				if(this.open)
					return "aperto";
				return "chiuso";
			//tasto su, per spostare su
			case 38:
				if(!this.open)
					return "chiuso";
				if(this.y!=0)
					this.y-=88;
				this.scorri();
				break;
				return "su";
			//tasto giu, per spostare su
			case 40:
				if(!this.open)
					return "chiuso";
				if(this.y!=440)
					this.y+=88;
				this.scorri();
				return "giu";
			//tasto sx, per spostare su
			case 37:
				if(this.open)
					return "stop";
				return "chiuso";
				break;
			//tasto dx, per spostare su
			case 39:
				if(this.open)
					return "stop";
				return "chiuso";
				break;
			//tasto enter, per selezionare 
			case 13:
				return this.restituisciScelta();
				break;
			default:
				return "chiuso";
				break;
		}
	}
	//sposto y del div EVidenzia, che quello che mette in mostra la posizione in cui siamo
	this.scorri= function(){
		this.divEvidenzia.style.top=this.y+"px";
	}
	//restituisce la scelta fatta 
	this.restituisciScelta=function (){
		this.indice=(this.y)/88;
		console.log(this.scelte[this.indice]);
		return this.scelte[this.indice];
	}
	this.sceltePossibili=function (){
		return this.scelte;
	}
	//per sapere se scelta è fra quelle per aprire nuova pagina 
	this.apri=function(s){
		for(var z=0;z<6;z++){
			if(this.scelte[z]==s)
				return true;
		}
		return false;
	}
	this.display=function(){
		if(this.open){
			this.divMain.style.display="none";
			this.open=false;
		}
		else{
			this.divMain.style.display="block";
			this.open=true;
		}
	}
}