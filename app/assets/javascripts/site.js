//= require jquery
//= require jquery_ujs
//= require maskedinput
//= require toastr
jQuery(function($){
   $("#cpf").mask("999.999.999-99");
   $("#cep").mask("99999-999");
   $(".phone").mask("(99) 99999-9999)");
});
