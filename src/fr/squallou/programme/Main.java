package fr.squallou.programme;
//Class principal
public class Main {

	public static void main(String[] args) {
		// exemple de phrase de présentation variable + concaténer.
		
		//ci dessous on crée 4 variables de type string et une vaibale int pour le chiffre 33.
		
		String nom = "Massot";
		String prenom = "Etienne";
		String ans = "ans";
		String projet = "Je souhaite devenir développeur";
		int age = 33;
		String resultat = "resultat";
		
		//System.out.println sert a afficher les variable concaténer dans la console (comme un console.log).
		
		System.out.println(nom + " " + prenom +" " + age + ans +" "+ projet);
		
		//sans concatérer on peut aussi appeler chaque variables ligne par ligne 
        System.out.println("ou en ligne par ligne");
        System.out.println(nom);
        System.out.println(prenom);
        System.out.println(age + " " + ans);
        System.out.println("mon projet est");
        System.out.println(projet);
        
        // il existe aussi des fonctions de calcul exemple ci dessous 
        // utilision int pour les chiffres 
        //Calcul étant le nom de la variable l'on peut choisir addistion division etc...
        
        int note1 = 5;
        int note2 = 10;
        int note3 = 5;
        
        int calcul = (note1 + note2 + note3);
        
        System.out.println(resultat + " " + "=" + " " + calcul);
        
        System.out.println ("apres l'addition la division !");
        
        int division = (note1 + note2 + note3) / 3;
        
        System.out.println(resultat + " " + "=" + " " + division);
        
        int multiplication = (note1 + note2 + note3) * 3;
        
        
        System.out.println ("pour finir une maltiplication");
        
        System.out.println(resultat + " " + "=" + " " + multiplication);
        
        
	}

}
