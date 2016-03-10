window.addEventListener('load', function() { //ko je celo okno nalozeno,  se izvede ta funkcija
	//stran nalozena  //priporocljivo je, da pocakas, da se stran nalozi, preden zacnes izvajat kodo
	
	
	//Izvedi prijavo
	//za dogodke rabmo 3 stvari (1:na katerem objektu se zgodi - gumb, 2: katero dejanje - klik in 3: funkcija, ki se izvede )
	var izvediPrijavo = function() { //najprej definiras funkcijo, potem uporabis
		var uporabnik = document.querySelector("#uporabnisko_ime") //zelimo vrednost, ki jo je uporabnik vnesel (to je ta .valuem to lahko klicemon na npr spletnih obrazcih)
								.value;
		document.querySelector("#uporabnik").innerHTML = uporabnik; //element na vrhu stvaru ==> Pozdravljeni, <tukej pride uporabnik>!
		document.querySelector(".pokrivalo").style.visibility = "hidden"; //s piko isces po classih, dobis samo prvega
	}
	
	//za dogodke rabmo 3 stvari (1:na katerem objektu se zgodi - gumb, 2: katero dejanje - klik in 3: )
	document.querySelector("#prijavniGumb") // z # po celi datoteki poicemo prijavniGumb (po id-ju)
			.addEventListener('click', izvediPrijavo);//ko se zgodi "click", izvedemo funkcijo //vseeno kateri narekovaji v JavaScriptu
			
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		var i;
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});