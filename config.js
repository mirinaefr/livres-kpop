// =====================================================================
// CONFIGURATION DE livres-kpop.com : c'est le seul fichier à modifier.
// Il sert à toutes les pages du site.
// - tagAmazon : ton identifiant Partenaires Amazon (il finit souvent par -21).
// - Pour chaque livre :
//     asin  : l'identifiant Amazon du livre (sert à fabriquer le lien) ;
//     lien  : facultatif, un lien complet (par exemple un lien court
//             SiteStripe) ; s'il est rempli, il remplace le lien fabriqué ;
//     image : facultatif, chemin d'une couverture depuis la racine du site,
//             par exemple "/img/xoxo.jpg". Uniquement une couverture dont
//             l'éditeur ou l'auteur t'a donné l'autorisation, ou une image
//             fournie par l'API d'Amazon Partenaires. Jamais une image copiée
//             depuis Amazon ou un autre site.
//     prix  : affiché seulement sur les fiches de Lina Yoon.
// =====================================================================
const CONFIG = {
  tagAmazon: "livreskpop-21",
  domaineAmazon: "https://www.amazon.fr",
  contact: "contact@livres-kpop.com",
  textes: {
    bouton: "Voir sur Amazon",
    boutonBroche: "Livre broché",
    boutonKindle: "Version Kindle",
    mentionCourte: "Lien affilié"
  },
  livres: {
    // Guide : Livres K-pop pour enfants dès 7 ans
    "kpop-academie": { asin: "B0GGP1XGZM", lien: "", image: "" },  // K-POP ACADÉMIE, tome 1 : Talent Hunter
    "kpop-magic-academy": { asin: "2036104231", lien: "", image: "" },  // K-Pop Magic Academy : Le rêve d'une apprentie
    "kpop-school": { asin: "2925421385", lien: "", image: "" },  // K-pop School : Des étoiles sur la scène
    "magic-kpop-girls": { asin: "2017391735", lien: "", image: "" },  // Magic K-Pop Girls, tome 1 : Premiers pas sur scène

    // Guide : Romans K-pop pour les 9–12 ans
    "kpop-a-seoul": { asin: "B0GWMMNR4Q", lien: "", image: "" },  // K-pop à Séoul : Oser rêver, même en secret
    "kpop-academy": { asin: "B0G8DMW432", lien: "", image: "" },  // K-Pop Academy, tome 1 : La scène des ombres
    "kpop-demon-hunters": { asin: "2266363042", lien: "", image: "" },  // KPop Demon Hunters : le roman officiel du film
    "kpop-fandom-noel": { asin: "2821220472", lien: "", image: "" },  // K-Pop Fandom : Noël sur un air de K-pop
    "kpop-power": { asin: "2017298018", lien: "", image: "" },  // K-Pop Power, tome 1 : D'une seule voix !
    "kpop-spirit-academy": { asin: "2017298050", lien: "", image: "" },  // K-Pop Spirit Academy, tome 1 : Bienvenue à l'académie !
    "mon-coeur-coree": { asin: "2700285689", lien: "", image: "" },  // Mon cœur Corée : K-pop
    "mon-grand-reve": { asin: "B0G6F3G3FK", lien: "", image: "" },  // Mon grand rêve K-POP, tome 1 : De la chambre à la scène
    "revolution-kpop": { asin: "2821211457", lien: "", image: "" },  // Révolution K-pop : Musique, amitié, trahison
    "sori": { asin: "B0GTHVGNK4", lien: "", image: "", prix: "14,99 €" },  // Sori, l'apprentie idol
    "star-de-kpop": { asin: "B0HGF3YY7M", lien: "", image: "", prix: "14,99 €" },  // Star de K-POP malgré moi

    // Guide : Romans K-pop pour ados : les coulisses
    "bright": { asin: "2092594745", lien: "", image: "" },  // Bright
    "comeback": { asin: "2492989046", lien: "", image: "" },  // Comeback : Retrouvailles dans les coulisses de la K-pop
    "i-will-shine": { asin: "2092594729", lien: "", image: "" },  // I Will Shine
    "kpop-confidentiel": { asin: "2755684968", lien: "", image: "" },  // K-Pop confidentiel
    "kpop-revolution": { asin: "B09QS5MD42", lien: "", image: "" },  // K-Pop Révolution

    // Guide : Romances K-pop pour ados (13 ans et plus)
    "amour-kpop-gateau": { asin: "282121720X", lien: "", image: "" },  // Amour, K-pop et gâteau de riz
    "asap": { asin: "2492989631", lien: "", image: "" },  // ASAP : Comme si le passé n'existait pas
    "hong-kong-song": { asin: "2492989224", lien: "", image: "" },  // Hong Kong Song : Nouveau départ pour une idol K-pop
    "kpop-love-story": { asin: "2821210957", lien: "", image: "" },  // K-pop Love Story, tome 1 : Sous les projecteurs
    "lettres-idol": { asin: "2924910463", lien: "", image: "" },  // Lettres à une IDOL : Une romance K-pop
    "xoxo": { asin: "2492989380", lien: "", image: "" },  // XOXO : Comme si demain n'existait pas

    // Fiches de Lina Yoon et « Pour aller plus loin »
    "sori-kindle": { asin: "B0GT5XFDS8", lien: "", image: "", prix: "3,99 €" },  // Sori, version Kindle
    "star-de-kpop-kindle": { asin: "", lien: "", image: "" },  // laisse asin vide tant que la version Kindle n'existe pas
    "mots-meles": { asin: "B0CHDMTJ8Z", lien: "", image: "" },  // Mots-mêlés en coréen

    // Page KPop Demon Hunters (le roman officiel et K-Pop Academy sont déjà dans le guide)
    "kdh-pour-les-fans": { asin: "2821220138", lien: "", image: "" },  // KPop Demon Hunters : Pour les fans ! ; ASIN déduit de l'ISBN, vérifie que le lien ouvre le bon livre
    "kdh-activites": { asin: "2821220022", lien: "", image: "" },  // KPop Demon Hunters : Le livre officiel d'activités ; ASIN déduit de l'ISBN, vérifie que le lien ouvre le bon livre
    "kdh-roman-graphique": { asin: "2821220014", lien: "", image: "" },  // KPop Demon Hunters : Le roman graphique du film
    "kdh-manhwa": { asin: "B0H6LG6RMB", lien: "", image: "" },  // KPop Demon Hunters : le manhwa officiel, tome 1
    "kdh-coloriage-albin": { asin: "2226514120", lien: "", image: "" },  // Livre de coloriage pour les fans de KPop Demon Hunters ; ASIN déduit de l'ISBN, vérifie que le lien ouvre le bon livre
    "kdh-activites-albin": { asin: "2226513612", lien: "", image: "" },  // Le livre d'activités non officiel KPop Demon Hunters ; ASIN déduit de l'ISBN, vérifie que le lien ouvre le bon livre
  }
};
