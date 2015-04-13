$(document).ready(function(e){

    var basePath = Drupal.settings.basePath;
    var modPath = basePath + "textbook_runs/";
    var modPath1 = basePath + "textbook_runs/books/";
    var modPath2 = basePath + "textbook_runs/books/all";
    var modPath3 = basePath + "textbook_runs/forms/";
    var modPath4 = basePath + "comments/rand/";

$('#feedback_example').hide();
$('.submit_form_feedback_example').hide();

$(this).on('change', '#select_book', function(){
				var	id = $('#select_book').val();					
				var type = $('#select_book').attr('id');				
			    var dataString = 'id='+ id + '&type=' + type;
				    
if(id == 0){
$('#entire_book').hide();
$('#entire_chapter').hide(); 
$('#entire_example').hide(); 
$('#feedback_example').hide();
$('.submit_form_feedback_example').hide();
}else{	    
$.ajax({
      type: "POST",
      url: modPath + "ajax/",
      data: dataString,
      cache: false,
      success: function(result){  
       $('#entire_book').show();     
       $('#entire_book').html(result);                  
      }
      });
      }
					
});
$(this).on('change', '#select_chapter', function(){
				var	id = $('#select_chapter').val();					
				var type = $('#select_chapter').attr('id');				
			    var dataString = 'id='+ id + '&type=' + type;
				    
if(id == 0){

$('#entire_chapter').hide();    
$('#entire_example').hide();    
$('#feedback_example').hide();
$('.submit_form_feedback_example').hide();
}else{	    
$.ajax({
      type: "POST",
      url: modPath + "ajax/",
      data: dataString,
      cache: false,
      success: function(result){  
       $('#entire_chapter').show();     
       $('#entire_chapter').html(result);
       $('#feedback_example').hide();
       $('.submit_form_feedback_example').hide();              
      }
      });
      }
					
});
$(this).on('change', '#select_example', function(){
				var	id = $('#select_example').val();					
				var type = $('#select_example').attr('id');				
			    var dataString = 'id='+ id + '&type=' + type;
				    
if(id == 0){
$('#entire_book').hide();
$('#entire_chapter').hide();
$('#entire_example').hide();       
$('#feedback_example').hide();
$('.submit_form_feedback_example').hide();
}else{	    
$.ajax({
      type: "POST",
      url: modPath + "ajax/",
      data: dataString,
      cache: false,
      success: function(result){  
       $('#entire_example').show();     
       $('#entire_example').html(result);
       $('#feedback_example').hide();
       $('.submit_form_feedback_example').hide();              
      }
      });
      }
					
});
/*****############################******/
$(".submit_form_feedback_example").click(function(){
//$(this).on('submit', '.submit_form_bulk_approve', function(event) {
var pref_id = $("#select_book").val();
var action = $(".form_action:checked").val();
var dis_approve_reason = $("#dis_approve").val();

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'pref_id='+ pref_id + '&action='+ action + '&dis_approve_reason='+ dis_approve_reason ;
if(pref_id==null || pref_id=='', action ==null || action == '' ){
alert('Please select action');

}
else{
// AJAX Code To Submit Form.
console.log(dataString);
var conf_action=confirm("Are  you sure?");
    if (conf_action==true)
    {
$.ajax({
       type: "POST",
       url: modPath1 + "ajax/",
       data: dataString,
       cache: false,			
       success: function(data){
           var re_load=confirm(data);
           if (re_load==true){
              window.location.reload();
           }else{
             window.location.reload();
            }
      }

});
    }
    else
    { 
    window.location.reload(); 
    return false;
    }
//location.reload();
//trigger('reset');		
}
return false;
});
/*****############################******/
	
	 

});/***********************************/




