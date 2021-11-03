package fr.squallou.programme;

public class condition {

	public static void main(String[] args) {
		//Dans cette partie nous allons voir les conditions !
		//Pour un code plus propre il est mieux de mettre les variable ensemble en haut de page 
		// exemple : 
		//int money = 2000 ;
		//int age = 18;
		//int pricephone = 2500 ;
		//boolean hasphone = true ;
		
		//---------------------------------------------------------------------------------------------------------------------------------------
		
		//on crée la varibale money on lui affecte une valeur de 2000
		
		int money = 2000 ;
		// si money est strictement egal a la valeur affecter dans la variable 
		// alors renvoie moi le text de validation sinon renvoie moi le text d'erreur
		
		// Amuser vous a changer la valeur de money et observer le resultat
		// == signifie strictement egal
		if(money == 2000) {
			System.out.println("les deux valeurs dont bien identique");
		}else {
			System.out.println("les deux valeurs ne sont plus identique");
		}
		
		//---------------------------------------------------------------------------------------------------------------------------------------
		
		// ici on va verifier si la valeur est supérieur ou non a notre variable money
		// pour cela on utilise >= 
		// pour verifier si c'est inferieur utilisez <=
		
		if(money <= 5000) {
			System.out.println("oui c'est supérieur");
		}else {
			System.out.println("non c'est inférieur");
		}
		
		// il est aussi possible de faire plusieurs verification differente en une seul fois pour cela :
		// on utilise != (n'est pas egal) puis  && pour effectuer la verification de la seconde condition.
		// et s'écrit && en java , ou s'écris || en java 
		
		if(money != 5000 && money != 5500) {
			System.out.println("oui les valeurs verifier ne sont pas egal a la valeur définie de money");
		}else {
			System.out.println("non les valeurs sont egals");
		}
		
		//---------------------------------------------------------------------------------------------------------------------------------------
		
		// maintenant nous pouvons créé plusieurs conditions plus poussé que if et else , il existe entre les deux le "else if"
		//ici nous allons verifier la majorité d'une personne 
		
		int age = 18;
		
		//ici on demande si l'age de la personne est > (plus grand que ou egal a 18)
		if(age >= 18) {
			System.out.println("la personne est mineur");
		
		// si l'age est de 12 ou inferieur alors renvoie "..."	
		}else if (age <= 12){
			System.out.println("la personne est un mineur tres jeune");
			
		// si aucune des deux conditions préalable n'est remplie alors renvoie "..."	
		}else{
			System.out.println("la personne est majeur");
		}
		
		//---------------------------------------------------------------------------------------------------------------------------------------
		
		// Ici nous allons voir le switch (utiliser pour evité les répétition)
		//on demarre la boucle switch le cas (case)
		// utilision notre variable "age" de l'exemple ci dessus.
		// Cette methode permet déviter les if , else if et else l'on crée des cas !
		switch(age) {
		case 10:
			System.out.println("la personne a 10 ans ");
	    // on clos la boucle avec break 
		break;
		case 11:
		    System.out.println("la personne est plus agée que 10 ans");
		    break;
		//si les deux cas ne sont pas remplie alors on renvoie "par default"
		// pour cela on utilise default
		default : System.out.println("ceci est un message par default");
		}
		
		//---------------------------------------------------------------------------------------------------------------------------------------
		
		//Dans ce dernier exemple nous alons utiliser la variable "money" et la faire fonctionner avec un autre varibale phone 
		// une personne veut acheter un portable est nous allons verifier si elle a suffisament d'argent et si elle n'a pas deja un téléphone 
		// seulement si les deux conditions sont remplie la personne pourras acheter le iphone XX
		// boolean = vrai ou faux (true or false)
		int pricephone = 1999 ;
		boolean hasphone = false ;
		
		if (money >= pricephone && !hasphone) {
		    System.out.println("tu peut acheter le iphone XX !");
		}else {
			System.out.println("tu n'est pas assé riche ou tu as deja un iphone XV");
		}
	}

}
