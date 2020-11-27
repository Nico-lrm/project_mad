/* Accent en code ASCII et regex */
var eAccentGrave = String.fromCharCode(232);
var eAccentAigu = String.fromCharCode(233);
var cCedille = String.fromCharCode(231);
var chevronGauche = String.fromCharCode(171);
var chevronDroite = String.fromCharCode(187);
var aAccent = String.fromCharCode(224);
var oCirconflexe = String.fromCharCode(244);
var uCriconflexe = String.fromCharCode(251);
var iTrema = String.fromCharCode(239)
var carre = String.fromCharCode(178);
var regexEmail = /^[A-Za-z0-9._-]+@[A-Za-z._-]+\.[a-z]{2,4}$/;
var regex = /^[A-Za-z0-9.',!?()%\- \n]+$/;


/* Vérification du champs "Objet" */
$("#subject").focusout(function() {
    var subject = $(this).val();
    if (subject.length >= 4) {
        if (subject.match(RegExp(regex))) {
            $(this).css("border", "1px solid #70ca7b");
            $("#errorSubject").text("");
        } else {
            $(this).css("border", "1px solid #da4c4c");
            $("#errorSubject").css("color", "#da4c4c");
            $("#errorSubject").text("Il ne faut pas de caract"+ eAccentGrave +"res sp"+ eAccentAigu +"ciaux !");
        }
    } else if (subject.length == 0) {
        $(this).css("border", "1px solid #bbb");
        $("#errorSubject").css("color", "#da4c4c");
        $("#errorSubject").text("");
    } else {
        $(this).css("border", "1px solid #da4c4c");
        $("#errorSubject").css("color", "#da4c4c");
        $("#errorSubject").text("Le sujet doit faire au moins 4 caract"+ eAccentGrave +"res !");
    }
})

/* Vérification du champs "Message" */
$("#body").focusout(function() {
    var body = $(this).val();
    if (body.length >= 4) {
        if (body.match(RegExp(regex))) {
            $(this).css("border", "1px solid #70ca7b");
            $("#errorBody").text("");
        } else {
            $(this).css("border", "1px solid #da4c4c");
            $("#errorBody").css("color", "#da4c4c");
            $("#errorBody").text("Il ne faut pas de caract"+ eAccentGrave +"res sp"+ eAccentAigu +"ciaux !");
        }
    } else if (body.length == 0) {
        $(this).css("border", "1px solid #bbb");
        $("#errorBody").css("color", "#da4c4c");
        $("#errorBody").text("");
    } else {
        $(this).css("border", "1px solid #da4c4c");
        $("#errorBody").css("color", "#da4c4c");
        $("#errorBody").text("Le message doit faire au moins 4 caract"+ eAccentGrave +"res !");
    }
})

/* Vérification du formulaire à l'envoi */
$("#form").submit(function(e) {
    var subject = $("#subject").val(); 
    var body = $("#body").val(); 
    if (body.length < 4 || subject.length < 4) {
        alert("L'un des "+ eAccentAigu +"l"+ eAccentAigu +"ments est trop court.")
        e.preventDefault();
        return false;
    } else if (!body.match(RegExp(regex)) || !subject.match(RegExp(regex))) {
        alert("L'un des "+ eAccentAigu +"l"+ eAccentAigu +"ments n'est pas "+ eAccentAigu +"crit correctement.")
        e.preventDefault();
        return false;
    }
    var url = "mailto:lormiernicolas60@outlook.fr?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
    document.location = url;
})


/* Changement des données en fonctions du lieu choisis ! */
function getFirstCityData() {
    /* Nom de la ville */
    $("#title_part").text("Beauvais");
    /* URL de la page Wikipédia */
    $("#link_part").text("https://fr.wikipedia.org/wiki/Beauvais")
    $("#link_part").attr("href", "https://fr.wikipedia.org/wiki/Beauvais");
    /* Première partie */
    $("#first_part").text("Beauvais est une commune fran"+ cCedille +"aise, pr"+eAccentAigu+"f"+eAccentAigu+"cture du d"+eAccentAigu+"partement de l'Oise, en r"+eAccentAigu+"gion Picardie. Avec ses 56 254 habitants (dernier recensement en 2017), Beauvais est la principale ville du d"+eAccentAigu+"partement et est la huiti"+eAccentGrave+"me de la r"+eAccentAigu+"gion. Elle se trouve au nord du Bassin parisien, sur les rives du Th"+eAccentAigu+"rain, affluent de l'Oise. Ses habitants sont appel"+eAccentAigu+"s les Beauvaisiens. Beauvais est c"+eAccentAigu+"l"+eAccentGrave+"bre pour sa Cath"+eAccentAigu+"drale Saint-Pierre de Beauvais, d'architecture gothique, "+aAccent+" la nef la plus haute de France et choeur gothique le plus haut au monde, toujours inachev"+eAccentAigu+"e, mais typique de l'apog"+eAccentAigu+"e de l'art gothique en France. La plupart des oeuvres de la cath"+eAccentAigu+"drale datent du XVIIe siecle.");
    /* Deuxième partie */
    $("#second_part").css("background-image", "url(../../img/all/beauvais.jpeg");
    /* Troisième partie */
    $("#third_part").css("background-image", "url(../../img/all/plan_deau_canada.jpg")
    /* Quatrième partie */ 
    $("#fourth_part").text("Le plan d'eau du Canada est un parc compos"+eAccentAigu+" de 45 hectares et de deux lacs artificiels au nord-ouest de Beauvais. Ce domaine est "+eAccentAigu+"quip"+eAccentAigu+" d'une base de loisirs nautique, d'une plage, d'un circuit de 3 km, avec piste cyclable et pi"+eAccentAigu+"tonni"+eAccentGrave+"re. Selon Henri Fromage, "+chevronGauche+" Canada vient de 'can en dent' un champ en forme de dent, comme l'attestent les anciens cadastres. Au si"+eAccentGrave+"cle dernier, c'"+eAccentAigu+"tait un champ de courses de chevaux et de l"+eAccentAigu+"vriers "+chevronDroite+" .")
}
function getSecondCityData() {
    /* Nom de la ville */
    $("#title_part").text("Amiens");
    /* URL de la page Wikipédia */
    $("#link_part").text("https://fr.wikipedia.org/wiki/Amiens")
    $("#link_part").attr("href", "https://fr.wikipedia.org/wiki/Amiens");
    /* Première partie */
    $("#first_part").text("Amiens est une commune fran"+cCedille+"aise, pr"+eAccentAigu+"f"+eAccentAigu+"cture du d"+eAccentAigu+"partement de la somme en r"+eAccentAigu+"gion Hauts-De-France. Capitale historique de la Picardie, elle est, avec ses 134 057 habitants appeles Ami"+eAccentAigu+"nois au dernier recensement de 2017, la deuxi"+eAccentGrave+"me ville de la r"+eAccentAigu+"gion apres Lille et la vingt-septi"+eAccentGrave+"me de France. Situ"+eAccentAigu+"e a l'int"+eAccentAigu+"rieur du triangle Paris - Londres - Bruxelles, elle est au coeur du p"+oCirconflexe+"le m"+eAccentAigu+"tropolitain du Grand Ami"+eAccentAigu+"nois regroupant pr"+ eAccentGrave +"s de 400 000 habitants. Premi"+eAccentGrave+"re ville de France en nombre d'inscriptions au patrimoine de l'UNESCO, Amiens est c"+eAccentAigu+"l"+eAccentGrave+"bre pour sa Cath"+eAccentAigu+"drale Notre-Dame, joyau de l'art gothique et l'une des plus vastes cath"+eAccentAigu+"drales du monde.");
    /* Deuxième partie */
    $("#second_part").css("background-image", "url(../../img/all/amiens.jpg)");
    /* Troisième partie */
    $("#third_part").css("background-image", "url(../../img/all/cathedrale_amiens.jpg)")
    /* Quatrième partie */
    $("#fourth_part").text("Surnomm"+eAccentAigu+"e la "+chevronGauche+" petite Venise du Nord "+chevronDroite+" en raison des nombreux canaux qui la traversent et des hortillonnages (ensemble de jardins flottants couvrant 300 hectares), Amiens offre un riche partimoine et des quartiers pittoresques, t"+eAccentAigu+"moins d'une bimill"+eAccentAigu+"naire. Depuis 1992, le label Ville d'art et d'histoire r"+eAccentAigu+"compense la protection et la mise en valeur de ce patrimoine. L'image contemporaine de la ville est fortement li"+eAccentAigu+"e a trois activit"+eAccentAigu+"s qui rayonnent au-del"+aAccent+" de ses fronti"+eAccentGrave+"res : son statut de capital historique de la Picardie, l'importance de son universit"+eAccentAigu+" et la vitalit"+eAccentAigu+" de sa culturelle port"+eAccentAigu+"e par des infrastructures et des manifestations d'envergure nationale.")
}   
function getVillageData() {
    /* Nom de la ville */
    $("#title_part").text("Lachapelle-aux-pots");
    /* URL de la page Wikipédia */
    $("#link_part").text("https://fr.wikipedia.org/wiki/Lachapelle-aux-Pots")
    $("#link_part").attr("href", "https://fr.wikipedia.org/wiki/Lachapelle-aux-Pots");
    /* Première partie */
    $("#first_part").text("Lachapelle-aux-Pots est une commune fran"+cCedille+"aise situ"+eAccentAigu+"e dans le d"+eAccentAigu+"partement de l'Oise, en r"+eAccentAigu+"gion, Hauts-de-France. Ses habitants sont appel"+eAccentAigu+"s les Capellois et les Capelloises. Sur une superficie de 9.96km"+carre+", la commune de Lachapelle-aux-pots est habit"+eAccentAigu+"e par 1620 habitants dans le dernier recensement de 2017. L'altitude moyenne de la commune est de 110m. La commune est proche du Parc Naturel R"+eAccentAigu+"gional du Vexin Fran"+cCedille+"ais. Elle est travers"+eAccentAigu+"e par l'avenue verte, itin"+eAccentAigu+"raire cyclable qui rejoint Paris "+aAccent+" Londres.")
    /* Deuxième partie */
    $("#second_part").css("background-image", "url(../../img/all/lcap.jpg)");
    /* Troisième partie */
    $("#third_part").css("background-image", "url(../../img/all/lcap_old.jpeg")
    /* Quatrième partie */
    $("#fourth_part").text("Construits en 1872 et 1881 par le potier Magloire Vie, les deux fours (de la crapaudi"+eAccentGrave+"re) sont les derniers t"+eAccentAigu+"moins en Beauvaisis de ce type d'installation, et sont repr"+eAccentAigu+"sentatifs de fours "+eAccentAigu+"difi"+eAccentAigu+"s dans la r"+eAccentAigu+"gion pendant la seconde moiti"+eAccentAigu+" du 19e si"+eAccentGrave+"cle. Longitudinaux et axe de cuisson oblique, ils sont con"+cCedille+"us sur le mod"+eAccentGrave+"le des fours m"+eAccentAigu+"di"+eAccentAigu+"vaux et n'en diff"+eAccentGrave+"rent que par leur taille plus importante (17 m"+eAccentGrave+"tres), et par la pr"+eAccentAigu+"sence des petites orifices dans la vo"+uCriconflexe+"te du foyer, permettant de saler les gr"+eAccentGrave+"s en fin de cuisson (proc"+eAccentAigu+"d"+eAccentAigu+" allemand de Jules Ziegler). Cette production s'"+eAccentAigu+"teignit vers 1900-1914, concurrenc"+eAccentAigu+"e par la fa"+iTrema+"ence pour la vaisselle et le verre pour les produits chimiques.")
}
/* Scroll Top */
$("#scroll-top").click(function() {
    $("html, body").scrollTop(0);
})