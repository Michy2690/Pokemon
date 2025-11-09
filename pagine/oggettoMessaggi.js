/*
	oggetto messaggi
	
	proprietà:
	mess array dei messaggi gestiti
	
	metodi:
	creaMessaggi() da il valore ai messaggi da gestire.
	restituisciMessaggio(scelta) restitusce messaggio corrispondente al parametro
*/
function Messaggi(){
	this.mess=new Object();
	this.creaMessaggi=function(){
		this.mess={
			SafariCheckIn: "Spiacente, non puoi proseguire perché il safari non è ancora disponibile.",
			cittaCedolan: "Fermo! Non puoi proseguire, non hai ancora abbastanza esperienza",
			pianoSotto: "Figliolo non puoi entrare. Non hai ancora fatto la spesa",
			salva: "Salvataggio in corso...",
			salvataggioCompletato: " Salvataggio Completato"
		};
	}
	this.restituisciMessaggio=function(scelta){
		return this.mess[scelta];
	}
	this.creaMessaggi();
}