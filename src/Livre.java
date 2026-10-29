public class Livre {
    private String titre;
    private String auteur;
    private double prix;
    private int id;
    static final int compteurLivres = 0;
    public Livre(String titre,String auteur,double prix) {
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        compteurLivres++;
        this.id = compteurLivres;


    }
    public double getPrix() {
        return prix;
    }
    public void setPrix(double prix) {
        while (prix > 0) {
            this.prix = prix;
        }
    }
    public void afficher(){
        System.out.println(prix);
        System.out.println(titre);
        System.out.println(auteur);
        System.out.println(id);

    }

}
