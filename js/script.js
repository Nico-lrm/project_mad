/* Accent en code ASCII */
var eAccentGrave = String.fromCharCode(232);
var eAccentAigu = String.fromCharCode(233);

/* Vérification du champs "Objet" */
$("#subject").focusout(function() {
    var subject = $(this).val();
    if (subject.length >= 4) {
        if (subject.match(RegExp(/^[A-Za-z0-9 ]+$/))) {
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
        if (body.match(RegExp(/^[A-Za-z0-9.',!?()% ]+$/))) {
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
$("#submit").click(function(e) {
    var subject = $("#subject").val(); 
    var body = $("#body").val().split(" ").join("%20"); 
    if (body.length < 4 || subject.length < 4) {
        alert("L'un des "+ eAccentAigu +"l"+ eAccentAigu +"ments est trop court.")
        e.preventDefault();
        return false;
    } else if (!body.match(RegExp(/^[A-Za-z0-9.',!?()% ]+$/)) || !subject.match(RegExp(/^[A-Za-z0-9 ]+$/))) {
        alert("L'un des "+ eAccentAigu +"l"+ eAccentAigu +"ments n'est pas "+ eAccentAigu +"crit correctement.")
        e.preventDefault();
        return false;
    }
    $("#form").serialize().submit;
}) 