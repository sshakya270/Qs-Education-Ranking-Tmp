(function($){'use strict';function stripslashes(str){return(str+'').replace(/\\(.?)/g,function(s,n1){switch(n1){case '\\':return '\\';case '0':return '\u0000';case '':return '';default:return n1;}});}
$(document).ready(function(){$('.datepicker').datepicker({yearRange:"-99:+50",changeMonth:true,changeYear:true,});$(".aol_app_form").submit(function(){var datastring=new FormData(document.getElementById("aol_app_form"));$.ajax({url:aol_public.ajaxurl,type:'POST',dataType:'json',data:datastring,async:false,cache:false,contentType:false,processData:false,beforeSend:function(){$('#aol_form_status').removeClass();$('#aol_form_status').html('Submitting . . . . . ');$('#aol_form_status').addClass('alert alert-warning');$(".aol-form-button").prop('disabled',true);},success:function(response){$(document).trigger('afterAppSubmit',response);if(response['success']==true){$('#aol_form_status').removeClass();$('#aol_form_status').addClass('alert alert-success');$('#aol_form_status').html(response['message']);$(".aol-form-button").prop('disabled',false);if(response['hide_form']==true)$('.aol_app_form').slideUp();if(response.divert!=null){var page=response.divert;window.location.href=stripslashes(page);}}
else if(response['success']==false){$('#aol_form_status').removeClass();$('#aol_form_status').addClass('alert alert-danger');$('#aol_form_status').html(response['error']);$(".aol-form-button").prop('disabled',false);}},error:function(){$('#aol_form_status').removeClass();$('#aol_form_status').addClass('alert alert-danger');$('#aol_form_status').html('An unexpected error occured. Please contact us!');$(".aol-form-button").prop('disabled',false);}});return false;});})})(jQuery);