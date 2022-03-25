 
 
  let num1=Math.round(Math.random()*5+1);
  let num2=Math.round(Math.random()*5+1);
    


	console.log("Hai ottenuto " + num1 );
    let giocatore=num1;
    let cpu=num2;
    console.log("======================================")
    console.log("CPU ha ottenuto " + num2);
	
    console.log("======================================")

	if(giocatore>cpu)
           console.log("HAI VINTO");
	else if(giocatore==cpu)
    console.log("E UN PAREGGIO");
    else
	   console.log("HAI PERSO");

 
 
  

 /*let num1=Math.round(Math.random()*5+1);
   let num2=Math.round(Math.random()*5+1);
    let num3=Math.round(Math.random()*5+1);
	let num4=Math.round(Math.random()*5+1);


	console.log("Hai ottenuto " + num1 + ", " + num2);
	let giocatore=num1+num2;
	console.log("hai totalizzato " + giocatore + " punti");
	
   let cpu=num3+num4;
    console.log("======================================")
    console.log("CPU ha ottenuto " + num3 + ", " + num4);
	console.log("CPU ha totalizzato " + cpu + " punti");
    console.log("======================================")
	if(giocatore>cpu)
           console.log("HAI VINTO");
	else
	   console.log("HAI PERSO");

       */