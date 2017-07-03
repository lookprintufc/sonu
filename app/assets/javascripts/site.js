//= require maskedinput

//= require ajax-mail.js
//= require bootstrap.min.js
//= require main.js
//= require plugins.js

//= require vendor/jquery-1.12.0.min.js
//= require vendor/modernizr-2.8.3.min.js



jQuery(function($){
   $("#cpf").mask("999.999.999-99");
   $("#cep").mask("99999-999");
   $(".phone").mask("(99) 99999-9999)");
});


jQuery(document).ready(function() {

    if (jQuery.fn.cssOriginal != undefined)
        jQuery.fn.css = jQuery.fn.cssOriginal;

    jQuery('.fullwidthbanner').revolution({
        delay: 10000,
        startwidth: 890,
        startheight: 450,

        onHoverStop: "off", // Stop Banner Timet at Hover on Slide on/off

        thumbWidth: 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
        thumbHeight: 50,
        thumbAmount: 3,

        hideThumbs: 200,
        navigationType: "none", //bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
        navigationArrows: "verticalcentered", //nexttobullets, verticalcentered, none
        navigationStyle: "square", //round,square,navbar

        touchenabled: "on", // Enable Swipe Function : on/off

        navOffsetHorizontal: 0,
        navOffsetVertical: 20,

        fullWidth: "on",

        shadow: 0, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

        stopLoop: "off" // on == Stop loop at the last Slie,  off== Loop all the time.

    });
});


$(document).ready(function() {
    
    // validate signup form on keyup and submit
    $("#formu").validate({
        rules: {
            "user[name]": "required",
            "user[general_register]": "required",
            "user[cpf]": "required",
            "user[birthday]": "required",
            celular: "required",
            "user[gender]": "required",
            instituicao: "required",
            link_facebook: "required",
            
            
            
            "user[email]": {
                required: true,
                email: true
            },
            confemail: {
                required: true,
                email: true,
                equalTo: "#email"
            },
            "user[password]": {
                required: true,
                minlength: 6
            },
            confsenha: {
                required: true,
                minlength: 6,
                equalTo: "#senha"
            },
            
            agree: "required"
        },
        messages: {
            "user[name]": "Campo Obrigatório",
            "user[general_register]": "Campo Obrigatório",
            "user[cpf]": "Campo Obrigatório",
            "user[birthday]": "Campo Obrigatório",
            celular: "Campo Obrigatório",
            "user[gender]": "Campo Obrigatório",
            instituicao: "Campo Obrigatório",
            link_facebook: "Campo Obrigatório",

            "user[email]": {
                required: "Campo Obrigatório",
                
            },
            confemail: {
                required: "Campo Obrigatório",
                equalTo: "Confirmação de email não confere."
            },
            
            
            "user[password]": {
                required: "Campo Obrigatório",
                minlength: "A senha deve conter no mínimo 6 dígitos"
            },
            confsenha: {
                required: "Campo Obrigatório",
                minlength: "A confirmação de senha deve conter no mínimo 6 dígitos",
                equalTo: "Confirmação de senha não confere."
            },
            agree: "Obrigatório aceitar o termo de uso do site!"
        }
    });

    // propose username by combining first- and lastname
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if(firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });

    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function() {
        topics[this.checked ? "removeClass" : "addClass"]("gray");
        topicInputs.attr("disabled", !this.checked);
    });
});


jQuery(function($){
   $("#cpf_dupla").mask("999.999.999-99");
   $("#cpf").mask("999.999.999-99");
   $("#cep").mask("99.999-999");
   $("#birthday").mask("99/99/9999");
   $("#phone").mask("(99) 99999-9999");
   $("#cel").mask("(99) 99999-9999");
});

 $(document).ready(function(){
        $(".ajax").colorbox();
        $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});


$('#cpf_dupla').blur(function(){
        
        $.ajax({
            url: "/comitee/cpf/cpf_find",
            type: "GET",
            data: { cpf:$('#cpf_dupla').val(), id:$('#id_evento').val() },
            dataType: "json",
            success: function(sucesso){
                if (sucesso.success===true){
                    var check = '<span style="color:#3c9332">'+ sucesso.name +'! </span>';
                    $('#result-nome').html(check);
                } else {
                    $('#result-nome').html(sucesso.msg);
                }
            },
            error: function(){
                $('#result-nome').html('Desculpe pelo transtorno, houve um erro, tente novamente.');
            },
            complete: function(){
                $('#result-nome').css({"display":"block"});
                $('#loading').css({"display":"none"});
                
            }
            
        });  
        
    });


});


  $('#categories_event').multiSelect({
  afterSelect: function(values){
    var count = $("#categories_event :selected").length;
    if (count > 5) {
        $("#categories_event").multiSelect('deselect', values);
        alert("Você só pode selecionar 5!")
    }
  }});