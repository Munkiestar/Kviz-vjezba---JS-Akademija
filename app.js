// Kviz 23.02.2019.

// upit i odabir marke patika
var izborPatika = prompt('Dobrodosli u Nas Online ducan. Izaberite patike (Nike, Lacoste, Vans)');

// Izbor postoji samo za Nike i Vans
if(izborPatika.toLowerCase() === 'nike' || izborPatika.toLowerCase() === 'vans'){
	alert( 'Izabrali ste: ' + izborPatika);
	} 
	// Izbor za Lacoste (WRONG!) i prompt za ponovni odabir
if(izborPatika.toLowerCase() === 'lacoste'){
	alert('Nazalost trenutno nemamo na lageru. Pokusajte ponovo!');

	var ponovnoIzborPatika = prompt('Odaberite Nike ili Vans?');
	if(ponovnoIzborPatika.toLowerCase() === 'nike'){
		alert('Odabrali ste Nike.');
	} else{
		alert('Odabrali ste Vans.')
		}
}


// upit i unos broja patika 
var izborBroja = prompt('Molim izaberite velicinu: 42, 43, 44.');

// Postoji samo velicina 42 i 43
if(parseInt(izborBroja) === 42 || parseInt(izborBroja) === 43){
	alert('Izabrali ste velicinu: ' + izborBroja);
}
// izbor za broj 44 (WRONG!) i novi prompt za 42 i 43.
if(parseInt(izborBroja) === 44){
	alert('Nazalost vise nemamo velicinu 44.');

	var ponovnoIzborBroja = prompt('Izaberite velicinu 42 ili 43.');
	if(parseInt(izborBroja) === 42){
		alert('Odabrali ste velicinu: ' + ponovnoIzborBroja);
	} else{
		alert('Odabrali ste velicinu 43.')
	}
}


// upit i izbor boje
var izborBoje = prompt('Izaberite boju: crna, bijela ili rozna.');

// Postoje se crna i bijela boja
if(izborBoje.toLowerCase() === 'crna' || izborBoje.toLowerCase() === 'bijela'){
	alert('Odabrali ste ' + izborBoje);
}
// izbor za Roza boju (WRONG!) i novi prompt za unos boje
if(izborBoje.toLowerCase() === 'rozna'){
	alert('Nazalost vise nema Rozne boje!');

	var ponovnoIzborBoje = prompt('Molim izaberite crnu ili bijelu boju.');
	alert('Izabrali ste ' + ponovnoIzborBoje + 'boju! Hvala');
}


/*
	Kritike su dobrodosle!
	Podijelite slobodno svoje rijesenje vjezbe.


//================================//
	pitanje:
	kako napraviti logiku sa npr:

	var nike = true;
	var vans = true;
	var lacoste = false;

	pa da se korisnicki unos/izbor usporeduje sa true i false varijablama?
	isto sa velicinom i bojama..

//================================//	


*/