/*



*/
function OggettiUtili(nome, descrizione){
	this.nome=nome;
	this.descrizione=descrizione;
	this.getNome= function(){
		return this.nome;
	}
	this.getDescrizione=function(){
		return this.descrizione;
	}
}