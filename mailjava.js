
let email = prompt("inserisci l'email");
let lista =["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"];
let controllo=0;
let richiesta=0;

for(i=0; i<=lista.length;i++)
{
 if(email == lista[i])
 {
    alert(" puoi accedere");
    controllo++;
    break;   
 }

}


if(controllo==0)

{
    alert("non puoi accedere ");
    richiesta = prompt("vuoi inserire questa email nella lista ? premi 's' per inserire 'n'");
    if (richiesta=="s")
    {
        lista.push(email);
    }
    else
    {
        alert("ok");
    }
console.log(lista)
}